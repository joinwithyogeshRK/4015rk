import { useState } from 'react';
import { MapPin } from 'lucide-react';

interface LocationPreviewProps {
  name: string;
  image: string;
  description: string;
}

const LocationPreview = ({ name, image, description }: LocationPreviewProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group location-preview h-64 cursor-pointer relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img 
        src={image} 
        alt={name} 
        className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110" 
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-70"></div>
      
      <div 
        className={`absolute inset-x-0 bottom-0 p-4 transform transition-transform duration-300 ${isHovered ? 'translate-y-0' : 'translate-y-12'}`}
      >
        <div className="flex items-center mb-2">
          <MapPin className="h-5 w-5 text-primary mr-2" />
          <h3 className="text-2xl font-heading">{name}</h3>
        </div>
        
        <p 
          className={`text-sm transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default LocationPreview;
