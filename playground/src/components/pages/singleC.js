import FlashCard from "../flashCard";
import cardsData from "../../data/cards.json";

const SingleC = () => {
  const data = cardsData;
  return (
    <>
      <h2>components 1 - Flash Card</h2>
      <FlashCard cards={data} />
    </>
  );
};

export default SingleC;
