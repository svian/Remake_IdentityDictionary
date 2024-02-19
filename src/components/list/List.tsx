import { IonList } from "@ionic/react";

interface ListItem {
  label: string;
  sublabel?: string;
  content?: React.ReactNode;
}

interface ListProps {
  children: React.ReactNode;
}

const List: React.FC<ListProps> = (props: ListProps) => {
  return <IonList>{props.children}</IonList>;
};

export default List;
