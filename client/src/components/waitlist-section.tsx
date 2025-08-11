import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Gift, Star } from "lucide-react";
import { motion } from "framer-motion";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

export default function WaitlistSection() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const waitlistMutation = useMutation({
    mutationFn: async (email: string) => {
      const response = await apiRequest("POST", "/api/waitlist", { email });
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Welcome to the waitlist!",
        description: "Check your email for your free wellness starter guide.",
      });
      setEmail("");
      queryClient.invalidateQueries({ queryKey: ["/api/waitlist/stats"] });
    },
    onError: (error: any) => {
      toast({
        title: "Oops!",
        description: error.message.includes("409") 
          ? "You're already on our waitlist!" 
          : "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      waitlistMutation.mutate(email);
    }
  };

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
          
          {/* Waitlist Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input 
                type="email" 
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-6 py-4 rounded-full border border-gray-200 focus:border-lavender focus:outline-none focus:ring-2 focus:ring-lavender/20 text-center sm:text-left"
                required
              />
              <Button 
                type="submit"
                disabled={waitlistMutation.isPending}
                className="bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-dark-grey transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:transform-none"
              >
                {waitlistMutation.isPending ? "Joining..." : "Join Waitlist"}
              </Button>
            </div>
          </form>
          
          <div className="flex items-center justify-center space-x-6 text-sm text-dark-grey/60">
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4 text-lavender" />
              <span>No spam, ever</span>
            </div>
            <div className="w-1 h-1 bg-dark-grey/40 rounded-full"></div>
            <div className="flex items-center space-x-2">
              <Gift className="h-4 w-4 text-sage" />
              <span>Free starter guide</span>
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
