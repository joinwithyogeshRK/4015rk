import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Trailer', path: '/trailer' },
    { name: 'Characters', path: '/characters' },
    { name: 'Locations', path: '/locations' },
    { name: 'Pre-order', path: '/pre-order' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/90 backdrop-blur-md py-2 shadow-md' : 'bg-transparent py-4'}`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="/" className="text-3xl font-heading text-primary neon-text">GTA VI</a>
        
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.path} 
              href={link.path} 
              className="nav-link group"
            >
              {link.name}
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-primary"></span>
            </a>
          ))}
        </nav>
        
        <div className="hidden md:block">
          <Button asChild className="btn-accent">
            <a href="/pre-order">Pre-order Now</a>
          </Button>
        </div>
        
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-surface border-border">
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center mb-8">
                <a href="/" className="text-3xl font-heading text-primary neon-text">GTA VI</a>
              </div>
              
              <nav className="flex flex-col space-y-6">
                {navLinks.map((link) => (
                  <a 
                    key={link.path} 
                    href={link.path} 
                    className="text-xl font-heading nav-link"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
              
              <div className="mt-auto pt-8">
                <Button asChild className="btn-accent w-full">
                  <a href="/pre-order">Pre-order Now</a>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
