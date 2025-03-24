
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Facebook, Instagram, MessageCircle } from "lucide-react";
import SectionNav from "@/components/NavButtons";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>17685 Juniper Path, Suite 313</p>
              <p>Lakeville, MN 55044</p>
              <p>Email: alhadilakeville@gmail.com</p>
              <p>Phone: (651) 456-8088</p>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <SectionNav
                className="block text-muted-foreground hover:text-primary transition-colors"
                id="prayer-times"
                text="Prayer Times"
              />
              <SectionNav
                className="block text-muted-foreground hover:text-primary transition-colors"
                id="about"
                text="About Us"
              />
              <SectionNav
                className="block text-muted-foreground hover:text-primary transition-colors"
                id="donate"
                text="Donate"
              />
              <SectionNav
                className="block text-muted-foreground hover:text-primary transition-colors"
                id="contact"
                text="Contact Us"
              />
            </div>
          </motion.div>

          {/* Social & Copyright */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <h3 className="text-lg font-semibold">Connect With Us</h3>
            <div className="flex flex-col space-y-3 mt-6">
              <a 
                href="https://www.facebook.com/AlhadiAssociation" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook size={24} />
                <span>Facebook</span>
              </a>
              <a 
                href="https://www.instagram.com/alhadimasjid"
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram size={24} />
                <span>Instagram</span>
              </a>
              <a 
                href="https://chat.whatsapp.com/EA4ZKCd2Cm74MqsnIE6NVb"
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <MessageCircle size={24} />
                <span>Prayer WhatsApp Group</span>
              </a>
              <a 
                href="https://chat.whatsapp.com/BeifACIbbH34dfRTQdsDt2" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <MessageCircle size={24} />
                <span>Ladies' WhatsApp Group</span>
              </a>
            </div>
            <div className="pt-4 mt-4 border-t border-border text-sm text-muted-foreground">
              <p>© {new Date().getFullYear()} Al Hadi Association. All rights reserved.</p>
              <p className="mt-1">A 501(c)(3) non-profit organization.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
