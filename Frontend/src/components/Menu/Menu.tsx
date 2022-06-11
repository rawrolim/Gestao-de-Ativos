import {
    IonButton,
    IonContent,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonMenu,
    IonMenuToggle,
    IonNote,
} from '@ionic/react';

import { useHistory, useLocation } from 'react-router-dom';
import { add, addOutline, compass, compassOutline, create, createOutline, home, homeOutline,  person, personOutline } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
url: string;
iosIcon: string;
mdIcon: string;
title: string;
}

const appPages: AppPage[] = [
{
    title: 'Home',
    url: '/Home',
    iosIcon: homeOutline,
    mdIcon: home
},
{
    title: 'Ativos',
    url: '/Ativo',
    iosIcon: addOutline,
    mdIcon: add
},
{
    title: 'Tipos de Ativos',
    url: '/TipoAtivo',
    iosIcon: addOutline,
    mdIcon: add
},
{
    title: 'Marcas',
    url: '/Marca',
    iosIcon: addOutline,
    mdIcon: add
},
{
    title: 'Local',
    url: '/Local',
    iosIcon: compassOutline,
    mdIcon: compass
},
{
    title: 'Status',
    url: '/Status',
    iosIcon: createOutline,
    mdIcon: create
},
{
    title: 'Usuários',
    url: '/Usuario',
    iosIcon: personOutline,
    mdIcon: person
}
];

const Menu: React.FC = () => {
const location = useLocation();
const history = useHistory();

function Sair(){
    history.push('/');
}

if(location.pathname !== "/Login" && location.pathname !== "/" && location.pathname !== "/Cadastrar"){
    return (
        <IonMenu contentId="main" type="overlay">
        <IonContent>
            <IonList id="inbox-list">
            <IonListHeader>Gestão de Ativos</IonListHeader>
            <IonNote></IonNote>
            {appPages.map((appPage, index) => {
                return (
                <IonMenuToggle key={index} autoHide={false}>
                    <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                        <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                        <IonLabel>{appPage.title}</IonLabel>
                    </IonItem>
                </IonMenuToggle>
                );
            })}
            <IonButton onClick={Sair} color="danger" expand='block'>
                Sair
            </IonButton>
            </IonList>
        </IonContent>
        </IonMenu>
    );
}else{
    return(
        <div></div>
    )
}
};
export default Menu;