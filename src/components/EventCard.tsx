
import React from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Calendar, Clock } from 'lucide-react';

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  description: string;
  imageUrl: string;
}

// Function to make links in text clickable
const formatDescription = (text: string) => {
  // URL regex pattern
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  
  // Split the text by URLs
  const parts = text.split(urlRegex);
  
  // Match all URLs in the text
  const matches = text.match(urlRegex) || [];
  
  // Combine parts and matches
  return parts.reduce((result: React.ReactNode[], part, i) => {
    // Add the text part
    result.push(<span key={`text-${i}`}>{part}</span>);
    
    // Add the URL part if available
    if (matches[i]) {
      result.push(
        <a 
          key={`link-${i}`} 
          href={matches[i]} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          {matches[i]}
        </a>
      );
    }
    
    return result;
  }, []);
};

const EventCard: React.FC<EventCardProps> = ({
  title,
  date,
  time,
  description,
  imageUrl,
}) => {
  return (
    <Card className="overflow-hidden h-full flex flex-col shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <AspectRatio ratio={4/3} className="bg-muted">
          <img 
            src={imageUrl || '/placeholder.svg'} 
            alt={title} 
            className="object-cover w-full h-full rounded-t-lg" 
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = '/placeholder.svg';
            }}
          />
        </AspectRatio>
      </div>
      
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold line-clamp-2">{title}</CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-3 flex-grow">
        <div className="flex items-center text-muted-foreground gap-2">
          <Calendar size={18} className="flex-shrink-0" />
          <span className="text-sm">{date}</span>
        </div>
        
        <div className="flex items-center text-muted-foreground gap-2">
          <Clock size={18} className="flex-shrink-0" />
          <span className="text-sm">{time}</span>
        </div>
        
        <CardDescription className="text-foreground pt-2 line-clamp-4">
          {formatDescription(description)}
        </CardDescription>
      </CardContent>
      
      <CardFooter className="pt-0">
        <div className="w-full h-px bg-border opacity-50"></div>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
