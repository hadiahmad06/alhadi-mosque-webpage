import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import GoogleMap from "@/components/GoogleMap";

const Location = () => {
    return (
        <div>
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
    </div>
    );
};

export default Location