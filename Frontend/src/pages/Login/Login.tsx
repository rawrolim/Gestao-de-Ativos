import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { Link, useHistory } from 'react-router-dom';
import './Login.css';

const Login: React.FC = () => {
    const history = useHistory();

    function Redirecionar():void{
        history.push('/Cadastrar');
    }

    function Logar(){
        history.push('/Home');
    }
return (
    <IonPage>
        <IonHeader>
            <IonToolbar>
            <IonTitle>Login</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
            <IonHeader collapse="condense">
            <IonToolbar>
                <IonTitle size="large">Login</IonTitle>
            </IonToolbar>
            </IonHeader>
            <IonGrid className='center'>
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
                    <IonCol offsetLg='4' className="ion-text-end" size-lg='4'>
                        <Link to={'/Home'} >Esqueci a senha</Link>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol offsetLg='4' size-lg='4'>
                        <IonButton onClick={Logar} expand="block">Logar</IonButton>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol offsetLg='4' size-lg='4'>
                        <IonButton onClick={Redirecionar} expand="block">Cadastrar</IonButton>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonContent>
    </IonPage>
);
};

export default Login;
