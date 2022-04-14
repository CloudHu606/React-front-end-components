import { useState } from "react";

const FlashCard = (data) => {

    const {cards} = data.data;

    const [card, setCard] = useState(0);
    const [side, setSide] = useState("a");

    const flipCard = (side) => {
        console.log(side);
        if(side === "a"){
            setSide(side = "b");
        } else{
            setSide(side = "a");
        }
    }

    const goLeft = (card) => {
        if (card > 0) {
            setCard(card = card -1);
        }
    }

    const goRight = (card) => {
        if (card < cards.length-1) {
            setCard(card = card +1);
        } 
    }

    return(
        <div className="container">
            <div onClick={()=>goLeft(card)}> &larr; </div>
            <div onClick={()=>flipCard(side)}> {cards[card][side]} </div>
            <div onClick={()=>goRight(card)}> &rarr;  </div>
        </div>
    )
} 

export default (FlashCard);