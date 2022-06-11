import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useHistory } from 'react-router';
import './CadastrarUsuario.css';

const Cadastrar: React.FC = () => {
  const history = useHistory();

  function Cancelar():void{
      history.push('/Login');
  }

  function Cadastrar():void{
    history.push('/Home');
}

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Cadastrar</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Cadastrar</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid>
          <IonRow>
            <IonCol offsetLg='4' size-lg='4'>
              <IonItem>
                <IonLabel position='floating'>Nome</IonLabel>
                <IonInput type='text' placeholder='Insira o nome completo'></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol offsetLg='4' size-lg='4'>
              <IonItem>
                <IonLabel position='floating'>E-mail</IonLabel>
                <IonInput type='email' placeholder='Insira o email'></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol offsetLg='4' size-lg='4'>
              <IonItem>
                <IonLabel position='floating'>Senha</IonLabel>
                <IonInput type='password' placeholder='Insira a senha'></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol offsetLg='4' size-lg='4'>
              <IonItem>
                <IonLabel position='floating'>Senha Repetida</IonLabel>
                <IonInput type='password' placeholder='Insira a senha novamente'></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol offsetLg='4' size-lg='4'>
              <IonButton onClick={Cadastrar} expand='full'>Cadastrar</IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol offsetLg='4' size-lg='4'>
              <IonButton onClick={Cancelar} expand='full' color='danger'>Cancelar</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Cadastrar;
