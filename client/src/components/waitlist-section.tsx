import { Button } from "@/components/ui/button";
import { Mail, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function WaitlistSection() {
  return (
    <section id="waitlist" className="py-20 bg-gradient-to-br from-lavender/10 to-sage/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-black mb-6">
            Be the first to access Phase
          </h2>
          <p className="text-lg text-dark-grey/80 mb-8 max-w-2xl mx-auto">
            We're building this with our first members. Join the waitlist and help shape what Phase becomes.
          </p>

          <Button
            asChild
            className="bg-black text-white px-10 py-6 rounded-full font-medium text-lg hover:bg-dark-grey transition-all duration-300 transform hover:scale-105 mb-8"
          >
            <a href="https://form.typeform.com/to/NbcWkEYN" target="_blank" rel="noopener noreferrer">
              Join the Waitlist →
            </a>
          </Button>

          <div className="flex items-center justify-center space-x-6 text-sm text-dark-grey/60">
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4 text-lavender" />
              <span>No spam, ever</span>
            </div>
            <div className="w-1 h-1 bg-dark-grey/40 rounded-full"></div>
            <div className="flex items-center space-x-2">
              <Star className="h-4 w-4 text-lavender" />
              <span>Early access</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
