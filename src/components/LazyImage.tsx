import React from 'react';
import { motion } from 'framer-motion';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({ src, alt, className = '' }) => {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [imageSrc, setImageSrc] = React.useState<string | null>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setImageSrc(src);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const img = new Image();
    img.onload = () => setIsLoaded(true);
    img.src = src;

    return () => {
      observer.disconnect();
    };
  }, [src]);

  return (
    <motion.img
      src={imageSrc || 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23E5E7EB" width="400" height="300"/%3E%3C/svg%3E'}
      alt={alt}
      className={`${className} ${!isLoaded ? 'blur-sm' : 'blur-0'} transition-all duration-300`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    />
  );
};

export default LazyImage;
