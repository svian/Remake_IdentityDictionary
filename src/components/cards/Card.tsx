import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
} from "@ionic/react";
import css from "./Card.module.css";

interface CardProps {
  title: string;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = (props: CardProps) => {
  return (
    <div className={css.card}>
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
