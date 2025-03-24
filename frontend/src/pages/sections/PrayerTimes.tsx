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
  const { prayerTimes, loading, nextPrayer } = usePrayerTimes();
  
  return (
    <div>
      {/* Prayer Times Section */}
      <section id="prayer-times" className="section-container">
        <SectionHeading 
          title="Prayer Times (Mar 20-29)"
          subtitle="Join us for daily prayers at Al Hadi Association"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            <div className="col-span-full text-center py-10">
              <p className="text-lg font-amiri">Loading prayer times...</p>
            </div>
          ) : nextPrayer ? (
            <>
              {/* Next Prayer */}
              <div className="lg:col-span-3 mb-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="glass-card rounded-xl p-8 bg-primary/5 border-t-4 border-t-primary"
                >
                  <div className="flex justify-between items-center flex-wrap gap-4">
                    <div>
                      <h3 className="text-sm uppercase tracking-wider text-muted-foreground">Next Prayer</h3>
                      <h2 className="text-3xl font-playfair font-bold mt-1">{nextPrayer.name}</h2>
                      <p className="text-2xl font-amiri mt-1">{nextPrayer.time}</p>
                    </div>
                    <div className="bg-primary/10 px-6 py-4 rounded-lg">
                      <p className="text-sm text-muted-foreground">Time Remaining</p>
                      <p className="text-2xl font-bold text-primary font-amiri">{nextPrayer.timeRemaining}</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Daily Prayers */}
              {prayerTimes && (
                <>
                  {["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"].map((prayer) => (
                    <PrayerCard 
                      key={prayer}
                      name={prayer} 
                      adhanTime={prayerTimes[prayer] || iqamaTimes[prayer]} 
                      iqamaTime={iqamaTimes[prayer]} 
                      isNext={nextPrayer.name === prayer} 
                      timeRemaining={nextPrayer.name === prayer ? nextPrayer.timeRemaining : undefined} 
                    />
                  ))}
                </>
              )}
            </>
          ) : (
            <div className="col-span-full py-4 text-center">
              <p className="text-lg font-amiri">Prayer times not available. Please check back later.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {Object.keys(iqamaTimes).map((prayer) => (
                  <PrayerCard key={prayer} name={prayer} iqamaTime={iqamaTimes[prayer]} />
                ))}
              </div>
            </div>
          )}
        </div>
        
        <div className="mt-12">
          <JumuahTimes />
        </div>
      </section>
    </div>
  );
};

export default PrayerTimes;
