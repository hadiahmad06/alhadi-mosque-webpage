import { Facebook, Instagram, MessageCircle } from "lucide-react";

const ContactsBar = () => {
  return (
    <div className="bg-secondary text-secondary-foreground py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Contact Info */}
        <div className="flex space-x-4 text-sm">
          <span>Email: alhadilakeville@gmail.com</span>
          <span>Phone: (651) 456-8088</span>
        </div>

        {/* Social Links */}
        <div className="flex space-x-4">
          <a 
            href="https://www.facebook.com/AlhadiAssociation" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            <Facebook size={20} />
          </a>
          <a 
            href="https://www.instagram.com/alhadimasjid" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            <Instagram size={20} />
          </a>
          <a 
            href="https://chat.whatsapp.com/EA4ZKCd2Cm74MqsnIE6NVb" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            <MessageCircle size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactsBar;
