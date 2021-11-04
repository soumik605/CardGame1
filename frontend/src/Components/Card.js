import React from "react";
import styled from "styled-components";

const Card = (props) => {
  const OpenCardClick = () => {
    if (props.openCards.length === 1) {
      props.setOpenCards([]);
    }
  };

  const CloseCardClick = () => {
    if (props.openCards.length === 0) {
      props.setOpenCards([props.number]);
      props.setClicks(props.clicks + 1)
    } else if (props.openCards.length === 1) {
      props.setClicks(props.clicks + 1)
      props.setOpenCards([props.openCards[0], props.number]);

      setTimeout(function () {
        if (
          (props.number === 1 && props.openCards[0] === 2) ||
          (props.number === 2 && props.openCards[0] === 1)
        ) {
          const arr = props.showCards;
          arr.push(1, 2);
          props.setShowCards(arr);
          props.setOpenCards([]);
        } else if (
          (props.number === 3 && props.openCards[0] === 4) ||
          (props.number === 4 && props.openCards[0] === 3)
        ) {
          const arr = props.showCards;
          arr.push(3, 4);
          props.setShowCards(arr);
          props.setOpenCards([]);
        } else if (
          (props.number === 5 && props.openCards[0] === 6) ||
          (props.number === 6 && props.openCards[0] === 5)
        ) {
          const arr = props.showCards;
          arr.push(5, 6);
          props.setShowCards(arr);
          props.setOpenCards([]);
        } else if (
          (props.number === 7 && props.openCards[0] === 8) ||
          (props.number === 8 && props.openCards[0] === 7)
        ) {
          const arr = props.showCards;
          arr.push(7, 8);
          props.setShowCards(arr);
          props.setOpenCards([]);
        } else if (
          (props.number === 9 && props.openCards[0] === 10) ||
          (props.number === 10 && props.openCards[0] === 9)
        ) {
          const arr = props.showCards;
          arr.push(9, 10);
          props.setShowCards(arr);
          props.setOpenCards([]);
        } else if (
          (props.number === 11 && props.openCards[0] === 12) ||
          (props.number === 12 && props.openCards[0] === 11)
        ) {
          const arr = props.showCards;
          arr.push(11, 12);
          props.setShowCards(arr);
          props.setOpenCards([]);
        } else if (
          (props.number === 13 && props.openCards[0] === 14) ||
          (props.number === 14 && props.openCards[0] === 13)
        ) {
          const arr = props.showCards;
          arr.push(13, 14);
          props.setShowCards(arr);
          props.setOpenCards([]);
        } else if (
          (props.number === 15 && props.openCards[0] === 16) ||
          (props.number === 16 && props.openCards[0] === 15)
        ) {
          const arr = props.showCards;
          arr.push(15, 16);
          props.setShowCards(arr);
          props.setOpenCards([]);
        } else if (
          (props.number === 17 && props.openCards[0] === 18) ||
          (props.number === 18 && props.openCards[0] === 17)
        ) {
          const arr = props.showCards;
          arr.push(17, 18);
          props.setShowCards(arr);
          props.setOpenCards([]);
        } else if (
          (props.number === 19 && props.openCards[0] === 20) ||
          (props.number === 20 && props.openCards[0] === 19)
        ) {
          const arr = props.showCards;
          arr.push(19, 20);
          props.setShowCards(arr);
          props.setOpenCards([]);
        } else {
          props.setOpenCards([]);
        }
      }, 1500);

     
    }
  };

  return (
    <>
      {props.showCards.length !== 0 &&
      props.showCards.includes(props.number) ? (
        props.number === 1 ? (
          <Cards  src="static/Images/Book.jpg" alt="static/Images/Book.jpg" />
        ) : props.number === 2 ? (
          <Cards  src="static/Images/Book.jpg" />
        ) : props.number === 3 ? (
          <Cards  src="static/Images/Car.webp" />
        ) : props.number === 4 ? (
          <Cards  src="static/Images/Car.webp" />
        ) : props.number === 5 ? (
          <Cards  src="static/Images/Flower.jpg" />
        ) : props.number === 6 ? (
          <Cards  src="static/Images/Flower.jpg" />
        ) : props.number === 7 ? (
          <Cards  src="static/Images/Nature.jpg" />
        )  : props.number === 8 ? (
          <Cards  src="static/Images/Nature.jpg" />
        )  : props.number === 9 ? (
          <Cards  src="static/Images/Ben.jpg" />
        )  : props.number === 10 ? (
          <Cards  src="static/Images/Ben.jpg" />
        )  : props.number === 11 ? (
          <Cards  src="static/Images/doraemon.png" />
        )  : props.number === 12 ? (
          <Cards  src="static/Images/doraemon.png" />
        )  : props.number === 13 ? (
          <Cards  src="static/Images/Hulk.webp" />
        )  : props.number === 14 ? (
          <Cards  src="static/Images/Hulk.webp" />
        )  : props.number === 15? (
          <Cards  src="static/Images/ShinChan.jpg" />
        )  : props.number === 16? (
          <Cards  src="static/Images/ShinChan.jpg" />
        )  : props.number === 17? (
          <Cards  src="static/Images/TJ.jpg" />
        )  : props.number === 18? (
          <Cards  src="static/Images/TJ.jpg" />
        )  : props.number === 19? (
          <Cards  src="static/Images/Thor.jpg" />
        ) : (
          props.number === 20 && (
            <Cards
              src="static/Images/Thor.jpg"
            />
          )
        )
      ) : props.openCards && props.openCards.includes(props.number) ? (
        props.number === 1 ? (
          <Cards
            style={{ backgroundColor: "grey" }}
            onClick={() => OpenCardClick()}
            src="static/Images/Book.jpg"
          />
        ) : props.number === 2 ? (
          <Cards
            style={{ backgroundColor: "grey" }}
            onClick={() => OpenCardClick()}
            src="static/Images/Book.jpg"
          />
        ) : props.number === 3 ? (
          <Cards
            style={{ backgroundColor: "grey" }}
            onClick={() => OpenCardClick()}
            src="static/Images/Car.webp"
          />
        ) : props.number === 4 ? (
          <Cards
            style={{ backgroundColor: "grey" }}
            onClick={() => OpenCardClick()}
            src="static/Images/Car.webp"
          />
        ) : props.number === 5 ? (
          <Cards
            style={{ backgroundColor: "grey" }}
            onClick={() => OpenCardClick()}
            src="static/Images/Flower.jpg"
          />
        ) : props.number === 6 ? (
          <Cards
            style={{ backgroundColor: "grey" }}
            onClick={() => OpenCardClick()}
            src="static/Images/Flower.jpg"
          />
        ) : props.number === 7 ? (
          <Cards
            style={{ backgroundColor: "grey" }}
            onClick={() => OpenCardClick()}
            src="static/Images/Nature.jpg"
          />
        )  : props.number === 8 ? (
          <Cards
            style={{ backgroundColor: "grey" }}
            onClick={() => OpenCardClick()}
            src="static/Images/Nature.jpg"
          />
        )  : props.number === 9 ? (
          <Cards
            style={{ backgroundColor: "grey" }}
            onClick={() => OpenCardClick()}
            src="static/Images/Ben.jpg"
          />
        )  : props.number === 10 ? (
          <Cards
            style={{ backgroundColor: "grey" }}
            onClick={() => OpenCardClick()}
            src="static/Images/Ben.jpg"
          />
        )  : props.number === 11 ? (
          <Cards
            style={{ backgroundColor: "grey" }}
            onClick={() => OpenCardClick()}
            src="static/Images/doraemon.png"
          />
        )  : props.number === 12 ? (
          <Cards
            style={{ backgroundColor: "grey" }}
            onClick={() => OpenCardClick()}
            src="static/Images/doraemon.png"
          />
        )  : props.number === 13 ? (
          <Cards
            style={{ backgroundColor: "grey" }}
            onClick={() => OpenCardClick()}
            src="static/Images/Hulk.webp"
          />
        )  : props.number === 14 ? (
          <Cards
            style={{ backgroundColor: "grey" }}
            onClick={() => OpenCardClick()}
            src="static/Images/Hulk.webp"
          />
        )  : props.number === 15 ? (
          <Cards
            style={{ backgroundColor: "grey" }}
            onClick={() => OpenCardClick()}
            src="static/Images/ShinChan.jpg"
          />
        )  : props.number === 16 ? (
          <Cards
            style={{ backgroundColor: "grey" }}
            onClick={() => OpenCardClick()}
            src="static/Images/ShinChan.jpg"
          />
        )  : props.number === 17 ? (
          <Cards
            style={{ backgroundColor: "grey" }}
            onClick={() => OpenCardClick()}
            src="static/Images/TJ.jpg"
          />
        )  : props.number === 18 ? (
          <Cards
            style={{ backgroundColor: "grey" }}
            onClick={() => OpenCardClick()}
            src="static/Images/TJ.jpg"
          />
        )  : props.number === 19 ? (
          <Cards
            style={{ backgroundColor: "grey" }}
            onClick={() => OpenCardClick()}
            src="static/Images/Thor.jpg"
          />
        ) : (
          props.number === 20 && (
            <Cards
              style={{ backgroundColor: "grey" }}
              onClick={() => OpenCardClick()}
              src="static/Images/Thor.jpg"
            />
          )
        )
      ) : (
        <Cards
          onClick={() => CloseCardClick()}
          src={"static/Images/CardBack.jpg"}
          alt=""
        />
      )}
    </>
  );
};

const Cards = styled.img`
  margin: 10px;
  width: 130px;
  height: 130px;
  box-sizing: border-box;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 5px 5px 10px 1px black;
`;

export default Card;
