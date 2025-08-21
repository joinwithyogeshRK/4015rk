import { useState } from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!email) {
      setError('Please enter your email address');
      return;
    }
    
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setEmail('');
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section className="mb-20">
      <div className="bg-surface p-8 md:p-12">
        <div className="max-w-3xl mx-auto text-center">
          <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-4xl font-heading mb-4">Stay Updated</h2>
          <p className="text-lg mb-8">Subscribe to our newsletter for exclusive GTA VI updates, behind-the-scenes content, and early access to new trailers.</p>
          
          {isSuccess ? (
            <div className="bg-success/20 text-success-foreground p-4 rounded-sm mb-6">
              <p className="font-medium">Thank you for subscribing!</p>
              <p className="text-sm">You'll be the first to receive updates about GTA VI.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <div className="relative flex-grow">
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="form-input w-full"
                    disabled={isSubmitting}
                  />
                  {error && <p className="text-error text-sm mt-1">{error}</p>}
                </div>
                <Button 
                  type="submit" 
                  className="btn-primary" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span>Subscribing...</span>
                  ) : (
                    <>
                      Subscribe
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </div>
              
              <div className="flex items-start space-x-2 text-left">
                <Checkbox id="terms" />
                <div className="grid gap-1.5 leading-none">
                  <Label htmlFor="terms" className="text-sm font-normal">
                    I agree to receive marketing emails and can unsubscribe at any time.
                  </Label>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;
