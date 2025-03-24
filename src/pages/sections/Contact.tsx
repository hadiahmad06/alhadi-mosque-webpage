
import { useState } from "react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import SectionHeading from "@/components/SectionHeading";
import GoogleMap from "@/components/GoogleMap";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <div className="pt-20">
      {/* Contact CTA */}
      <section id="contact" className="section-container">
        <div className="max-w-4xl mx-auto">
          <SectionHeading 
            title="Contact Us"
            subtitle="We'd love to hear from you"
          />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-playfair font-semibold">Get In Touch</h3>
                <p className="font-amiri">For any inquiries about prayer times, events, or general information, please don't hesitate to contact us.</p>
                <div className="space-y-3 mt-6 font-amiri">
                  <p className="flex items-center">
                    <span className="mr-2">📞</span>
                    <a href="tel:+16514568088" className="hover:text-primary">(651) 456-8088</a>
                  </p>
                  <p className="flex items-center">
                    <span className="mr-2">📧</span>
                    <a href="mailto:alhadilakeville@gmail.com" className="hover:text-primary">alhadilakeville@gmail.com</a>
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-playfair font-semibold">Connect With Us</h3>
                <p className="font-amiri">Follow us on social media to stay updated with our activities and announcements.</p>
                <div className="flex space-x-4 mt-6">
                  <a 
                    href="https://www.facebook.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-outline"
                  >
                    Facebook
                  </a>
                  <a 
                    href="https://www.whatsapp.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-outline"
                  >
                    WhatsApp Group
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
