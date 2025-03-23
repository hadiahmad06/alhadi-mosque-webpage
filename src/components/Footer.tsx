
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
              <Link to="/prayer-times" className="block text-muted-foreground hover:text-primary transition-colors">
                Prayer Times
              </Link>
              <Link to="/about" className="block text-muted-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              <Link to="/donate" className="block text-muted-foreground hover:text-primary transition-colors">
                Donate
              </Link>
              <Link to="/contact" className="block text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
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
            <div className="space-y-2">
              <a 
                href="https://www.facebook.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Facebook
              </a>
              <a 
                href="https://www.whatsapp.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                WhatsApp Group
              </a>
            </div>
            <div className="pt-4 mt-4 border-t border-border text-sm text-muted-foreground">
              <p>© {currentYear} Al Hadi Association. All rights reserved.</p>
              <p className="mt-1">A 501(c)(3) non-profit organization.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
