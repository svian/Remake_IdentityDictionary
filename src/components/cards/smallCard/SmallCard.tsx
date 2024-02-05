import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
} from "@ionic/react";
import css from "./SmallCard.module.css";

interface SmallCardProps {
  title: string;
  icon: string;
  href?: string;
  onClick?: () => void;
}

const SmallCard: React.FC<SmallCardProps> = (props: SmallCardProps) => {
  return (
    <div className={css.card}>
      <IonCard onClick={props.onClick} href={props.href}>
        <IonCardContent className={css.content}>
          <img src={props.icon} />
        </IonCardContent>
        <IonCardHeader>
          <IonCardTitle className={css.title}>{props.title}</IonCardTitle>
        </IonCardHeader>
      </IonCard>
    </div>
  );
};

export default SmallCard;
