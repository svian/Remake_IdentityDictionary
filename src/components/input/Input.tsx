import { IonInput } from "@ionic/react";
import css from "./Input.module.css";

interface InputProps {
  label: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
}

const Input: React.FC<InputProps> = (props: InputProps) => {
  return (
    <div className={css.componentSpacing}>
      <IonInput
        label={props.label}
        placeholder={props.placeholder}
        value={props.value}
        labelPlacement="floating"
        fill="solid"
        onInput={(event) =>
          props.onChange &&
          props.onChange(event.currentTarget.value?.toString() || "")
        }
      />
    </div>
  );
};

export default Input;
