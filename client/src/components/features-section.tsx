import { Clock, Apple, Heart, Users, Brain, Calendar, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Clock,
    title: "15-Minute Workouts",
    description: "Effective strength training, cardio, and yoga sessions that fit into naptime or your morning coffee routine.",
    color: "lavender"
  },
  {
    icon: Apple,
    title: "Smart Meal Planning",
    description: "Quick, nutritious recipes and meal prep guides that work with your family's schedule and preferences.",
    color: "sage"
  },
  {
    icon: Heart,
    title: "Wellness Tracking",
    description: "Monitor your energy levels, mood, and progress with gentle reminders that celebrate small wins.",
    color: "lavender"
  }
];

const additionalFeatures = [
  {
    icon: Users,
    title: "Supportive Community",
    description: "Connect with other mothers on similar journeys for motivation and support.",
    color: "sage"
  },
  {
    icon: Brain,
    title: "Mindful Moments",
    description: "Quick meditation and breathing exercises to reset during stressful moments.",
    color: "lavender"
  },
  {
    icon: Calendar,
    title: "Flexible Scheduling",
    description: "Adapt your wellness routine to your changing daily schedule and energy levels.",
    color: "sage"
  },
  {
    icon: TrendingUp,
    title: "Progress Insights",
    description: "Beautiful, simple analytics that show your wellness journey over time.",
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
            Everything You Need in One Place
          </h2>
          <p className="text-lg text-dark-grey/80 max-w-2xl mx-auto">
            Designed specifically for mothers who want to prioritize their health without sacrificing precious time.
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
        
        {/* Additional Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {additionalFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div 
                key={feature.title}
                className="flex items-start space-x-4 p-6 rounded-xl hover:bg-beige/20 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className={`w-12 h-12 ${feature.color === 'lavender' ? 'bg-lavender/20' : 'bg-sage/20'} rounded-full flex items-center justify-center flex-shrink-0`}>
                  <IconComponent className={`${feature.color === 'lavender' ? 'text-lavender' : 'text-sage'} h-6 w-6`} />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-semibold text-black mb-2">{feature.title}</h4>
                  <p className="text-dark-grey/80">{feature.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
