import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const scrollToWaitlist = () => {
    const element = document.getElementById("waitlist");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/95 backdrop-blur-md border-b border-gray-100" : "bg-white/95 backdrop-blur-md"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
              <span className="text-white font-serif font-bold text-sm">P</span>
            </div>
            <span className="font-serif text-xl font-semibold text-black">Phase</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection("features")}
              className="text-dark-grey hover:text-lavender transition-colors duration-300"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection("testimonials")}
              className="text-dark-grey hover:text-lavender transition-colors duration-300"
            >
              Stories
            </button>
            <button 
              onClick={() => scrollToSection("download")}
              className="text-dark-grey hover:text-lavender transition-colors duration-300"
            >
              Download
            </button>
            <Button 
              onClick={scrollToWaitlist}
              className="bg-black text-white px-6 py-2 rounded-full hover:bg-dark-grey transition-colors duration-300"
            >
              Join Waitlist
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-dark-grey" />
            ) : (
              <Menu className="h-6 w-6 text-dark-grey" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button 
                onClick={() => scrollToSection("features")}
                className="block px-3 py-2 text-dark-grey hover:text-lavender transition-colors duration-300"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection("testimonials")}
                className="block px-3 py-2 text-dark-grey hover:text-lavender transition-colors duration-300"
              >
                Stories
              </button>
              <button 
                onClick={() => scrollToSection("download")}
                className="block px-3 py-2 text-dark-grey hover:text-lavender transition-colors duration-300"
              >
                Download
              </button>
              <Button 
                onClick={scrollToWaitlist}
                className="w-full mt-4 bg-black text-white hover:bg-dark-grey"
              >
                Join Waitlist
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
