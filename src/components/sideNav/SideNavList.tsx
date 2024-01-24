import { useContext } from "react";
import { UserContext, UserContextState } from "../../context/userContext";
import { IonButton, IonItem, IonList } from "@ionic/react";

interface SideNavListProps {}

const SideNavList: React.FC<SideNavListProps> = (props: SideNavListProps) => {
  const { contextUsername } = useContext(UserContext) as UserContextState;

  const items = [
    {
      label: "Profile",
      route: "",
      visible: contextUsername !== "Guest",
    },
    {
      label: "About",
      route: "",
      visible: true,
    },
    {
      label: "More Resources",
      route: "",
      visible: true,
    },
    {
      label: "Sign out",
      route: "",
      visible: contextUsername !== "Guest",
    },
  ];
  return (
    <>
      {items.map((item, index) => {
        return (
          <>
            {item.visible && (
              <IonList key={index}>
                <IonItem>
                  <IonButton>{item.label}</IonButton>
                </IonItem>
              </IonList>
            )}
          </>
        );
      })}
    </>
  );
};

export default SideNavList;
