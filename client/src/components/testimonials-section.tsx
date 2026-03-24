import { Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Mother of 2",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b739?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=80&h=80",
    quote: "Finally, a fitness app that understands my reality. The 15-minute workouts are perfect for my schedule, and I've never felt stronger."
  },
  {
    name: "Maria L.",
    role: "Working Mom",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=80&h=80",
    quote: "The meal planning feature is a game-changer. I'm feeding my family better and feeling more energized throughout the day."
  },
  {
    name: "Jessica K.",
    role: "New Mom",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=80&h=80",
    quote: "Phase helped me find myself again after becoming a mother. The mindfulness features keep me grounded and present."
  }
];

const stats = [
  { value: "5,000+", label: "Active Mothers" },
  { value: "50,000+", label: "Workouts Completed" },
  { value: "4.9", label: "App Store Rating" },
  { value: "98%", label: "Satisfaction Rate" }
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-beige/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-black mb-4">
            Stories from Our Community
          </h2>
          <p className="text-lg text-dark-grey/80 max-w-2xl mx-auto">
            Real mothers sharing how Phase has transformed their approach to wellness.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={testimonial.name}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image}
                  alt={`${testimonial.name} testimonial`} 
                  className="w-12 h-12 rounded-full object-cover mr-4" 
                />
                <div>
                  <h4 className="font-semibold text-black">{testimonial.name}</h4>
                  <p className="text-sm text-dark-grey/60">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex text-lavender mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="text-dark-grey/80 italic">
                "{testimonial.quote}"
              </p>
            </motion.div>
          ))}
        </div>
        
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center">
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
            >
              <div className="text-3xl font-serif font-bold text-black mb-2">{stat.value}</div>
              <p className="text-dark-grey/80">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
