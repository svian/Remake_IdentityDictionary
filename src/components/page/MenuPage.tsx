import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonBackButton,
  IonButtons,
  IonMenu,
  IonMenuButton,
} from "@ionic/react";
import css from "./Page.module.css";

interface MenuPageProps {
  children: React.ReactNode;
  menuItems: React.ReactNode;
  pageTitle?: string;
  menuTitle?: string;
}

const MenuPage: React.FC<MenuPageProps> = (props: MenuPageProps) => {
  return (
    <>
      <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar>
            {props.menuTitle && <IonTitle>{props.menuTitle}</IonTitle>}
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">{props.menuItems}</IonContent>
      </IonMenu>
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            {props.pageTitle && <IonTitle>{props.pageTitle}</IonTitle>}
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">{props.children}</IonContent>
      </IonPage>
    </>
  );
};

export default MenuPage;
