import { useHistory } from "react-router";
import PrimaryButton from "../../components/buttons/primaryButton/PrimaryButton";
import SecondaryButton from "../../components/buttons/secondaryButton/SecondaryButton";
import Card from "../../components/cards/Card";
import Page from "../../components/page/Page";
import { useUserContext } from "../../context/userContext";
import css from "./ProfilePage.module.css";

const ProfilePage: React.FC = () => {
  const { contextUsername } = useUserContext();
  const history = useHistory();

  return (
    <Page
      title={"Profile"}
      hasBackButton={true}
      hasEditIcon={contextUsername !== "Guest"}
    >
      <>
        {contextUsername !== "Guest" ? (
          <>
            <Card title={"Hello " + contextUsername} color="white"></Card>
            <Card title={"Highest Quiz Score: 17/32"} color="white"></Card>
          </>
        ) : (
          <div className={css.text}>
            <div className={css.largeText}>{"Uh Oh!"}</div>
            <div className={css.normalText}>
              {
                "Looks like you're not signed into an account. In order to view and edit your profile you need to be logged in."
              }
            </div>
            <PrimaryButton
              label="Login"
              onClick={() => history.push("/login")}
            />
            <div className={css.smallText}>{"Don't have an account?"}</div>
            <SecondaryButton
              label="Sign up"
              onClick={() => history.push("/signUp")}
            />
          </div>
        )}
      </>
    </Page>
  );
};

export default ProfilePage;
