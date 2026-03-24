import { Activity, Brain, FileText } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Activity,
    title: "Finally track what's actually happening",
    description: "Log hot flashes, brain fog, sleep disruption, mood shifts, and energy levels daily. Start seeing patterns that explain what your body is doing — and why.",
    color: "lavender"
  },
  {
    icon: Brain,
    title: "Ask the questions you're afraid to Google",
    description: "Get answers that take perimenopause seriously. Phase's AI is trained to understand your symptoms in context — not dismiss them as stress or aging.",
    color: "sage"
  },
  {
    icon: FileText,
    title: "Walk into every appointment prepared",
    description: "Phase generates a plain-English summary of your recent symptoms and patterns. Stop being told everything is normal. Come in with data.",
    color: "lavender"
  }
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-black mb-4">
            Built around what you're actually going through
          </h2>
          <p className="text-lg text-dark-grey/80 max-w-2xl mx-auto">
            Not a generic wellness app. Built specifically for the hormonal, physical, and emotional reality of perimenopause and menopause.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={feature.title}
                className="text-center p-8 rounded-2xl hover:bg-beige/30 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className={`w-16 h-16 ${feature.color === 'lavender' ? 'bg-lavender/20' : 'bg-sage/20'} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <IconComponent className={`${feature.color === 'lavender' ? 'text-lavender' : 'text-sage'} h-8 w-8`} />
                </div>
                <h3 className="font-serif text-xl font-semibold text-black mb-4">{feature.title}</h3>
                <p className="text-dark-grey/80 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
