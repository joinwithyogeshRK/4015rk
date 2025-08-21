import { Facebook, Twitter, Instagram, Youtube, Twitch } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-surface text-surface-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-3xl font-heading mb-4 text-primary neon-text">GTA VI</h3>
            <p className="mb-4">The next chapter in the Grand Theft Auto series is coming Fall 2025.</p>
            <div className="flex space-x-4">
              <a href="#" className="social-icon">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="social-icon">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="social-icon">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="social-icon">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="social-icon">
                <Twitch className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-heading text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="/trailer" className="hover:text-primary transition-colors">Trailer</a></li>
              <li><a href="/characters" className="hover:text-primary transition-colors">Characters</a></li>
              <li><a href="/locations" className="hover:text-primary transition-colors">Locations</a></li>
              <li><a href="/pre-order" className="hover:text-primary transition-colors">Pre-order</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading text-lg mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">System Requirements</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading text-lg mb-4">Rockstar Games</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary transition-colors">About Rockstar</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Rockstar Store</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Rockstar Social Club</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Other Games</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border text-muted-foreground text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© 2023 Rockstar Games, Inc. All trademarks belong to their respective owners.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-primary transition-colors">Privacy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms</a>
              <a href="#" className="hover:text-primary transition-colors">Cookies</a>
              <a href="#" className="hover:text-primary transition-colors">Legal</a>
            </div>
          </div>
          <p className="mt-4 text-center">This is a fan-made concept site. Not affiliated with Rockstar Games.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
