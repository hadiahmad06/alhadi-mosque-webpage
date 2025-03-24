import Hero from "./sections/Hero"
import About from "./sections/About"
import Location from "./sections/Location"
import Contact from "./sections/Contact"
import Donate from "./sections/Donate"
import PrayerTimes from "./sections/PrayerTimes"
const Index = () => {
  return (
    <div>
      <Hero />
      <Location />
      <PrayerTimes />
      <Donate />
      <About />
      <Contact />
    </div>
  );
};

export default Index;
