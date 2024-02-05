import SmallCard from "./SmallCard";
import css from "./SmallCardGrid.module.css";

interface CardData {
  title: string;
  icon: string;
  href?: string;
  onClick?: () => void;
}

interface SmallCardGridProps {
  cards: Array<CardData>;
}

const SmallCardGrid: React.FC<SmallCardGridProps> = (
  props: SmallCardGridProps
) => {
  return (
    <div className={css.gridList}>
      {props.cards.map((card, index) => {
        return (
          <SmallCard
            key={index}
            title={card.title}
            icon={card.icon}
            href={card.href}
            onClick={card.onClick}
          />
        );
      })}
    </div>
  );
};

export default SmallCardGrid;
