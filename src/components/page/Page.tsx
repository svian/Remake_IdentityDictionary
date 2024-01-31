import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
} from "@ionic/react";
import css from "./Page.module.css";
import clsx from "clsx";
import Waves from "../waves/Waves";

interface PageProps {
  children: React.ReactNode;
  title?: string;
  hasWaves?: boolean;
  hasBackButton?: boolean;
  centerHorizontal?: boolean;
  centerVertical?: boolean;
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
      <IonContent>
        {props.hasWaves ? (
          <Waves>
            <div
              className={clsx({
                [css.center]: props.centerHorizontal,
                [css.centerTop]: props.centerVertical,
              })}
            >
              {props.children}
            </div>
          </Waves>
        ) : (
          <div
            className={clsx({
              [css.center]: props.centerHorizontal,
              [css.centerTop]: props.centerVertical,
            })}
          >
            {props.children}
          </div>
        )}
      </IonContent>
    </IonPage>
  );
};

Page.defaultProps = {
  centerHorizontal: true,
  centerVertical: true,
  hasWaves: false,
};

export default Page;
