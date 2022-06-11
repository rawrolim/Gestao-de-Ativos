import {  IonContent,  IonHeader, IonPage, IonTitle, IonToolbar,  IonButton, IonMenuButton, IonButtons,  IonList, IonLabel, IonItem, IonToggle, IonIcon } from '@ionic/react';
import { createOutline } from 'ionicons/icons';
import './Usuario.css';

const Usuario: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>
            Usuario
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Usuario</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonList>
          <IonItem>
            <IonLabel>Rawlinson</IonLabel>
            <IonToggle slot="end" checked={true}></IonToggle>
            <IonButton fill='clear'>
              <IonIcon size='large' md={createOutline}></IonIcon>
            </IonButton>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Usuario;
