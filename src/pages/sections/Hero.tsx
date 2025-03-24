
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { usePrayerTimes } from "@/hooks/use-prayer-times";
import PrayerCard from "@/components/PrayerCard";
import SectionHeading from "@/components/SectionHeading";
import GoogleMap from "@/components/GoogleMap";
import JumuahTimes from "@/components/JumuahTimes";
import { Separator } from "@/components/ui/separator";

const Hero = () => {
  const { prayerTimes, loading, nextPrayer } = usePrayerTimes();

  return (
    <div>
      {/* Hero Section with Parallax */}
      <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://lh3.googleusercontent.com/p/AF1QipM3d3YWkh0d15SYh4ix3fvb669J7Jk2Gsv-azk8=s680-w680-h510')] bg-cover bg-center opacity-70 filter blur-md"></div>
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
              <a href="#donate" className="btn-primary">
                Donate Now
              </a>
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
    </div>
  );
};

export default Hero;
