import { Link } from "react-router-dom";
import css from "./TertiaryButton.module.css";
import clsx from "clsx";

interface TertiaryButtonProps {
  label: string;
  href?: string;
  className?: string;
  external?: boolean;
  onClick?: () => void;
}

const TertiaryButton: React.FC<TertiaryButtonProps> = (
  props: TertiaryButtonProps
) => {
  return (
    <div className={clsx(css.componentSpacing, props.className)}>
      <button className={css.button} onClick={props.onClick}>
        {props.label}
      </button>
    </div>
  );
};

TertiaryButton.defaultProps = {
  external: false,
};

export default TertiaryButton;
