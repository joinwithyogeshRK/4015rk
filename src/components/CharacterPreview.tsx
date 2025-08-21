import { useState } from 'react';
import { Info } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CharacterPreviewProps {
  id: string;
  name: string;
  image: string;
  description: string;
}

const CharacterPreview = ({ id, name, image, description }: CharacterPreviewProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group character-card h-96 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className="w-full h-full bg-cover bg-center relative overflow-hidden"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div 
          className={`absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent transition-opacity duration-500 ${isHovered ? 'opacity-80' : 'opacity-0'}`}
        ></div>
        
        <div 
          className={`absolute inset-0 flex flex-col justify-end p-6 transition-transform duration-500 ${isHovered ? 'translate-y-0' : 'translate-y-20'}`}
        >
          <h3 className="text-3xl font-heading mb-2">{name}</h3>
          <p className={`mb-4 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            {description}
          </p>
          <Button 
            asChild 
            variant="outline" 
            className={`w-fit border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
          >
            <a href={`/characters#${id}`}>
              <Info className="mr-2 h-4 w-4" />
              Learn More
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CharacterPreview;
