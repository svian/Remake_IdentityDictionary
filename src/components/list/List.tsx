import { IonList, IonItem, IonLabel } from "@ionic/react";

interface ListItem {
  label: string;
  subheader: string;
}

interface ListProps {
  items: Array<ListItem>;
}

const List: React.FC<ListProps> = (props: ListProps) => {
  return (
    <IonList>
      {props.items.map((item, index) => {
        return (
          <IonItem key={index}>
            <IonLabel>{item.label}</IonLabel>
            <IonLabel>{item.subheader}</IonLabel>
          </IonItem>
        );
      })}
    </IonList>
  );
};

export default List;
