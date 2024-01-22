import { IonLabel } from "@ionic/react";
import css from "./Title.module.css";

interface TitleProps {
  label: string;
  allCaps?: boolean;
  className?: string;
}

const Title: React.FC<TitleProps> = (props: TitleProps) => {
  return (
    <IonLabel className={props.className}>
      <span className={css.text}>
        {props.allCaps ? props.label.toUpperCase() : props.label}:
      </span>
    </IonLabel>
  );
};

Title.defaultProps = {
  allCaps: false,
};

export default Title;
