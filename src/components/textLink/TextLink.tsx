import { Link } from "react-router-dom";
import css from "./TextLink.module.css";

interface TextLinkProps {
  label: string;
  href: string;
  className?: string;
  external?: boolean;
  onClick?: () => void;
}

const TextLink: React.FC<TextLinkProps> = (props: TextLinkProps) => {
  return (
    <div className={props.className}>
      <Link to={props.href}>
        <button className={css.button}>{props.label}</button>
      </Link>
    </div>
  );
};

TextLink.defaultProps = {
  external: false,
};

export default TextLink;
