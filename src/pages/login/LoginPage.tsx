import { useState } from "react";
import Page from "../../components/page/Page";
import TextInput from "../../components/textInput/TextInput";

interface LoginProps {}

const LoginPage: React.FC<LoginProps> = (props: LoginProps) => {
  const [username, setUserName] = useState("");
  return (
    <Page>
      <TextInput label="Username" placeholder="Username" value={username} />
      <TextInput label="Password" placeholder="Password" />
    </Page>
  );
};

export default LoginPage;
