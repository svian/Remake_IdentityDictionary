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
import backArrow from "../../../public/images/backArrow.svg";
import pencilIcon from "../../../public/images/pencilIcon.svg";

interface PageProps {
  children: React.ReactNode;
  title?: string;
  hasWaves?: boolean;
  hasBackButton?: boolean;
  hasEditIcon?: boolean;
  centerContent?: boolean;
}

const Page: React.FC<PageProps> = (props: PageProps) => {
  return (
    <IonPage>
      {props.title && (
        <IonHeader className={css.header}>
          <IonToolbar>
            {props.hasBackButton && (
              <IonButtons slot="start" onClick={() => history.back()}>
                <img src={backArrow} className={css.leftIcon} />
              </IonButtons>
            )}
            <IonTitle>{props.title}</IonTitle>
            {props.hasEditIcon && (
              <IonButtons slot="end" onClick={() => history.back()}>
                <img src={pencilIcon} className={css.rightIcon} />
              </IonButtons>
            )}
          </IonToolbar>
        </IonHeader>
      )}
      <IonContent>
        {props.hasWaves ? (
          <Waves>
            <div
              className={clsx({
                [css.centerContent]: props.centerContent,
              })}
            >
              {props.children}
            </div>
          </Waves>
        ) : (
          <div style={{ display: "grid" }}>
            <div
              className={clsx({
                [css.centerContent]: props.centerContent,
              })}
            >
              {props.children}
            </div>{" "}
          </div>
        )}
      </IonContent>
    </IonPage>
  );
};

Page.defaultProps = {
  centerContent: true,
  hasWaves: false,
};

export default Page;
