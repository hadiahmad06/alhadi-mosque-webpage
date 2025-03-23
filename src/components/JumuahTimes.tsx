
import { motion } from 'framer-motion';

const JumuahTimes = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
      className="glass-card rounded-xl p-6"
    >
      <h3 className="text-xl font-semibold mb-4">Jumu'ah Prayer</h3>
      
      <div className="space-y-5">
        <div className="bg-secondary/50 rounded-lg p-4">
          <h4 className="font-medium mb-2">1st Jumu'ah</h4>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <p className="text-sm text-muted-foreground">Adhan</p>
              <p className="font-semibold">1:25 PM</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Iqamah</p>
              <p className="font-semibold">1:45 PM</p>
            </div>
          </div>
        </div>
        
        <div className="bg-secondary/50 rounded-lg p-4">
          <h4 className="font-medium mb-2">2nd Jumu'ah</h4>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <p className="text-sm text-muted-foreground">Adhan</p>
              <p className="font-semibold">2:25 PM</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Iqamah</p>
              <p className="font-semibold">2:45 PM</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default JumuahTimes;
