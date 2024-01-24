import { useState } from "react";
import Page from "../../components/page/Page";
import Input from "../../components/input/Input";
import TertiaryButton from "../../components/buttons/tertiaryButton/TertiaryButton";
import SecondaryButton from "../../components/buttons/secondaryButton/SecondaryButton";
import PrimaryButton from "../../components/buttons/primaryButton/PrimaryButton";
import css from "./LoginPage.module.css";
import Waves from "../../components/waves/Waves";
import { IonAlert } from "@ionic/react";
import { useHistory } from "react-router";
import { Keyboard } from "@capacitor/keyboard";

interface LoginProps {}

const LoginPage: React.FC<LoginProps> = (props: LoginProps) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [showNoAccountAlert, setShowNoAccountAlert] = useState(false);

  const history = useHistory();

  function validateLogin(): void {
    if (username !== "" && password !== "") {
      history.push("/home");
    }
  }

  return (
    <>
      <Waves>
        <Page>
          <Input
            label="Username"
            placeholder="Username"
            value={username}
            onChange={(value) => setUserName(value)}
          />
          <Input
            label="Password"
            placeholder="Password"
            value={password}
            onChange={(value) => setPassword(value)}
          />
          <PrimaryButton label="Login" onClick={() => validateLogin()} />
          <SecondaryButton label="Signup" href={"/signup"} />
          <TertiaryButton
            label="Proceed without signing in"
            onClick={() => setShowNoAccountAlert(true)}
          />
        </Page>
      </Waves>
      <IonAlert
        isOpen={showNoAccountAlert}
        header={"Proceed without an account?"}
        message={
          "You won't be able to view or edit your profile page without sigining in."
        }
        buttons={[
          {
            text: "Cancel",
            role: "cancel",
            handler: () => {
              setShowNoAccountAlert(false);
            },
          },
          {
            text: "OK",
            role: "confirm",
            handler: () => {
              setShowNoAccountAlert(false);
            },
          },
        ]}
      />
    </>
  );
};

export default LoginPage;
