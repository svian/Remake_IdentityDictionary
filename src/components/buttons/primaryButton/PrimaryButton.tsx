import { Link } from "react-router-dom";
import css from "./PrimaryButton.module.css";
import clsx from "clsx";

interface PrimaryButtonProps {
  label: string;
  href?: string;
  className?: string;
  external?: boolean;
  onClick?: () => void;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = (
  props: PrimaryButtonProps
) => {
  return (
    <div className={clsx(css.componentSpacing, props.className)}>
      <button className={css.button} onClick={props.onClick}>
        {props.label}
      </button>
    </div>
  );
};

PrimaryButton.defaultProps = {
  external: false,
};

export default PrimaryButton;
