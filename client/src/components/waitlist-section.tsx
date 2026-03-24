import { Button } from "@/components/ui/button";
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
            Be the First to Experience Phase
          </h2>
          <p className="text-lg text-dark-grey/80 mb-8 max-w-2xl mx-auto">
            Join our exclusive waitlist and get early access to Phase, plus receive a free wellness starter guide for busy mothers.
          </p>

          <Button
            asChild
            className="bg-black text-white px-10 py-6 rounded-full font-medium text-lg hover:bg-dark-grey transition-all duration-300 transform hover:scale-105"
          >
            <a href="https://form.typeform.com/to/NbcWkEYN" target="_blank" rel="noopener noreferrer">
              Join the Waitlist →
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
