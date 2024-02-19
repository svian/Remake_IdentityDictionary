import List from "../../components/list/List";
import ListItem from "../../components/list/ListItem";
import { TermListItem } from "../../models/terminology";
import css from "./TerminologyList.module.css";

interface TerminologyListProps {
  termList: Array<TermListItem>;
}

const TerminologyList: React.FC<TerminologyListProps> = (
  props: TerminologyListProps
) => {
  return (
    <List>
      {props.termList.map((element, index) => {
        return (
          <ListItem label={element.term} className={css.item}>
            <div className={css.grid}>
              <div>
                {element.pronunciation}
                <br />
                {element.definition}
              </div>
              <img className={css.flag} src={element.flag} />
            </div>
          </ListItem>
        );
      })}
    </List>
  );
};

export default TerminologyList;
