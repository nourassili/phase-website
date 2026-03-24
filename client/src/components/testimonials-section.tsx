import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-beige/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-black mb-8">
            Why We Built Phase
          </h2>
          <p className="text-lg text-dark-grey/80 leading-relaxed mb-4">
            The wellness industry was built around a version of women that doesn't exist — one with a stable body, unlimited time, and a doctor who listens.
          </p>
          <p className="text-lg text-dark-grey/80 leading-relaxed mb-4">
            Phase is being built for everyone else.
          </p>
          <p className="text-lg text-dark-grey/80 leading-relaxed mb-10">
            We're starting with perimenopause and menopause because these are the years women are most dismissed by healthcare, most underserved by wellness apps, and most in need of real support. If that's you — we'd love to have you shape what we build.
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
