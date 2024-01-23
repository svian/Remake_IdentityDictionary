import { useState } from "react";
import Page from "../../components/page/Page";
import TextInput from "../../components/textInput/TextInput";
import TertiaryButton from "../../components/page/buttons/tertiaryButton/TertiaryButton";
import SecondaryButton from "../../components/page/buttons/secondaryButton/SecondaryButton";
import PrimaryButton from "../../components/page/buttons/primaryButton/PrimaryButton";

interface LoginProps {}

const LoginPage: React.FC<LoginProps> = (props: LoginProps) => {
  const [username, setUserName] = useState("");
  return (
    <Page>
      <TextInput label="Username" placeholder="Username" value={username} />
      <TextInput label="Password" placeholder="Password" />
      <PrimaryButton label="Login" href={"/home"} />
      <SecondaryButton label="Signup" href={"/signup"} />

      <TertiaryButton label="Proceed without signing in" href={"/home"} />
    </Page>
  );
};

export default LoginPage;
