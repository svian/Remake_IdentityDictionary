import { IonInput } from "@ionic/react";

interface TextInputProps {
  label: string;
  placeholder?: string;
}

const TextInput: React.FC<TextInputProps> = (props: TextInputProps) => {
  return <IonInput label={props.label} placeholder={props.placeholder} />;
};

export default TextInput;
