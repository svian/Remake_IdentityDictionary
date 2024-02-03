import { useContext, useEffect, useState } from "react";
import Page from "../../components/page/Page";
import Input from "../../components/input/Input";
import TertiaryButton from "../../components/buttons/tertiaryButton/TertiaryButton";
import SecondaryButton from "../../components/buttons/secondaryButton/SecondaryButton";
import PrimaryButton from "../../components/buttons/primaryButton/PrimaryButton";
import css from "./LoginPage.module.css";
import Waves from "../../components/waves/Waves";
import { IonAlert } from "@ionic/react";
import { useHistory } from "react-router";
import { UserContext, UserContextState } from "../../context/userContext";

interface LoginProps {}

const LoginPage: React.FC<LoginProps> = (props: LoginProps) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(false);

  const { updateContextUsername } = useContext(UserContext) as UserContextState;

  const [errorMessage, setErrorMessgage] = useState("");

  const [showNoAccountAlert, setShowNoAccountAlert] = useState(false);

  const history = useHistory();

  function validateLogin(): void {
    if (username !== "" && password !== "") {
      setIsValid(true);
    } else {
      setErrorMessgage("Required");
    }
  }

  useEffect(() => {
    if (isValid) {
      updateContextUsername(username);
      history.push("/home");
    }
  });

  return (
    <>
      <Page hasWaves={true}>
        <Input
          label="Username"
          placeholder="Username"
          error={errorMessage && username === "" ? errorMessage : undefined}
          value={username}
          onChange={(value) => setUserName(value)}
        />
        <Input
          label="Password"
          placeholder="Password"
          error={errorMessage && password === "" ? errorMessage : undefined}
          value={password}
          onChange={(value) => setPassword(value)}
        />
        <PrimaryButton label="Login" onClick={() => validateLogin()} />
        <SecondaryButton
          label="Signup"
          onClick={() => history.push("/signUp")}
        />
        <TertiaryButton
          label="Proceed without signing in"
          onClick={() => setShowNoAccountAlert(true)}
        />
      </Page>

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
              setUserName("Guest");
              setIsValid(true);
              setShowNoAccountAlert(false);
            },
          },
        ]}
      />
    </>
  );
};

export default LoginPage;
