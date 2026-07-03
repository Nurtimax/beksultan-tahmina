// components/WeddingVideo.tsx
import React from "react";
import classes from "./WeddingVideo.module.css";

interface WeddingVideoProps {
  groomName?: string;
  brideName?: string;
  date?: string;
  time?: string;
}

const WeddingVideo: React.FC<WeddingVideoProps> = ({
  groomName = "Бексултан",
  brideName = "Тахмина",
  date = "26.07.2026",
  time = "18:00",
}) => {
  return (
    <div className={classes.videoContainer}>
      {/* Видео */}
      <video
        className={classes.video}
        src="/videos/wedding.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Видеонун үстүндөгү градиент */}
      <div className={classes.videoOverlay} />

      {/* Тексттер */}
      <div className={classes.content}>
        {/* Жогорку текст */}
        <div className={classes.topText}>
          <span className={classes.invitationText}>
            💕 Свадебное приглашение
          </span>
        </div>

        {/* Аты-жөнү */}
        <div className={classes.namesContainer}>
          <h1 className={classes.groomName}>{groomName}</h1>
          <span className={classes.andSymbol}>&</span>
          <h1 className={classes.brideName}>{brideName}</h1>
        </div>

        {/* Дата жана убакыт */}
        <div className={classes.dateTimeContainer}>
          <div className={classes.dateBox}>
            <span className={classes.dateIcon}>📅</span>
            <span className={classes.dateText}>{date}</span>
          </div>
          <div className={classes.timeBox}>
            <span className={classes.timeIcon}>⏰</span>
            <span className={classes.timeText}>{time}</span>
          </div>
        </div>

        {/* Төмөнкү текст */}
        <div className={classes.bottomText}>
          <span>✨ Ждем вас на нашем торжестве ✨</span>
        </div>
      </div>
    </div>
  );
};

export default WeddingVideo;
