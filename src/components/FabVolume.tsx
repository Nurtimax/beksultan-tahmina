import { IonFab, IonFabButton, IonIcon } from "@ionic/react";
import { volumeHighOutline } from "ionicons/icons";

const FabVolume = () => {
  return (
    <IonFab slot="fixed" vertical="bottom" horizontal="end">
      <IonFabButton>
        <IonIcon icon={volumeHighOutline}></IonIcon>
      </IonFabButton>
    </IonFab>
  );
};

export default FabVolume;
