// hooks/useAudio.ts
import { useEffect, useRef, useState } from "react";

export interface AudioState {
  isPlaying: boolean;
  currentTrack: number;
  volume: number; // Үн деңгээлин коштук
}

export const useAudio = () => {
  const [audioState, setAudioState] = useState<AudioState>({
    isPlaying: false,
    currentTrack: 0,
    volume: 0.5, // 50% дефолт
  });

  const audioRefs = useRef<(HTMLAudioElement | null)[]>([]);
  const fadeIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    audioRefs.current = [
      new Audio("/music/zhalgyzim.mp3"),
      new Audio("/music/ballada.mp3"),
      new Audio("/music/kiss_me.mp3"),
    ];

    // Ар бир музыкага 50% үн коюу
    audioRefs.current.forEach((audio) => {
      if (audio) {
        audio.loop = true;
        audio.volume = audioState.volume; // 50% дефолт
      }
    });

    return () => {
      audioRefs.current.forEach((audio) => {
        if (audio) {
          audio.pause();
          audio.src = "";
        }
      });
      if (fadeIntervalRef.current) {
        clearInterval(fadeIntervalRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Музыканы акырын кошуу (50% менен)
  const fadeIn = (audio: HTMLAudioElement, duration: number = 300) => {
    return new Promise((resolve) => {
      audio.volume = 0;
      audio.play();

      const steps = 20;
      const stepDuration = duration / steps;
      let currentStep = 0;

      if (fadeIntervalRef.current) {
        clearInterval(fadeIntervalRef.current);
      }

      fadeIntervalRef.current = setInterval(() => {
        currentStep++;
        // Максимум 0.5 (50%) га чейин кошуу
        const volume = (currentStep / steps) * audioState.volume;
        audio.volume = Math.min(audioState.volume, volume);

        if (currentStep >= steps) {
          clearInterval(fadeIntervalRef.current!);
          resolve(true);
        }
      }, stepDuration);
    });
  };

  // Үн деңгээлин өзгөртүү
  const setVolume = (volume: number) => {
    const audio = audioRefs.current[audioState.currentTrack];
    if (audio) {
      const newVolume = Math.max(0, Math.min(1, volume));
      audio.volume = newVolume;
      setAudioState((prev) => ({
        ...prev,
        volume: newVolume,
      }));
    }
  };

  // Музыканы баштоо (50% менен)
  const startMusic = (trackIndex: number = 0) => {
    const audio = audioRefs.current[trackIndex];
    if (audio) {
      audio.volume = audioState.volume;
      audio.play();
      setAudioState({
        isPlaying: true,
        currentTrack: trackIndex,
        volume: audioState.volume,
      });
    }
  };

  // Музыканы өзгөртүү
  const changeTrack = async (trackIndex: number) => {
    const currentAudio = audioRefs.current[audioState.currentTrack];
    const newAudio = audioRefs.current[trackIndex];

    if (!newAudio) return;

    if (trackIndex === audioState.currentTrack && audioState.isPlaying) {
      return;
    }

    // Учурдагы музыканы өчүрүү
    if (currentAudio && audioState.isPlaying) {
      await fadeOut(currentAudio);
    }

    // Жаңы музыканы 50% менен баштоо
    newAudio.volume = audioState.volume;
    await newAudio.play();

    setAudioState({
      isPlaying: true,
      currentTrack: trackIndex,
      volume: audioState.volume,
    });
  };

  // Калган функциялар...
  const fadeOut = (audio: HTMLAudioElement, duration: number = 300) => {
    return new Promise((resolve) => {
      const startVolume = audio.volume;
      const steps = 20;
      const stepDuration = duration / steps;
      let currentStep = 0;

      if (fadeIntervalRef.current) {
        clearInterval(fadeIntervalRef.current);
      }

      fadeIntervalRef.current = setInterval(() => {
        currentStep++;
        const volume = startVolume * (1 - currentStep / steps);
        audio.volume = Math.max(0, volume);

        if (currentStep >= steps) {
          clearInterval(fadeIntervalRef.current!);
          audio.pause();
          resolve(true);
        }
      }, stepDuration);
    });
  };

  const stopMusic = () => {
    const audio = audioRefs.current[audioState.currentTrack];
    if (audio) {
      fadeOut(audio);
      setAudioState({
        isPlaying: false,
        currentTrack: audioState.currentTrack,
        volume: audioState.volume,
      });
    }
  };

  return {
    audioState,
    startMusic,
    stopMusic,
    changeTrack,
    setVolume,
    fadeIn,
    fadeOut,
  };
};
