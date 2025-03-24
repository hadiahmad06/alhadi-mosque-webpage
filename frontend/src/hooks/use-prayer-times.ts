
import { useState, useEffect } from 'react';
import axios from 'axios';

interface PrayerTimes {
  Fajr: string;
  Dhuhr: string;
  Asr: string;
  Maghrib: string;
  Isha: string;
  Sunrise: string;
  Sunset: string;
  date: {
    readable: string;
    gregorian: string;
    hijri: string;
  };
  meta: {
    timezone: string;
  };
  timings: Record<string, string>;
}

interface UsePrayerTimesResult {
  prayerTimes: PrayerTimes | null;
  loading: boolean;
  error: Error | null;
  nextPrayer: {
    name: string;
    time: string;
    timeRemaining: string;
  } | null;
  calculationMethod: number;
  setCalculationMethod: (method: number) => void;
}

const formatTimeWithoutSeconds = (time: string) => {
  if (!time) return '';
  const [hours, minutes] = time.split(':');
  const parsedHours = parseInt(hours, 10);
  const amPm = parsedHours >= 12 ? 'PM' : 'AM';
  const hours12 = parsedHours % 12 || 12;
  return `${hours12}:${minutes} ${amPm}`;
};

const getTimeRemaining = (targetTime: string) => {
  const now = new Date();
  const [targetHours, targetMinutes] = targetTime.split(':').map(Number);
  
  const target = new Date();
  target.setHours(targetHours, targetMinutes, 0, 0);
  
  if (target < now) {
    target.setDate(target.getDate() + 1);
  }
  
  const diff = target.getTime() - now.getTime();
  
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  
  return `${hours}h ${minutes}m`;
};

export const usePrayerTimes = (): UsePrayerTimesResult => {
  const [prayerTimes, setPrayerTimes] = useState<PrayerTimes | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [nextPrayer, setNextPrayer] = useState<{name: string; time: string; timeRemaining: string} | null>(null);
  const [calculationMethod, setCalculationMethod] = useState<number>(2); // Default to ISNA method

  useEffect(() => {
    const fetchPrayerTimes = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://api.aladhan.com/v1/timingsByCity?city=Lakeville&country=US&method=${calculationMethod}`
        );
        const data = response.data.data;
        
        // Format the times for display
        const formattedTimings: Record<string, string> = {};
        for (const [key, value] of Object.entries(data.timings)) {
          formattedTimings[key] = formatTimeWithoutSeconds(value as string);
        }
        
        setPrayerTimes({
          ...data,
          Fajr: formattedTimings.Fajr,
          Dhuhr: formattedTimings.Dhuhr,
          Asr: formattedTimings.Asr,
          Maghrib: formattedTimings.Maghrib,
          Isha: formattedTimings.Isha,
          Sunrise: formattedTimings.Sunrise,
          Sunset: formattedTimings.Sunset,
          timings: formattedTimings
        });
        setError(null);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchPrayerTimes();
    
    // Set up interval to update timer every minute
    const timer = setInterval(() => {
      if (prayerTimes?.timings) {
        updateNextPrayer(prayerTimes.timings);
      }
    }, 60000);
    
    return () => clearInterval(timer);
  }, [calculationMethod]);
  
  // Calculate the next prayer time
  useEffect(() => {
    if (prayerTimes?.timings) {
      updateNextPrayer(prayerTimes.timings);
    }
  }, [prayerTimes]);
  
  const updateNextPrayer = (timings: Record<string, string>) => {
    const prayerOrder = ['Fajr', 'Sunrise', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];
    const now = new Date();
    let nextPrayerName = '';
    let nextPrayerTime = '';
    
    // Convert prayer times to Date objects for comparison
    const prayerTimes = prayerOrder.map(prayer => {
      const [time, period] = timings[prayer].split(' ');
      const [hours, minutes] = time.split(':');
      let hour = parseInt(hours, 10);
      
      // Convert to 24-hour format
      if (period === 'PM' && hour !== 12) {
        hour += 12;
      } else if (period === 'AM' && hour === 12) {
        hour = 0;
      }
      
      const prayerDate = new Date();
      prayerDate.setHours(hour, parseInt(minutes, 10), 0, 0);
      
      return {
        name: prayer,
        time: timings[prayer],
        date: prayerDate
      };
    });
    
    // Find the next prayer
    for (const prayer of prayerTimes) {
      if (prayer.date > now) {
        nextPrayerName = prayer.name;
        nextPrayerTime = prayer.time;
        break;
      }
    }
    
    // If no prayer found today, the next prayer is Fajr of the next day
    if (!nextPrayerName) {
      nextPrayerName = 'Fajr';
      nextPrayerTime = timings.Fajr;
    }
    
    // Calculate time remaining
    const [time, period] = nextPrayerTime.split(' ');
    const [hours, minutes] = time.split(':');
    let hour = parseInt(hours, 10);
    
    if (period === 'PM' && hour !== 12) {
      hour += 12;
    } else if (period === 'AM' && hour === 12) {
      hour = 0;
    }
    
    const timeString = `${hour}:${minutes}`;
    const timeRemaining = getTimeRemaining(timeString);
    
    setNextPrayer({
      name: nextPrayerName,
      time: nextPrayerTime,
      timeRemaining
    });
  };

  return {
    prayerTimes,
    loading,
    error,
    nextPrayer,
    calculationMethod,
    setCalculationMethod
  };
};
