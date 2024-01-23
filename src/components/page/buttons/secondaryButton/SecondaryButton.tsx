import { Link } from "react-router-dom";
import css from "./SecondaryButton.module.css";

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
    <div className={props.className}>
      <Link to={props.href || ""}>
        <button className={css.button}>{props.label}</button>
      </Link>
    </div>
  );
};

SecondaryButton.defaultProps = {
  external: false,
};

export default SecondaryButton;
