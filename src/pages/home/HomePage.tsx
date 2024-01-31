import { useContext } from "react";
import { UserContext, UserContextState } from "../../context/userContext";
import Page from "../../components/page/Page";
import NavButton from "../../components/buttons/navButton/NavButton";
import Card from "../../components/cards/Card";
import GI_Icon from "../../../public/images/homePageIcons/GI_Icon.svg";
import GE_Icon from "../../../public/images/homePageIcons/GE_Icon.svg";
import Pronouns_Icon from "../../../public/images/homePageIcons/Pronouns_Icon.svg";
import RA_Icon from "../../../public/images/homePageIcons/RA_Icon.svg";
import SA_Icon from "../../../public/images/homePageIcons/SA_Icon.svg";
import SAAB_Icon from "../../../public/images/homePageIcons/SAAB_Icon.svg";

import SmallCardGrid from "../../components/cards/smallCard/SmallCardGrid";

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = (props: HomePageProps) => {
  const { contextUsername } = useContext(UserContext) as UserContextState;

  return (
    <Page title={"Home"} centerVertical={false} centerHorizontal={false}>
      <NavButton label={"Profile"} color="red" />
      <Card title={"Learn the Terminology"}>
        <SmallCardGrid
          cards={[
            { title: "Gender Identity", icon: GI_Icon },
            { title: "Gender Expression", icon: GE_Icon },
            { title: "Sex Assigned at Birth", icon: SAAB_Icon },
            { title: "Sexual Attraction", icon: SA_Icon },
            { title: "Romantic Attraction", icon: RA_Icon },
            { title: "Pronouns", icon: Pronouns_Icon },
          ]}
        />
      </Card>
      <NavButton label={"Take the Quiz"} color="yellow" />
      <NavButton label={"More Resources"} color="green" />
      <NavButton label={"About the App"} color="white" />
    </Page>
  );
};

export default HomePage;
