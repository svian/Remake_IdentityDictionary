import { useContext, useState } from "react";
import Page from "../../components/page/Page";
import Input from "../../components/input/Input";
import TertiaryButton from "../../components/buttons/tertiaryButton/TertiaryButton";
import SecondaryButton from "../../components/buttons/secondaryButton/SecondaryButton";
import PrimaryButton from "../../components/buttons/primaryButton/PrimaryButton";
import css from "./SignUpPage.module.css";
import Waves from "../../components/waves/Waves";
import { IonAlert, IonLabel, IonModal } from "@ionic/react";
import { useHistory } from "react-router";
import { UserContext, UserContextState } from "../../context/userContext";

interface SignUpProps {}

const SignUpPage: React.FC<SignUpProps> = (props: SignUpProps) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { updateContextUsername } = useContext(UserContext) as UserContextState;

  const [errorMessage, setErrorMessgage] = useState("");

  const [showConfirmSignUpModal, setShowConfirmSignUpModal] = useState(false);

  const history = useHistory();

  function validateLogin(): void {
    if (username !== "" && password !== "") {
      updateContextUsername(username);
      setShowConfirmSignUpModal(true);
    } else {
      setErrorMessgage("Required");
    }
  }

  return (
    <Page hasWaves={true}>
      <IonLabel>Create Account</IonLabel>
      <Input
        label="Set Username"
        placeholder="Username"
        error={errorMessage && username === "" ? errorMessage : undefined}
        value={username}
        onChange={(value) => setUserName(value)}
      />
      <Input
        label="Set Password"
        placeholder="Password"
        error={errorMessage && password === "" ? errorMessage : undefined}
        value={password}
        onChange={(value) => setPassword(value)}
      />
      <PrimaryButton label="Create Account" onClick={() => validateLogin()} />
      <TertiaryButton label="Cancel" onClick={() => history.goBack()} />
      <IonModal isOpen={showConfirmSignUpModal}>
        <Page>
          <IonLabel className={css.confirmText}>
            You're account has been created!
          </IonLabel>
          <SecondaryButton
            label="Go to the Home Page"
            onClick={() => {
              setShowConfirmSignUpModal(false), history.push("/home");
            }}
          />
        </Page>
      </IonModal>
    </Page>
  );
};

export default SignUpPage;
