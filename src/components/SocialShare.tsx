import { Facebook, Twitter, Linkedin, Mail, Link } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface SocialShareProps {
  url: string;
  title: string;
}

const SocialShare = ({ url, title }: SocialShareProps) => {
  const shareLinks = [
    {
      name: 'Facebook',
      icon: <Facebook className="h-5 w-5" />,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&t=${encodeURIComponent(title)}`,
      color: 'bg-[#3b5998] hover:bg-[#3b5998]/90'
    },
    {
      name: 'Twitter',
      icon: <Twitter className="h-5 w-5" />,
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
      color: 'bg-[#1DA1F2] hover:bg-[#1DA1F2]/90'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="h-5 w-5" />,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      color: 'bg-[#0077b5] hover:bg-[#0077b5]/90'
    },
    {
      name: 'Email',
      icon: <Mail className="h-5 w-5" />,
      url: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`,
      color: 'bg-[#dd4b39] hover:bg-[#dd4b39]/90'
    },
  ];

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url).then(() => {
      toast.success("Link copied to clipboard!");
    }).catch(err => {
      toast.error("Failed to copy link");
      console.error('Could not copy text: ', err);
    });
  };

  return (
    <div className="flex flex-wrap gap-2">
      {shareLinks.map(link => (
        <Button 
          key={link.name}
          asChild
          className={`${link.color} text-white`}
          size="sm"
        >
          <a href={link.url} target="_blank" rel="noopener noreferrer">
            {link.icon}
            <span className="ml-2">{link.name}</span>
          </a>
        </Button>
      ))}
      
      <Button 
        onClick={copyToClipboard}
        className="bg-secondary hover:bg-secondary-700 text-white"
        size="sm"
      >
        <Link className="h-5 w-5 mr-2" />
        Copy Link
      </Button>
    </div>
  );
};

export default SocialShare;
