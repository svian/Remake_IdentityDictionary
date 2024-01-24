import { IonInput, IonLabel } from "@ionic/react";
import css from "./Input.module.css";

interface InputProps {
  label: string;
  placeholder?: string;
  error?: string;
  value?: string;
  onChange?: (value: string) => void;
  onFocus?: () => void;
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
        onFocus={props.onFocus}
      />

      {props.error && (
        <IonLabel className={css.errorText}>{props.error}</IonLabel>
      )}
    </div>
  );
};

export default Input;
