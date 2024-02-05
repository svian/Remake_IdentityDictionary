import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
} from "@ionic/react";
import css from "./Card.module.css";
import clsx from "clsx";

interface CardProps {
  title: string;
  color: "red" | "orange" | "yellow" | "green" | "white";
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = (props: CardProps) => {
  function getColorCSS(): string {
    switch (props.color) {
      case "red":
        return css.red;
      case "orange":
        return css.orange;
      case "yellow":
        return css.yellow;
      case "green":
        return css.green;
      case "white":
        return css.white;
    }
  }

  return (
    <div className={clsx(css.card, getColorCSS())}>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle className={css.title}>{props.title}</IonCardTitle>
        </IonCardHeader>

        <IonCardContent>{props.children}</IonCardContent>
      </IonCard>
    </div>
  );
};

export default Card;
