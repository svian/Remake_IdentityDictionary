import { useContext } from "react";
import { UserContext, UserContextState } from "../../context/userContext";
import MenuPage from "../../components/page/MenuPage";
import SideNavList from "../../components/sideNav/SideNavList";

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = (props: HomePageProps) => {
  const { contextUsername } = useContext(UserContext) as UserContextState;

  return (
    <div>
      <MenuPage
        pageTitle="Home Page"
        menuTitle="Menu"
        menuItems={<SideNavList />}
      >
        {"Welcome " + contextUsername}
      </MenuPage>
    </div>
  );
};

export default HomePage;
