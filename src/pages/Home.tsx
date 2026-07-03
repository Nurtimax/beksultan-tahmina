/* eslint-disable @typescript-eslint/no-explicit-any */
// pages/HomePage.tsx
import { useState, useRef } from "react";
import { useAudio } from "../hooks/useAudio";
import { IonContent, IonPage } from "@ionic/react";
import Envelope from "../components/Envelope";
import FabVolume from "../components/FabVolume";
import WeddingVideo from "../components/WeddingVideo";

const HomePage: React.FC = () => {
  const { audioState, startMusic, stopMusic, changeTrack } = useAudio();
  const [isOpen, setIsOpen] = useState(false);

  const contentRef = useRef<HTMLIonContentElement>(null);
  const currentTrackIndex = useRef(0);

  // Конвертти ачуу/жабуу
  const handleToggle = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      // Конверт ачылганда биринчи музыка башталат
      setTimeout(() => {
        startMusic(0);
        currentTrackIndex.current = 0;
      }, 500);
    } else {
      stopMusic();
    }
  };

  const handleScroll = (event: any) => {
    const scrollTop = event.detail?.scrollTop || 0;

    // ⚠️ МААНИЛҮҮ: scrollHeight ордуна башка метод колдонуу
    // IonContentтин ичиндеги контенттин бийиктигин алуу
    const contentElement = contentRef.current;
    if (!contentElement) return;

    // #1: IonContentтин өзүнүн бийиктиги
    const contentHeight = contentElement.offsetHeight || 0;

    // #2: Ичиндеги контенттин бийиктиги
    const innerContent = contentElement.querySelector(".envelope-container");
    const innerHeight = innerContent?.scrollHeight || 0;

    // #3: Скролл боло турган максималдуу аралык
    const maxScroll = Math.max(0, innerHeight - contentHeight);

    // Скролл пайызын эсептөө
    const scrollPercent = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;

    console.log({
      scrollTop,
      contentHeight,
      innerHeight,
      maxScroll,
      scrollPercent: Math.round(scrollPercent),
    });

    if (!isOpen || !audioState.isPlaying) return;

    // Скролл пайызына жараша музыка
    let targetTrack = 0;
    if (scrollPercent < 33) targetTrack = 0;
    else if (scrollPercent >= 33 && scrollPercent < 66) targetTrack = 1;
    else targetTrack = 2;

    if (targetTrack !== currentTrackIndex.current) {
      changeTrack(targetTrack);
      currentTrackIndex.current = targetTrack;
    }
  };

  return (
    <IonPage>
      <IonContent
        ref={contentRef}
        className="wedding-content"
        scrollEvents={true}
        onIonScroll={handleScroll}
      >
        <Envelope handleToggle={handleToggle}>
          <WeddingVideo />
          <FabVolume />
        </Envelope>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
