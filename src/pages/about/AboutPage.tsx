import { toHaveAttribute } from "@testing-library/jest-dom/matchers";
import Page from "../../components/page/Page";
import css from "./AboutPage.module.css";

const AboutPage: React.FC = () => {
  return (
    <Page title="About the App" hasBackButton={true} centerContent={false}>
      <div className={css.background}>
        <div className={css.text}>
          This app was developed as a final project for my Women's and Gender
          Studies class. My hope for this app is for it to be an educational
          tool for those looking to learn more about LGBTQ+ identities and
          understand the terminology better. This app is also for LGBTQ+ people
          to understand themselves a little better. While labels are not
          necessary or desired by everyone, there is also an inherent comfort
          provided by being able to put a name to your experiences, and know
          that you have a community of people like yourself.
        </div>
        <div className={css.text}>
          I did my best to compile a diverse list of identities, but the LGBTQ+
          community is vast, and as such, this is not a comprehensive list of
          every identity out there. But for those looking for even more
          information, there are other resources available in the "more
          resources" tab.
        </div>
      </div>
    </Page>
  );
};

export default AboutPage;
