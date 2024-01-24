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

interface PageProps {
  children: React.ReactNode;
  title?: string;
  hasBackButton?: boolean;
}

const Page: React.FC<PageProps> = (props: PageProps) => {
  return (
    <IonPage className={css.margins}>
      {props.title && (
        <IonHeader>
          <IonToolbar>
            {props.hasBackButton && (
              <IonButtons slot="start">
                <button />
              </IonButtons>
            )}

            <IonTitle>{props.title}</IonTitle>
          </IonToolbar>
        </IonHeader>
      )}
      <IonContent>{props.children}</IonContent>
    </IonPage>
  );
};

export default Page;
