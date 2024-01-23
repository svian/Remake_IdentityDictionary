import { Link } from "react-router-dom";
import css from "./TertiaryButton.module.css";

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
    <div className={props.className}>
      <Link to={props.href || ""}>
        <button className={css.button}>{props.label}</button>
      </Link>
    </div>
  );
};

TertiaryButton.defaultProps = {
  external: false,
};

export default TertiaryButton;
