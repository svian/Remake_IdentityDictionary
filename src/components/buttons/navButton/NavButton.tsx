import css from "./NavButton.module.css";
import clsx from "clsx";
import rightChevron from "../../../../public/images/rightChevron.svg";
import { IonButton, IonIcon, IonLabel } from "@ionic/react";

interface NavButtonProps {
  label: string;
  color: "red" | "orange" | "yellow" | "green" | "white";
  href?: string;
  className?: string;
  external?: boolean;
  onClick?: () => void;
}

const NavButton: React.FC<NavButtonProps> = (props: NavButtonProps) => {
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
    <div className={clsx(css.componentSpacing, props.className, getColorCSS())}>
      <IonButton onClick={props.onClick} href={props.href}>
        {props.label}
      </IonButton>
    </div>
  );
};

NavButton.defaultProps = {
  external: false,
};

export default NavButton;
