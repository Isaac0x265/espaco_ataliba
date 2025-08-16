import { useState, useEffect } from 'react';

export const useAppLoading = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const checkIfReady = async () => {
      try {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
          await new Promise(resolve => {
            document.addEventListener('DOMContentLoaded', resolve);
          });
        }

        // Wait for images to load
        await new Promise(resolve => {
          if (document.readyState === 'complete') {
            resolve(true);
          } else {
            window.addEventListener('load', resolve);
          }
        });

        // Preload critical images
        const criticalImages = [
          '/images/festa-salao.jpg.png', // Hero image
          '/images/campo-gramado.jpg',
          '/images/piscina-area-social.jpg',
          '/images/area-interna.jpg'
        ];

        const imagePromises = criticalImages.map(src => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = resolve;
            img.onerror = resolve; // Don't fail if image doesn't exist
            img.src = src;
          });
        });

        await Promise.all(imagePromises);

        // Additional delay to ensure smooth transition
        await new Promise(resolve => setTimeout(resolve, 500));

        setIsReady(true);
      } catch (error) {
        console.warn('Loading check failed:', error);
        // Even if there's an error, show the app
        setIsReady(true);
      }
    };

    checkIfReady();
  }, []);

  const handleLoadComplete = () => {
    setIsLoading(false);
  };

  return {
    isLoading,
    isReady,
    handleLoadComplete
  };
};
