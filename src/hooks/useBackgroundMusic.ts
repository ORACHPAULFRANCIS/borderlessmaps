
import { useState, useEffect, useRef, useCallback } from 'react';

export const useBackgroundMusic = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [volume, setVolume] = useState(0.3); // 30% volume by default

  const initializeAudio = useCallback(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio('/src/January 9th by Black Sheriff.mp3');
      audioRef.current.loop = true;
      audioRef.current.volume = volume;
      
      audioRef.current.addEventListener('loadeddata', () => {
        console.log('Audio loaded successfully');
      });
      
      audioRef.current.addEventListener('error', (e) => {
        console.error('Audio loading error:', e);
      });
    }
  }, [volume]);

  const play = useCallback(async () => {
    if (!audioRef.current) return;
    
    try {
      await audioRef.current.play();
      setIsPlaying(true);
      
      if (!hasUserInteracted) {
        setShowNotification(true);
        setHasUserInteracted(true);
      }
    } catch (error) {
      console.log('Autoplay prevented by browser:', error);
      setIsPlaying(false);
    }
  }, [hasUserInteracted]);

  const pause = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  }, []);

  const toggle = useCallback(() => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  }, [isPlaying, play, pause]);

  const changeVolume = useCallback((newVolume: number) => {
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  }, []);

  const dismissNotification = useCallback(() => {
    setShowNotification(false);
  }, []);

  useEffect(() => {
    initializeAudio();
    
    // Attempt autoplay when component mounts
    const attemptAutoplay = async () => {
      try {
        await play();
      } catch (error) {
        console.log('Initial autoplay failed, waiting for user interaction');
      }
    };
    
    attemptAutoplay();

    // Cleanup
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [initializeAudio, play]);

  return {
    isPlaying,
    toggle,
    volume,
    changeVolume,
    showNotification,
    dismissNotification,
  };
};
