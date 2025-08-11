import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  "Free 14-day trial",
  "Cancel anytime",
  "iOS & Android compatible"
];

export default function AppDownloadSection() {
  return (
    <section id="download" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-black mb-6">
              Start Your Wellness Journey Today
            </h2>
            <p className="text-lg text-dark-grey/80 mb-8 leading-relaxed">
              Join thousands of mothers who have reclaimed their health and found balance in their busy lives. Download Phase and discover how wellness can fit seamlessly into your routine.
            </p>
            
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={benefit} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-sage rounded-full flex items-center justify-center">
                    <Check className="text-white h-4 w-4" />
                  </div>
                  <span className="text-dark-grey">{benefit}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="flex items-center justify-center space-x-3 bg-black text-white px-6 py-4 rounded-xl hover:bg-dark-grey transition-all duration-300">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="font-semibold">App Store</div>
                </div>
              </Button>
              <Button className="flex items-center justify-center space-x-3 bg-black text-white px-6 py-4 rounded-xl hover:bg-dark-grey transition-all duration-300">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22,9.5a1.5,1.5 0 0,0 -1.5,-1.5h-7a1.5,1.5 0 0,0 0,3h7A1.5,1.5 0 0,0 22,9.5M20.5,13h-7a1.5,1.5 0 0,0 0,3h7a1.5,1.5 0 0,0 0,-3M20.5,2h-7a1.5,1.5 0 0,0 0,3h7a1.5,1.5 0 0,0 0,-3"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div className="font-semibold">Google Play</div>
                </div>
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center justify-center space-x-4">
              {/* First phone mockup showing workout interface */}
              <motion.div 
                className="w-48 h-96 relative transform rotate-12"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1611532736597-de2d4265fba3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=600" 
                  alt="Phase app workout interface" 
                  className="rounded-3xl shadow-2xl w-full h-full object-cover" 
                />
              </motion.div>
              
              {/* Second phone mockup showing nutrition interface */}
              <motion.div 
                className="w-48 h-96 relative transform -rotate-6"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=600" 
                  alt="Phase app nutrition interface" 
                  className="rounded-3xl shadow-2xl w-full h-full object-cover" 
                />
              </motion.div>
            </div>
            
            {/* Decorative botanical elements */}
            <motion.div 
              className="absolute top-0 right-0 w-24 h-24 bg-lavender/10 rounded-full -z-10"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
            <motion.div 
              className="absolute bottom-0 left-0 w-32 h-32 bg-sage/10 rounded-full -z-10"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
