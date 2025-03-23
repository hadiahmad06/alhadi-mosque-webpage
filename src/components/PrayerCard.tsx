
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface PrayerCardProps {
  name: string;
  time: string;
  isNext?: boolean;
  timeRemaining?: string;
  iqamaTime?: string;
}

const PrayerCard = ({ name, time, isNext, timeRemaining, iqamaTime }: PrayerCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={cn(
        "glass-card rounded-xl p-6 flex flex-col border-t-4",
        isNext ? "border-t-primary bg-primary/5" : "border-t-secondary"
      )}
    >
      <h3 className="text-lg font-playfair font-semibold mb-1">{name}</h3>
      <div className="space-y-2">
        <div>
          <p className="text-xs text-muted-foreground">Adhan</p>
          <p className="text-xl font-bold font-amiri">{time}</p>
        </div>
        {iqamaTime && (
          <div>
            <p className="text-xs text-muted-foreground">Iqama</p>
            <p className="text-xl font-bold font-amiri text-secondary">{iqamaTime}</p>
          </div>
        )}
      </div>
      {isNext && timeRemaining && (
        <div className="mt-3 pt-3 border-t border-primary/20">
          <p className="text-sm text-muted-foreground">Coming up in:</p>
          <p className="text-lg font-medium text-primary">{timeRemaining}</p>
        </div>
      )}
    </motion.div>
  );
};

export default PrayerCard;
