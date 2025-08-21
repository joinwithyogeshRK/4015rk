import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Character {
  id: string;
  name: string;
  role: string;
  description: string;
  image: string;
  background: string;
}

interface CharacterCardProps {
  character: Character;
}

const CharacterCard = ({ character }: CharacterCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      id={character.id}
      className="bg-surface border border-border overflow-hidden transition-all duration-300 hover:border-primary"
    >
      <div className="relative h-80">
        <img 
          src={character.image} 
          alt={character.name} 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-70"></div>
        <div className="absolute bottom-0 left-0 w-full p-4">
          <h3 className="text-2xl font-heading">{character.name}</h3>
          <p className="text-primary font-medium">{character.role}</p>
        </div>
      </div>
      
      <div className="p-4">
        <p className="mb-4">{character.description}</p>
        
        <div 
          className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-96' : 'max-h-0'}`}
        >
          <p className="mb-4">{character.background}</p>
        </div>
        
        <Button 
          variant="ghost" 
          className="w-full flex items-center justify-center text-primary hover:text-primary-foreground hover:bg-primary/20"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? (
            <>
              <ChevronUp className="mr-2 h-4 w-4" />
              Show Less
            </>
          ) : (
            <>
              <ChevronDown className="mr-2 h-4 w-4" />
              Show More
            </>
          )}
        </Button>
      </div>
    </div>
  );
};

export default CharacterCard;
