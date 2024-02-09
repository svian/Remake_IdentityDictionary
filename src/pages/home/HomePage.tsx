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

export enum TerminologyLabel {
  GenderIdentity = "Gender Identity",
  GenderExpression = "Gender Expression",
  SexAssignedAtBirth = "Sex Assigned At Birth",
  SexualAttraction = "Sexual Attraction",
  RomanticAttraction = "Romantic Attraction",
  Pronouns = "Pronouns",
}

const HomePage: React.FC = () => {
  return (
    <>
      <Page title={"Home"} centerContent={false}>
        <NavButton label={"Profile"} color="red" href={"/profile"} />
        <Card title={"Learn the Terminology"} color="orange">
          <SmallCardGrid
            cards={[
              {
                title: TerminologyLabel.GenderIdentity,
                icon: GI_Icon,
                href: `/learn/${TerminologyLabel.GenderIdentity}`,
              },
              {
                title: TerminologyLabel.GenderExpression,
                icon: GE_Icon,
                href: `/learn/${TerminologyLabel.GenderExpression}`,
              },
              {
                title: TerminologyLabel.SexAssignedAtBirth,
                icon: SAAB_Icon,
                href: `/learn/${TerminologyLabel.SexAssignedAtBirth}`,
              },
              {
                title: TerminologyLabel.SexualAttraction,
                icon: SA_Icon,
                href: `/learn/${TerminologyLabel.SexualAttraction}`,
              },
              {
                title: TerminologyLabel.RomanticAttraction,
                icon: RA_Icon,
                href: `/learn/${TerminologyLabel.RomanticAttraction}`,
              },
              {
                title: TerminologyLabel.Pronouns,
                icon: Pronouns_Icon,
                href: `/learn/${TerminologyLabel.Pronouns}`,
              },
            ]}
          />
        </Card>
        <NavButton label={"Take the Quiz"} color="yellow" />
        <NavButton label={"More Resources"} color="green" />
        <NavButton label={"About the App"} color="white" />
      </Page>
    </>
  );
};

export default HomePage;
