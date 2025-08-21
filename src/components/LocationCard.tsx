import { MapPin } from 'lucide-react';

interface Location {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  coordinates: { x: number; y: number };
}

interface LocationCardProps {
  location: Location;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const LocationCard = ({ location, onMouseEnter, onMouseLeave }: LocationCardProps) => {
  return (
    <div 
      className="bg-surface border border-border overflow-hidden transition-all duration-300 hover:border-primary"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="relative h-48">
        <img 
          src={location.image} 
          alt={location.name} 
          className="w-full h-full object-cover" 
        />
        <div className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs font-bold py-1 px-2 rounded-sm">
          {location.category}
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-center mb-2">
          <MapPin className="h-5 w-5 text-primary mr-2" />
          <h3 className="text-xl font-heading">{location.name}</h3>
        </div>
        <p className="text-muted-foreground">{location.description}</p>
      </div>
    </div>
  );
};

export default LocationCard;
