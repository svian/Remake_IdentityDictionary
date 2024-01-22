import Page from "../../components/page/Page";
import TextInput from "../../components/textInput/TextInput";

interface LoginProps {}

const LoginPage: React.FC<LoginProps> = (props: LoginProps) => {
  return (
    <Page>
      <TextInput label="Username" placeholder="Username" />
      <TextInput label="Password" placeholder="Password" />
    </Page>
  );
};

export default LoginPage;
