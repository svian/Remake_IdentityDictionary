import { IonItem, IonLabel } from "@ionic/react";

interface ListItemProps {
  label?: string;
  className?: string;
  children?: React.ReactNode;
}

const ListItem: React.FC<ListItemProps> = (props: ListItemProps) => {
  return (
    <IonItem className={props.className}>
      {props.label && <IonLabel>{props.label}</IonLabel>}
      {props.children}
    </IonItem>
  );
};

export default ListItem;
