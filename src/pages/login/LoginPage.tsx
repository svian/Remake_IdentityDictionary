import { useState } from "react";
import Page from "../../components/page/Page";
import TextInput from "../../components/textInput/TextInput";
import TextLink from "../../components/textLink/TextLink";

interface LoginProps {}

const LoginPage: React.FC<LoginProps> = (props: LoginProps) => {
  const [username, setUserName] = useState("");
  return (
    <Page>
      <TextInput label="Username" placeholder="Username" value={username} />
      <TextInput label="Password" placeholder="Password" />
      <TextLink label="Login" href={""} />
    </Page>
  );
};

export default LoginPage;
