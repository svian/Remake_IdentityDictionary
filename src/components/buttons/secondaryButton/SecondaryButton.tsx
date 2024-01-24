import { Link } from "react-router-dom";
import css from "./SecondaryButton.module.css";
import clsx from "clsx";

interface SecondaryButtonProps {
  label: string;
  href?: string;
  className?: string;
  external?: boolean;
  onClick?: () => void;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = (
  props: SecondaryButtonProps
) => {
  return (
    <div className={clsx(css.componentSpacing, props.className)}>
      <button className={css.button} onClick={props.onClick}>
        {props.label}
      </button>
    </div>
  );
};

SecondaryButton.defaultProps = {
  external: false,
};

export default SecondaryButton;
