'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { subscribeToNewsletter } from '@/lib/newsletter';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      await subscribeToNewsletter(email);
      toast({
        title: "Success!",
        description: "You've been successfully subscribed to our newsletter.",
        className: "bg-gradient-to-r from-[#D7BBAA] via-[#A47C65] to-[#6C4F3D] text-white"

      });
      setEmail('');
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        className: "bg-gradient-to-r from-[#D7BBAA] via-[#A47C65] to-[#6C4F3D] text-white",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 px-6 md:px-8 lg:px-10 bg-gradient-to-r from-[#D7BBAA] via-[#A47C65] to-[#6C4F3D] shadow-lg rounded-xl">
      <div className="max-w-4xl mx-auto text-center text-white">
        <h2 className="text-4xl font-bold mb-4 text-shadow-lg">Join Our Newsletter</h2>
        <p className="text-lg mb-8 opacity-90">
          Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 rounded-full text-black focus:ring-4 focus:ring-[#A47C65] transition-all duration-300"
          />
          <Button
            type="submit"
            disabled={loading}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#6C4F3D] text-white font-semibold text-lg hover:bg-[#A47C65] active:scale-95 transition-all duration-300"
          >
            {loading ? (
              <div className="flex justify-center items-center">
                <svg
                  className="animate-spin h-5 w-5 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    d="M4 12a8 8 0 1 1 16 0A8 8 0 0 1 4 12z"
                  ></path>
                </svg>
                Subscribing...
              </div>
            ) : (
              'Subscribe'
            )}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
