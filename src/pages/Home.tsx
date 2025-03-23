
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { usePrayerTimes } from "@/hooks/use-prayer-times";
import PrayerCard from "@/components/PrayerCard";
import SectionHeading from "@/components/SectionHeading";
import GoogleMap from "@/components/GoogleMap";
import JumuahTimes from "@/components/JumuahTimes";
import { Separator } from "@/components/ui/separator";

const Home = () => {
  const { prayerTimes, loading, nextPrayer } = usePrayerTimes();

  return (
    <div>
      {/* Hero Section with Parallax */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519817650390-64a93db51149?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background/70 to-background"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-card py-12 px-8 max-w-4xl mx-auto"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl font-playfair font-bold leading-tight"
            >
              Al Hadi Association
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 text-xl sm:text-2xl font-amiri text-muted-foreground max-w-3xl mx-auto"
            >
              Lakeville's Community Mosque
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/donate" className="btn-primary">
                Donate Now
              </Link>
              <a href="#prayer-times" className="btn-secondary">
                Prayer Times
              </a>
            </motion.div>
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

      {/* Donate CTA (Positioned at the top as requested) */}
      <section className="bg-primary/10 border-y-4 border-secondary/30">
        <div className="section-container py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-playfair font-semibold tracking-tight mb-6">Support Your Mosque</h2>
            <p className="text-xl font-amiri text-muted-foreground mb-8">
              Al Hadi Association is a registered 501(c)(3) non-profit organization. All donations are tax-deductible and support our community services.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-lg mx-auto">
              <Link to="/donate" className="btn-primary">
                Donate Online
              </Link>
              <a href="tel:+16514568088" className="btn-secondary">
                Call to Donate
              </a>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Donation Methods: Check, Direct Deposit, Zelle, Zeffy, PayPal, Square
            </p>
          </motion.div>
        </div>
      </section>

      {/* Prayer Times Section */}
      <section id="prayer-times" className="section-container">
        <SectionHeading 
          title="Prayer Times"
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
                  <PrayerCard name="Fajr" time={prayerTimes.Fajr} isNext={nextPrayer.name === 'Fajr'} timeRemaining={nextPrayer.name === 'Fajr' ? nextPrayer.timeRemaining : undefined} />
                  <PrayerCard name="Dhuhr" time={prayerTimes.Dhuhr} isNext={nextPrayer.name === 'Dhuhr'} timeRemaining={nextPrayer.name === 'Dhuhr' ? nextPrayer.timeRemaining : undefined} />
                  <PrayerCard name="Asr" time={prayerTimes.Asr} isNext={nextPrayer.name === 'Asr'} timeRemaining={nextPrayer.name === 'Asr' ? nextPrayer.timeRemaining : undefined} />
                  <PrayerCard name="Maghrib" time={prayerTimes.Maghrib} isNext={nextPrayer.name === 'Maghrib'} timeRemaining={nextPrayer.name === 'Maghrib' ? nextPrayer.timeRemaining : undefined} />
                  <PrayerCard name="Isha" time={prayerTimes.Isha} isNext={nextPrayer.name === 'Isha'} timeRemaining={nextPrayer.name === 'Isha' ? nextPrayer.timeRemaining : undefined} />
                </>
              )}
            </>
          ) : (
            <div className="col-span-full py-4 text-center">
              <p className="text-lg font-amiri">Prayer times not available. Please check back later.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                <PrayerCard name="Fajr" time="6:10 AM" />
                <PrayerCard name="Dhuhr" time="1:30 PM" />
                <PrayerCard name="Asr" time="5:30 PM" />
                <PrayerCard name="Maghrib" time="8:15 PM" />
                <PrayerCard name="Isha" time="9:10 PM" />
              </div>
            </div>
          )}
        </div>
        
        <div className="mt-12">
          <JumuahTimes />
        </div>
      </section>
      
      {/* Location Section */}
      <section id="location" className="section-container">
        <SectionHeading 
          title="Find Us"
          subtitle="We are located in Lakeville, MN"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="glass-card p-6 rounded-xl"
          >
            <h3 className="text-2xl font-playfair font-semibold mb-4">Al Hadi Association</h3>
            <div className="space-y-3 font-amiri">
              <p className="flex items-start">
                <span className="mr-2">📍</span>
                <span>17685 Juniper Path, Suite 313<br />Lakeville, MN 55044</span>
              </p>
              <p className="flex items-center">
                <span className="mr-2">📞</span>
                <a href="tel:+16514568088" className="hover:text-primary">(651) 456-8088</a>
              </p>
              <p className="flex items-center">
                <span className="mr-2">📧</span>
                <a href="mailto:alhadilakeville@gmail.com" className="hover:text-primary">alhadilakeville@gmail.com</a>
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <GoogleMap />
          </motion.div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="bg-secondary/10 border-y-4 border-primary/20">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-playfair font-semibold tracking-tight mb-6">About Al Hadi Association</h2>
              <div className="space-y-4 text-lg font-amiri text-muted-foreground">
                <p>
                  Al Hadi Association is a Sunni mosque established in 2019 to serve the local Muslim community by providing daily prayers and religious activities.
                </p>
                <p>
                  The mosque is welcoming to all and encourages community engagement through educational programs, social gatherings, and outreach services.
                </p>
                <p>
                  Our mission is to provide a spiritual sanctuary for Muslims in Lakeville and surrounding areas while promoting understanding, respect, and cooperation among all faiths.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="rounded-xl overflow-hidden shadow-lg border-4 border-secondary/30"
            >
              <img 
                src="https://images.unsplash.com/photo-1564769513425-2cb3e2cefe07?q=80&w=1974&auto=format&fit=crop" 
                alt="Mosque Interior" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
          
          <div className="mt-16">
            <h3 className="text-2xl font-playfair font-semibold mb-6 text-center">Management Board</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {[
                { name: "Masood Ahmad", role: "President" },
                { name: "Muhammad Shabaz", role: "Secretary" },
                { name: "Shahid Nadeem", role: "Treasurer" },
                { name: "Muhammad Shouab", role: "Religious Affairs" },
                { name: "Muhammad Sohaib Ahmad", role: "Communication Director" }
              ].map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card p-4 text-center rounded-xl border-t-4 border-t-primary"
                >
                  <h4 className="font-playfair font-semibold">{member.name}</h4>
                  <p className="text-sm text-muted-foreground mt-1 font-amiri">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact CTA */}
      <section id="contact" className="section-container">
        <div className="max-w-4xl mx-auto">
          <SectionHeading 
            title="Contact Us"
            subtitle="We'd love to hear from you"
          />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-playfair font-semibold">Get In Touch</h3>
                <p className="font-amiri">For any inquiries about prayer times, events, or general information, please don't hesitate to contact us.</p>
                <div className="space-y-3 mt-6 font-amiri">
                  <p className="flex items-center">
                    <span className="mr-2">📞</span>
                    <a href="tel:+16514568088" className="hover:text-primary">(651) 456-8088</a>
                  </p>
                  <p className="flex items-center">
                    <span className="mr-2">📧</span>
                    <a href="mailto:alhadilakeville@gmail.com" className="hover:text-primary">alhadilakeville@gmail.com</a>
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-playfair font-semibold">Connect With Us</h3>
                <p className="font-amiri">Follow us on social media to stay updated with our activities and announcements.</p>
                <div className="flex space-x-4 mt-6">
                  <a 
                    href="https://www.facebook.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-outline"
                  >
                    Facebook
                  </a>
                  <a 
                    href="https://www.whatsapp.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-outline"
                  >
                    WhatsApp Group
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
