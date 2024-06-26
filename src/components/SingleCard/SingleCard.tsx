import './SingleCard.css';
import {Card} from "../../types";

interface Props {
  card: Card;
  handleChoice: (card: Card) => void;
  flipped: boolean;
  disabled: boolean;
}

export const SingleCard = ({ card, handleChoice, flipped, disabled }: Props) => {

  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="card front" />
        <img className="back" src="/img/cover.png" onClick={handleClick} alt="cover" />
      </div>
    </div>
  );
};
