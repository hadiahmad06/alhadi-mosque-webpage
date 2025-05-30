
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Contact, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import SectionNav from "@/components/NavButtons";
import ContactsBar from "./ContactsBar";

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar = ({ isScrolled }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  // const [isNavbarSticky, setIsNavbarSticky] = useState(false);
  // const location = useLocation();
  const isHome = location.pathname === "/";

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const contactsBarHeight = document.querySelector(".contacts-bar")?.clientHeight || 0;
  //     setIsNavbarSticky(window.scrollY > 20);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <header
      id="navbar"
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white dark:bg-black shadow-sm",
        // "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        // isScrolled
        //   ? "bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-sm"
        //   : "bg-transparent"

      )}
    >
      <ContactsBar/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Link 
            to="/" 
            className="flex items-center space-x-2"
            onClick={() => setIsOpen(false)}
          >
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl font-display font-semibold tracking-tight text-primary"
            >
              Al Hadi Association
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            <motion.div 
              className="flex space-x-1"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
            >
              {/* Separate pages */}
              <NavLink to="/" className={({ isActive }) => cn("nav-link", isActive && "active-nav-link")}>
                Home
              </NavLink>
              {/* <NavLink to="/special" className={({ isActive }) => cn("nav-link", isActive && "active-nav-link")}>
                Ramadan 2025
              </NavLink> */}
              <NavLink to="/events" className={({ isActive }) => cn("nav-link", isActive && "active-nav-link")}>
                Events
              </NavLink>
              <NavLink to="/about" className={({ isActive }) => cn("nav-link", isActive && "active-nav-link")}>
                Future Plans
              </NavLink>

              {/* Home page sections */}
              {isHome ? (
                <SectionNav 
                  className="nav-link"
                  id="donate"
                  text="Donate"
                />
              ) : (
                <NavLink to="/#donate" className="nav-link">
                  Donate
                </NavLink>
              )}
              {isHome ? (
                <SectionNav 
                  className="nav-link"
                  id="contact"
                  text="Contact"
                />
              ) : (
                <NavLink to="/#contact" className="nav-link">
                  Contact
                </NavLink>
              )}

              {/* <a href="#hero" className="nav-link">Home</a>
              <a href="#prayer-times" className="nav-link">Prayer Times</a>
              <a href="#about" className="nav-link">About Us</a>
              <a href="#donate" className="nav-link">Donate</a>
              <a href="#contact" className="nav-link">Contact</a> */}
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="md:hidden p-2 rounded-md text-foreground focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-black shadow-lg"
          >
            <div className="px-4 py-5 space-y-3">
              <NavLink 
                to="/" 
                className={({ isActive }) => cn(
                  "block px-3 py-2 rounded-md text-base font-medium transition-colors",
                  isActive 
                    ? "bg-primary/10 text-primary" 
                    : "text-foreground hover:bg-secondary"
                )}
                onClick={() => setIsOpen(false)}
              >
                Home
              </NavLink>
              <NavLink 
                to="/prayer-times" 
                className={({ isActive }) => cn(
                  "block px-3 py-2 rounded-md text-base font-medium transition-colors",
                  isActive 
                    ? "bg-primary/10 text-primary" 
                    : "text-foreground hover:bg-secondary"
                )}
                onClick={() => setIsOpen(false)}
              >
                Prayer Times
              </NavLink>
              <NavLink 
                to="/about" 
                className={({ isActive }) => cn(
                  "block px-3 py-2 rounded-md text-base font-medium transition-colors",
                  isActive 
                    ? "bg-primary/10 text-primary" 
                    : "text-foreground hover:bg-secondary"
                )}
                onClick={() => setIsOpen(false)}
              >
                About Us
              </NavLink>
              <NavLink 
                to="/donate" 
                className={({ isActive }) => cn(
                  "block px-3 py-2 rounded-md text-base font-medium transition-colors",
                  isActive 
                    ? "bg-primary/10 text-primary" 
                    : "text-foreground hover:bg-secondary"
                )}
                onClick={() => setIsOpen(false)}
              >
                Donate
              </NavLink>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => cn(
                  "block px-3 py-2 rounded-md text-base font-medium transition-colors",
                  isActive 
                    ? "bg-primary/10 text-primary" 
                    : "text-foreground hover:bg-secondary"
                )}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
