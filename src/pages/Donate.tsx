
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";

const donationMethods = [
  {
    name: "Check",
    description: "Make checks payable to 'Al Hadi Association' and mail to our address or drop off during prayer times.",
    icon: "📝",
  },
  {
    name: "Direct Deposit",
    description: "Contact us for bank account details to set up a direct deposit or bank transfer.",
    icon: "🏦",
  },
  {
    name: "Zelle",
    description: "Send donations via Zelle to alhadilakeville@gmail.com or (651) 456-8088.",
    icon: "📱",
  },
  {
    name: "Zeffy",
    description: "Donate online through our Zeffy page with credit/debit card or bank transfer.",
    icon: "💳",
  },
  {
    name: "PayPal",
    description: "Send funds through PayPal to alhadilakeville@gmail.com.",
    icon: "🌐",
  },
  {
    name: "Square",
    description: "Donate in person using Square payment system available at the mosque.",
    icon: "🔲",
  },
];

const Donate = () => {
  return (
    <div className="pt-20">
      {/* Donate Hero */}
      <section className="relative py-20 bg-primary/5">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl sm:text-5xl font-display font-bold tracking-tight mb-6">Support Your Mosque</h1>
            <p className="text-xl text-muted-foreground">
              Your generous contributions help us maintain our services and grow our community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Donation Info */}
      <section className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl font-display font-semibold tracking-tight">Why Your Support Matters</h2>
            <div className="space-y-4 text-lg">
              <p>
                Al Hadi Association is a registered 501(c)(3) non-profit organization, meaning all donations 
                are tax-deductible. Your generous contributions support various aspects of our operations:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Mosque rent and utilities</li>
                <li>Insurance and maintenance</li>
                <li>Educational programs and materials</li>
                <li>Community events and activities</li>
                <li>Future building projects and expansion</li>
                <li>Charity and community service initiatives</li>
              </ul>
              <p>
                By supporting Al Hadi Association, you're investing in a stronger Muslim community in Lakeville 
                and helping create a welcoming place of worship for generations to come.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-card rounded-xl p-6 md:p-8"
          >
            <h3 className="text-2xl font-semibold mb-6">Donation Impact</h3>
            <div className="space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3h12l4 6-10 13L2 9z"/><path d="M11 3 8 9l5 2-2 10"/></svg>
                  </div>
                  <h4 className="text-lg font-medium">Monthly Operating Costs</h4>
                </div>
                <p className="text-muted-foreground pl-12">
                  $5,000 needed monthly for rent, utilities, and basic services.
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>
                  </div>
                  <h4 className="text-lg font-medium">Building Fund</h4>
                </div>
                <p className="text-muted-foreground pl-12">
                  Help us reach our goal of $500,000 for a permanent mosque location.
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                  </div>
                  <h4 className="text-lg font-medium">Community Programs</h4>
                </div>
                <p className="text-muted-foreground pl-12">
                  Support youth education, community events, and interfaith activities.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Donation Methods */}
      <section className="bg-secondary/30 py-20">
        <div className="section-container">
          <SectionHeading
            title="Ways to Donate"
            subtitle="Choose the method that works best for you"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {donationMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="text-2xl">{method.icon}</div>
                      <h3 className="text-xl font-semibold">{method.name}</h3>
                    </div>
                    <p className="text-muted-foreground">{method.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Monthly Giving */}
      <section className="section-container">
        <div className="glass-card rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-display font-semibold tracking-tight">Become a Monthly Supporter</h2>
              <p className="text-lg text-muted-foreground">
                Regular monthly donations help us plan ahead and ensure the sustainability of our programs and services.
                Consider becoming a monthly donor to provide consistent support to your community mosque.
              </p>
              <div className="pt-4">
                <button className="btn-primary">Set Up Monthly Donation</button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="bg-background rounded-lg p-4 border border-border">
                <h4 className="font-semibold mb-2">Community Builder</h4>
                <p className="text-muted-foreground mb-3">$50 monthly</p>
                <p className="text-sm">Supports basic mosque operations and community activities.</p>
              </div>
              
              <div className="bg-background rounded-lg p-4 border border-border">
                <h4 className="font-semibold mb-2">Sustaining Member</h4>
                <p className="text-muted-foreground mb-3">$100 monthly</p>
                <p className="text-sm">Helps fund educational programs and special events.</p>
              </div>
              
              <div className="bg-background rounded-lg p-4 border border-primary/30">
                <h4 className="font-semibold mb-2">Mosque Pillar</h4>
                <p className="text-primary mb-3">$250+ monthly</p>
                <p className="text-sm">Significantly contributes to building fund and future growth.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tax Information */}
      <section className="bg-primary/5 py-16">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-2xl sm:text-3xl font-display font-semibold tracking-tight mb-6">Tax-Deductible Donations</h2>
            <p className="text-lg text-muted-foreground mb-4">
              Al Hadi Association is a registered 501(c)(3) non-profit organization.
              All donations are tax-deductible to the extent allowed by law.
            </p>
            <p className="text-lg text-muted-foreground">
              Tax receipts are provided for all donations. Contact our treasurer for any questions regarding donations or tax receipts.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Donate;
