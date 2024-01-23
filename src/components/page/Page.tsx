import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/react";
import css from "./Page.module.css";

interface PageProps {
  children: React.ReactNode;
  title?: string;
}

const Page: React.FC<PageProps> = (props: PageProps) => {
  return (
    <IonPage className={css.margins}>
      {props.title && (
        <IonHeader>
          <IonToolbar>
            <IonTitle>{props.title}</IonTitle>
          </IonToolbar>
        </IonHeader>
      )}
      <IonContent>{props.children}</IonContent>
    </IonPage>
  );
};

export default Page;
