
import { motion } from "framer-motion";
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
      {/* About Hero */}
      <section className="relative py-20 bg-secondary/30">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl sm:text-5xl font-display font-bold tracking-tight mb-6">About Us</h1>
            <p className="text-xl text-muted-foreground">
              Learn about Al Hadi Association, our mission, and the people who make our community strong.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Info */}
      <section className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl font-display font-semibold tracking-tight">Our Story</h2>
            <div className="space-y-4 text-lg">
              <p>
                Al Hadi Association is a Sunni mosque located at 17685 Juniper Path, Suite 313, Lakeville, MN 55044.
              </p>
              <p>
                Established in 2019, our mosque serves the local Muslim community by providing daily prayers, 
                educational programs, and religious activities. We strive to create a welcoming environment for Muslims 
                and non-Muslims alike, encouraging interfaith dialogue and community engagement.
              </p>
              <p>
                Our mission is to provide a place of worship for Muslims in Lakeville and surrounding areas, 
                promote Islamic education and understanding, and serve as a pillar for the community through 
                charitable works and social services.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden shadow-lg aspect-video"
          >
            <img
              src="https://images.unsplash.com/photo-1591280063444-d3c514eb6e13?q=80&w=1964&auto=format&fit=crop"
              alt="Mosque Interior"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Management Board */}
      <section className="bg-secondary/30 py-20">
        <div className="section-container">
          <SectionHeading
            title="Management Board"
            subtitle="Meet the team dedicated to serving our community"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {boardMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>{member.name}</CardTitle>
                    <CardDescription className="text-primary font-medium">
                      {member.position}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>{member.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="section-container">
        <SectionHeading
          title="Our Location"
          subtitle="Visit us at our Lakeville location"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-xl font-semibold mb-2">Address</h3>
              <p className="text-lg">17685 Juniper Path, Suite 313</p>
              <p className="text-lg">Lakeville, MN 55044</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
              <p className="text-lg">Email: alhadilakeville@gmail.com</p>
              <p className="text-lg">Phone: (651) 456-8088</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Office Hours</h3>
              <p className="text-lg">Open daily: 30 minutes before Fajr until after Isha</p>
              <p className="text-lg">Administrative assistance available by appointment</p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <GoogleMap />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
