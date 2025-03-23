
import { useState } from "react";
import { motion } from "framer-motion";
import { usePrayerTimes } from "@/hooks/use-prayer-times";
import SectionHeading from "@/components/SectionHeading";
import PrayerCard from "@/components/PrayerCard";
import JumuahTimes from "@/components/JumuahTimes";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Fixed iqama times for Al Hadi Association
const iqamaTimes = {
  Fajr: "6:10 AM",
  Dhuhr: "1:30 PM",
  Asr: "5:30 PM",
  Maghrib: "10 min after sunset",
  Isha: "9:10 PM",
};

const PrayerTimes = () => {
  const { prayerTimes, loading, error, nextPrayer, calculationMethod, setCalculationMethod } = usePrayerTimes();
  
  const calculationMethods = [
    { id: 0, name: "Shafi (University of Islamic Sciences, Karachi)" },
    { id: 1, name: "Hanafi (Islamic Society of North America)" },
    { id: 2, name: "ISNA - North America" },
    { id: 3, name: "Muslim World League" },
    { id: 4, name: "Umm al-Qura - Makkah" },
    { id: 5, name: "Egyptian General Authority of Survey" },
    { id: 7, name: "Institute of Geophysics, University of Tehran" },
    { id: 8, name: "Gulf Region" },
    { id: 9, name: "Kuwait" },
    { id: 10, name: "Qatar" },
    { id: 11, name: "Majlis Ugama Islam Singapura, Singapore" },
    { id: 12, name: "Union Organization islamic de France" },
    { id: 13, name: "Diyanet İşleri Başkanlığı, Turkey" },
    { id: 14, name: "Spiritual Administration of Muslims of Russia" },
    { id: 15, name: "Moonsighting Committee Worldwide (Moonsighting.com)" },
  ];

  const handleMethodChange = (value: string) => {
    setCalculationMethod(Number(value));
  };

  return (
    <div className="pt-20">
      <section className="section-container py-16 md:py-24">
        <SectionHeading 
          title="Prayer Times"
          subtitle="Join us for daily prayers at Al Hadi Association"
        />
        
        <div className="mb-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-md mx-auto"
          >
            <label className="block text-sm font-medium text-foreground mb-2">
              Calculation Method
            </label>
            <Select value={calculationMethod.toString()} onValueChange={handleMethodChange}>
              <SelectTrigger>
                <SelectValue placeholder="Select a calculation method" />
              </SelectTrigger>
              <SelectContent>
                {calculationMethods.map((method) => (
                  <SelectItem key={method.id} value={method.id.toString()}>
                    {method.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            <div className="col-span-full text-center py-10">
              <p className="text-lg">Loading prayer times...</p>
            </div>
          ) : error ? (
            <div className="col-span-full text-center py-10">
              <p className="text-lg text-destructive">Error loading prayer times. Please try again later.</p>
            </div>
          ) : (
            <>
              {/* Next Prayer */}
              <div className="col-span-full mb-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="glass-card rounded-xl p-8 bg-primary/5 border-primary/20"
                >
                  <div className="flex justify-between items-center flex-wrap gap-6">
                    <div>
                      <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Next Prayer</h3>
                      <h2 className="text-3xl font-bold mt-1">{nextPrayer?.name}</h2>
                      <div className="mt-2">
                        <div>
                          <p className="text-xs text-muted-foreground">Adhan</p>
                          <p className="text-2xl">{nextPrayer?.time}</p>
                        </div>
                        {nextPrayer?.name && iqamaTimes[nextPrayer.name as keyof typeof iqamaTimes] && (
                          <div className="mt-1">
                            <p className="text-xs text-muted-foreground">Iqama</p>
                            <p className="text-2xl text-secondary">{iqamaTimes[nextPrayer.name as keyof typeof iqamaTimes]}</p>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="bg-primary/10 px-6 py-4 rounded-lg">
                      <p className="text-sm text-muted-foreground">Time Remaining</p>
                      <p className="text-2xl font-bold text-primary">{nextPrayer?.timeRemaining}</p>
                    </div>
                    {prayerTimes?.date && (
                      <div className="ml-auto">
                        <p className="text-sm text-muted-foreground">Today's Date</p>
                        <p className="text-lg font-medium">{prayerTimes.date.readable}</p>
                        <p className="text-sm text-muted-foreground mt-1">{prayerTimes.date.hijri}</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              </div>
              
              {/* Today's Prayer Times */}
              <div className="col-span-1 md:col-span-2 space-y-6">
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-xl font-semibold"
                >
                  Today's Prayer Times
                </motion.h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {prayerTimes && (
                    <>
                      <PrayerCard 
                        name="Fajr" 
                        time={prayerTimes.Fajr} 
                        isNext={nextPrayer?.name === 'Fajr'} 
                        timeRemaining={nextPrayer?.name === 'Fajr' ? nextPrayer.timeRemaining : undefined} 
                        iqamaTime={iqamaTimes.Fajr}
                      />
                      <PrayerCard 
                        name="Sunrise" 
                        time={prayerTimes.Sunrise} 
                        isNext={nextPrayer?.name === 'Sunrise'} 
                        timeRemaining={nextPrayer?.name === 'Sunrise' ? nextPrayer.timeRemaining : undefined} 
                      />
                      <PrayerCard 
                        name="Dhuhr" 
                        time={prayerTimes.Dhuhr} 
                        isNext={nextPrayer?.name === 'Dhuhr'} 
                        timeRemaining={nextPrayer?.name === 'Dhuhr' ? nextPrayer.timeRemaining : undefined} 
                        iqamaTime={iqamaTimes.Dhuhr}
                      />
                      <PrayerCard 
                        name="Asr" 
                        time={prayerTimes.Asr} 
                        isNext={nextPrayer?.name === 'Asr'} 
                        timeRemaining={nextPrayer?.name === 'Asr' ? nextPrayer.timeRemaining : undefined} 
                        iqamaTime={iqamaTimes.Asr}
                      />
                      <PrayerCard 
                        name="Maghrib" 
                        time={prayerTimes.Maghrib} 
                        isNext={nextPrayer?.name === 'Maghrib'} 
                        timeRemaining={nextPrayer?.name === 'Maghrib' ? nextPrayer.timeRemaining : undefined} 
                        iqamaTime={iqamaTimes.Maghrib}
                      />
                      <PrayerCard 
                        name="Isha" 
                        time={prayerTimes.Isha} 
                        isNext={nextPrayer?.name === 'Isha'} 
                        timeRemaining={nextPrayer?.name === 'Isha' ? nextPrayer.timeRemaining : undefined} 
                        iqamaTime={iqamaTimes.Isha}
                      />
                    </>
                  )}
                </div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-sm text-muted-foreground mt-4"
                >
                  <p>* Prayer times are calculated using the {calculationMethods.find(method => method.id === calculationMethod)?.name} method.</p>
                  <p>* Times are adjusted for Lakeville, MN and may vary slightly based on calculation method.</p>
                  <p className="mt-2">* Iqama times are fixed for Al Hadi Association at {iqamaTimes.Fajr} (Fajr), {iqamaTimes.Dhuhr} (Dhuhr), {iqamaTimes.Asr} (Asr), {iqamaTimes.Maghrib} (Maghrib), and {iqamaTimes.Isha} (Isha).</p>
                  <p>* Address: 17685 Juniper Path Suite #313, Lakeville, MN 55044</p>
                </motion.div>
              </div>
              
              {/* Jumu'ah Times */}
              <JumuahTimes />
            </>
          )}
        </div>
      </section>
      
      <section className="bg-secondary/30 py-16">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-2xl sm:text-3xl font-display font-semibold tracking-tight mb-6">Ramadan Prayer Times</h2>
            <p className="text-lg text-muted-foreground mb-4">
              During the blessed month of Ramadan, prayer times may be adjusted to accommodate Taraweeh prayers.
            </p>
            <p className="text-lg text-muted-foreground">
              Please check our announcements or contact us for the most up-to-date Ramadan schedule.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PrayerTimes;
