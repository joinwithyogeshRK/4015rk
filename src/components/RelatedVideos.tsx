import { Play } from 'lucide-react';

interface VideoItem {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  date: string;
}

const videoItems: VideoItem[] = [
  {
    id: '1',
    title: 'GTA VI - Character Spotlight: Lucia',
    thumbnail: '/images/video-lucia.jpg',
    duration: '2:45',
    date: '2 weeks ago'
  },
  {
    id: '2',
    title: 'GTA VI - Vice City Location Tour',
    thumbnail: '/images/video-vice-city.jpg',
    duration: '4:12',
    date: '3 weeks ago'
  },
  {
    id: '3',
    title: 'GTA VI - Developer Interview',
    thumbnail: '/images/video-interview.jpg',
    duration: '8:37',
    date: '1 month ago'
  },
  {
    id: '4',
    title: 'GTA VI - Gameplay Mechanics Preview',
    thumbnail: '/images/video-gameplay.jpg',
    duration: '5:21',
    date: '1 month ago'
  },
];

const RelatedVideos = () => {
  return (
    <div className="space-y-4">
      {videoItems.map(video => (
        <div key={video.id} className="flex gap-3 group cursor-pointer">
          <div className="relative w-32 h-20 flex-shrink-0">
            <img 
              src={video.thumbnail} 
              alt={video.title} 
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Play className="h-8 w-8 text-primary" />
            </div>
            <div className="absolute bottom-1 right-1 bg-black/80 text-white text-xs px-1 py-0.5">
              {video.duration}
            </div>
          </div>
          <div>
            <h4 className="text-sm font-medium group-hover:text-primary transition-colors duration-300">{video.title}</h4>
            <p className="text-xs text-muted-foreground mt-1">{video.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RelatedVideos;
