import { IonInput } from "@ionic/react";

interface TextInputProps {
  label: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string | number | null | undefined) => void;
}

const TextInput: React.FC<TextInputProps> = (props: TextInputProps) => {
  return (
    <IonInput
      label={props.label}
      placeholder={props.placeholder}
      value={props.value}
      onChange={(event) =>
        props.onChange && props.onChange(event.currentTarget.value)
      }
    />
  );
};

export default TextInput;
