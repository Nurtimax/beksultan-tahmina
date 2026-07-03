import { IonFab, IonFabButton, IonIcon } from "@ionic/react";
import { volumeHighOutline, volumeMuteOutline } from "ionicons/icons";
import { AudioState } from "../hooks/useAudio";

interface IProps {
  setVolume: (volume: number) => void;
  audioState: AudioState;
}

const FabVolume: React.FC<IProps> = ({ setVolume, audioState }) => {
  return (
    <IonFab slot="fixed" vertical="bottom" horizontal="end">
      <IonFabButton onClick={() => setVolume(audioState.volume > 0 ? 0 : 0.5)}>
        <IonIcon
          icon={audioState.volume > 0 ? volumeHighOutline : volumeMuteOutline}
        ></IonIcon>
      </IonFabButton>
    </IonFab>
  );
};

export default FabVolume;
