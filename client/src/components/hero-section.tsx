import { Button } from "@/components/ui/button";
import { Play, Star, Heart } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const scrollToWaitlist = () => {
    const element = document.getElementById("waitlist");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-beige/30 to-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-tight mb-6">
              Wellness Made{" "}
              <span className="text-lavender">Simple</span>{" "}
              for Busy Mothers
            </h1>
            <p className="text-lg sm:text-xl text-dark-grey/80 mb-8 leading-relaxed">
              Transform your health journey with 15-minute workouts, quick meal plans, and mindful moments designed for your busy life.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button 
                onClick={scrollToWaitlist}
                className="bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-dark-grey transition-all duration-300 transform hover:scale-105"
              >
                Join the Waitlist
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-sage text-sage px-8 py-4 rounded-full font-medium hover:bg-sage hover:text-white transition-all duration-300"
              >
                <Play className="mr-2 h-4 w-4" />
                Watch Demo
              </Button>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start space-x-4 text-sm text-dark-grey/60">
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 text-lavender fill-current" />
                <span>5,000+ mothers</span>
              </div>
              <div className="w-1 h-1 bg-dark-grey/40 rounded-full"></div>
              <div className="flex items-center space-x-1">
                <Heart className="h-4 w-4 text-sage fill-current" />
                <span>4.9 rating</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="relative mx-auto w-80 h-96">
              <motion.img 
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=600" 
                alt="Phase app interface mockup" 
                className="rounded-3xl shadow-2xl w-full h-full object-cover"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* Floating botanical elements */}
              <motion.div 
                className="absolute -top-4 -right-4 w-16 h-16 bg-lavender/20 rounded-full flex items-center justify-center"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <svg className="w-6 h-6 text-sage" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 3L9 1 7 2 5 1 3 3l1 2-1 2 2 1 2-1 2 1 2-1-1-2 1-2zm-5.5 8a6.5 6.5 0 1113 0 .5.5 0 01-.5.5h-12a.5.5 0 01-.5-.5z" clipRule="evenodd" />
                </svg>
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-6 -left-6 w-20 h-20 bg-sage/20 rounded-full flex items-center justify-center"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <svg className="w-8 h-8 text-lavender" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.5 3.5a.5.5 0 0 0-1 0V4a.5.5 0 0 0 1 0v-.5zM12 5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3A.5.5 0 0 0 12 5zm-1 2a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0 0 1h1A.5.5 0 0 0 11 7z"/>
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
