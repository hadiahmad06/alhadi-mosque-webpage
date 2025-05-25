
import { motion } from "framer-motion";
import parallaxImage from "/images/frontfacing.webp"
import SectionHeading from "@/components/SectionHeading";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import GoogleMap from "@/components/GoogleMap";

const boardMembers = [
  {
    name: "Masood Ahmad",
    position: "President",
    bio: "Leading Al Hadi Association since its inception in 2019.",
  },
  {
    name: "Muhammad Shabaz",
    position: "Secretary",
    bio: "Handling administrative matters and community communications.",
  },
  {
    name: "Shahid Nadeem",
    position: "Treasurer",
    bio: "Managing financial affairs and donation processing.",
  },
  {
    name: "Muhammad Shouab",
    position: "Religious Affairs",
    bio: "Coordinating religious activities and educational programs.",
  },
  {
    name: "Muhammad Sohaib Ahmad",
    position: "Communication Director",
    bio: "Managing outreach and public relations initiatives.",
  },
];

const About = () => {
  return (
    <div className="pt-20">
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
                src={parallaxImage}
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
    </div>
  );
};

export default About;
