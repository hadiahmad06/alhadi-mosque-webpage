import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ContactsBar from "./ContactsBar";

const Layout = () => {
  const { pathname } = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const navbarElement = document.getElementById('navbar') as HTMLElement;

    const navbarHeight = navbarElement?.offsetHeight || 0;
    setOffset(navbarHeight);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* <ContactsBar /> */}
      <Navbar isScrolled={isScrolled} />
      <div style={{ height: `${offset}px` }} />
      <motion.main 
        className="flex-grow"
        // style={{y: `${offset}px`}}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Outlet />
      </motion.main>
      <Footer />
    </div>
  );
};

export default Layout;
