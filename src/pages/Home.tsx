
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { usePrayerTimes } from "@/hooks/use-prayer-times";
import PrayerCard from "@/components/PrayerCard";
import SectionHeading from "@/components/SectionHeading";
import GoogleMap from "@/components/GoogleMap";
import { Separator } from "@/components/ui/separator";

const Home = () => {
  const { prayerTimes, loading, nextPrayer } = usePrayerTimes();

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-primary/20 to-background">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1564769513425-2cb3e2cefe07?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-display font-bold leading-tight"
          >
            Welcome to Al Hadi Association
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto"
          >
            Lakeville's Community Mosque
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/prayer-times" className="btn-primary">
              View Prayer Times
            </Link>
            <Link to="/about" className="btn-secondary">
              Learn More
            </Link>
          </motion.div>
        </div>
        
        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="animate-bounce"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="text-primary"
            >
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <polyline points="19 12 12 19 5 12"></polyline>
            </svg>
          </motion.div>
        </div>
      </section>

      {/* Next Prayer Section */}
      <section className="section-container py-20">
        <SectionHeading 
          title="Prayer Times"
          subtitle="Join us for daily prayers at Al Hadi Association"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            <div className="col-span-full text-center py-10">
              <p className="text-lg">Loading prayer times...</p>
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
                  className="glass-card rounded-xl p-8 bg-primary/5 border-primary/20"
                >
                  <div className="flex justify-between items-center flex-wrap gap-4">
                    <div>
                      <h3 className="text-sm uppercase tracking-wider text-muted-foreground">Next Prayer</h3>
                      <h2 className="text-3xl font-bold mt-1">{nextPrayer.name}</h2>
                      <p className="text-2xl mt-1">{nextPrayer.time}</p>
                    </div>
                    <div className="bg-primary/10 px-6 py-4 rounded-lg">
                      <p className="text-sm text-muted-foreground">Time Remaining</p>
                      <p className="text-2xl font-bold text-primary">{nextPrayer.timeRemaining}</p>
                    </div>
                    <div className="w-full sm:w-auto sm:ml-auto">
                      <Link to="/prayer-times" className="btn-primary w-full">View All Times</Link>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Daily Prayers */}
              {prayerTimes && (
                <>
                  <PrayerCard name="Fajr" time={prayerTimes.Fajr} isNext={nextPrayer.name === 'Fajr'} timeRemaining={nextPrayer.name === 'Fajr' ? nextPrayer.timeRemaining : undefined} />
                  <PrayerCard name="Dhuhr" time={prayerTimes.Dhuhr} isNext={nextPrayer.name === 'Dhuhr'} timeRemaining={nextPrayer.name === 'Dhuhr' ? nextPrayer.timeRemaining : undefined} />
                  <PrayerCard name="Asr" time={prayerTimes.Asr} isNext={nextPrayer.name === 'Asr'} timeRemaining={nextPrayer.name === 'Asr' ? nextPrayer.timeRemaining : undefined} />
                  <PrayerCard name="Maghrib" time={prayerTimes.Maghrib} isNext={nextPrayer.name === 'Maghrib'} timeRemaining={nextPrayer.name === 'Maghrib' ? nextPrayer.timeRemaining : undefined} />
                  <PrayerCard name="Isha" time={prayerTimes.Isha} isNext={nextPrayer.name === 'Isha'} timeRemaining={nextPrayer.name === 'Isha' ? nextPrayer.timeRemaining : undefined} />
                </>
              )}
            </>
          ) : null}
        </div>
      </section>
      
      {/* About Brief Section */}
      <section className="bg-secondary/30">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-display font-semibold tracking-tight mb-6">About Al Hadi Association</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Al Hadi Association is a Sunni mosque established in 2019 to serve the local Muslim community by providing daily prayers and religious activities. 
                The mosque is welcoming to all and encourages community engagement.
              </p>
              <Link to="/about" className="btn-primary">
                Learn More
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <img 
                src="https://images.unsplash.com/photo-1564769513425-2cb3e2cefe07?q=80&w=1974&auto=format&fit=crop" 
                alt="Mosque Interior" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Location Section */}
      <section className="section-container">
        <SectionHeading 
          title="Find Us"
          subtitle="We are located in Lakeville, MN"
        />
        
        <GoogleMap />
      </section>
      
      {/* Donate CTA */}
      <section className="bg-primary/5">
        <div className="section-container py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-display font-semibold tracking-tight mb-6">Support Your Mosque</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Al Hadi Association is a registered 501(c)(3) non-profit organization. All donations are tax-deductible and support our community services.
            </p>
            <Link to="/donate" className="btn-primary">
              Donate Now
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
