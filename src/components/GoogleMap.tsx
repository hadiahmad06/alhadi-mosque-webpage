
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const GoogleMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create a script element
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=`;
    script.async = true;
    script.defer = true;
    script.onload = initMap;
    
    // Append the script to the document
    document.head.appendChild(script);

    // Cleanup function
    return () => {
      // Remove the script when component unmounts
      document.head.removeChild(script);
    };
  }, []);

  const initMap = () => {
    if (mapRef.current && window.google) {
      // Mosque location coordinates
      const mosqueLocation = { lat: 44.7010, lng: -93.2194 }; // Approximate coordinates for Lakeville, MN
      
      // Create the map
      const map = new window.google.maps.Map(mapRef.current, {
        center: mosqueLocation,
        zoom: 15,
        mapId: 'b30af38622f87f82',
        disableDefaultUI: true,
        zoomControl: true,
        fullscreenControl: true,
      });
      
      // Add marker for the mosque
      const marker = new window.google.maps.Marker({
        position: mosqueLocation,
        map: map,
        title: 'Al Hadi Association',
        animation: window.google.maps.Animation.DROP,
      });
      
      // Add info window
      const infoWindow = new window.google.maps.InfoWindow({
        content: `
          <div style="padding: 8px; max-width: 200px;">
            <h3 style="margin: 0 0 8px; font-size: 16px; font-weight: 600;">Al Hadi Association</h3>
            <p style="margin: 0; font-size: 14px;">17685 Juniper Path, Suite 313<br>Lakeville, MN 55044</p>
          </div>
        `,
      });
      
      // Open info window when marker is clicked
      marker.addListener('click', () => {
        infoWindow.open(map, marker);
      });
      
      // Initially open the info window
      infoWindow.open(map, marker);
    }
  };

  const handleGetDirections = () => {
    const destination = "17685+Juniper+Path+Suite+313+Lakeville+MN";
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${destination}`, '_blank');
  };

  return (
    <div className="relative h-[500px] w-full rounded-lg overflow-hidden shadow-lg">
      <div ref={mapRef} className="h-full w-full" />
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
