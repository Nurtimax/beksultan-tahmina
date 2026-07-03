import { FC, ReactNode, useState } from "react";
import classes from "./Envelope.module.css";

interface IProps {
  children: ReactNode;
  handleToggle: () => void;
}
const Envelope: FC<IProps> = ({ children, handleToggle }) => {
  const [open, setOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const handleOpen = () => {
    if (open) return;

    setIsAnimating(true);

    // Конверт ачылат
    setTimeout(() => {
      setOpen(true);
    }, 1000);

    // FadeOut бүткөндөн кийин контентти көрсөтөт
    setTimeout(() => {
      setShowContent(true);
    }, 1800);

    handleToggle(); // Конверт ачылганда handleToggle чакыруу
  };

  if (showContent) {
    return <>{children}</>;
  }

  return (
    <div className={classes.envelopeContainer}>
      <div className={`${classes.envelope} ${open ? classes.fadeOut : ""}`}>
        {/* Left */}
        <div className={classes.left}></div>

        {/* Right */}
        <div className={classes.right}></div>

        {/* Bottom */}
        <div className={classes.bottom}></div>

        {/* Top flap */}
        <div
          className={`${classes.top} ${isAnimating ? classes.topOpen : ""}`}
        ></div>

        {/* Seal */}
        {!open && (
          <div className={classes.seal} onClick={handleOpen}>
            <div className={classes.sealCenter}></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Envelope;
