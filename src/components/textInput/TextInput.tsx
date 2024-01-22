import { IonInput } from "@ionic/react";

interface TextInputProps {
  label: string;
  placeholder?: string;
  value?: string;
}

const TextInput: React.FC<TextInputProps> = (props: TextInputProps) => {
  return (
    <IonInput
      label={props.label}
      placeholder={props.placeholder}
      value={props.value}
    />
  );
};

export default TextInput;
