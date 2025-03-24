
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// Define the Google Maps types
declare global {
  interface Window {
    google: any;
    initMap: () => void;
  }
}

const GoogleMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Disable actual API call as requested, show static map instead
    const initMap = () => {
      if (mapRef.current) {
        // Simple static display of map container
        const mapContainer = mapRef.current;
        mapContainer.style.backgroundImage = "url('https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80')";
        mapContainer.style.backgroundSize = "cover";
        mapContainer.style.backgroundPosition = "center";
      }
    };
    
    // Initialize map immediately instead of loading the script
    initMap();
    
    return () => {
      // No cleanup needed for static map
    };
  }, []);

  const handleGetDirections = () => {
    const destination = "17685+Juniper+Path+Lakeville+MN+55044";
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${destination}`, '_blank');
  };

  return (
    <div className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-lg border-4 border-secondary/30">
      <div ref={mapRef} className="h-full w-full flex items-center justify-center">
        <div className="glass-card p-6 text-center">
          <h3 className="text-xl font-semibold mb-2">Al Hadi Association</h3>
          <p className="mb-4">17685 Juniper Path, Suite 313, Lakeville, MN 55044</p>
        </div>
      </div>
      <motion.div 
        className="absolute bottom-4 right-4 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <button 
          onClick={handleGetDirections}
          className="btn-primary flex items-center gap-2"
        >
          Get Directions
        </button>
      </motion.div>
    </div>
  );
};

export default GoogleMap;
