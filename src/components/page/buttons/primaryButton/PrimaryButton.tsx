import { Link } from "react-router-dom";
import css from "./PrimaryButton.module.css";

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
    <div className={props.className}>
      <Link to={props.href || ""}>
        <button className={css.button}>{props.label}</button>
      </Link>
    </div>
  );
};

PrimaryButton.defaultProps = {
  external: false,
};

export default PrimaryButton;
