import { motion } from "framer-motion";

export default function Footer() {
  const scrollToFeatures = () => {
    const element = document.getElementById("features");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <span className="text-black font-serif font-bold text-sm">P</span>
            </div>
            <span className="font-serif text-xl font-semibold">Phase</span>
          </div>
          <p className="text-gray-300 mb-6 max-w-md mx-auto">
            Built for women whose health has never been taken seriously enough.
          </p>
          <button
            onClick={scrollToFeatures}
            className="text-gray-300 hover:text-lavender transition-colors duration-300 mb-12 inline-block"
          >
            Features
          </button>
        </motion.div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Phase. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
