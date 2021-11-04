import React, { useState } from "react";
import styled from "styled-components";
import Card from "./Card";
import OpenCards from "./OpenCards";
import {useHistory} from 'react-router-dom'


//Myk86nJp7t0Hq9d3

const Home = (props) => {
  const [openCards, setOpenCards] = useState([]);
  const [showCards, setShowCards] = useState([]);
  const [showAllCards, setShowAllCards] = useState(true);
  const [clicks, setClicks] = useState(0);
  const history = useHistory()

  function refreshPage() {
    window.location.reload(false);
  }



  {
    setTimeout(function () {
      setShowAllCards(false);
    }, 4000);
  }

  return (
    <div>
      <Main>
        <CardHolder>
          {showAllCards && props.list 
            ? props.list.map((id) => (
                <OpenCards
                  key={id}
                  number={id}
                  openCards={openCards}
                  setOpenCards={setOpenCards}
                  showCards={showCards}
                  setShowCards={setShowCards}
                />
              ))
            : props.list && props.list.map((id) => (
                <Card
                  key={id}
                  number={id}
                  openCards={openCards}
                  setOpenCards={setOpenCards}
                  showCards={showCards}
                  setShowCards={setShowCards}
                  clicks={clicks}
                  setClicks={setClicks}
                />
              ))}
        </CardHolder>
        <BtnGroup>
          <button onClick={refreshPage}>Reset</button>
          <button>{clicks} Clicks</button>
        </BtnGroup>
      </Main>
    </div>
  );
};

const Main = styled.div`
  background-image: linear-gradient(to right, #000428, #004e92);
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const CardHolder = styled.div`
  width: 750px;
  height: 600px;
  margin-top: calc((100vh - 600px) / 2);
  margin-left: 100px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const BtnGroup = styled.div`
  margin: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;

  & > button {
    padding: 15px 20px;
    font-size: 16px;
    background-color: lightblue;
    margin: 20px auto;
    border-radius: 20px;
    border: none;
    box-shadow: 5px 6px 15px 0px black;

    &:hover {
      background-color: #2525ff;
      color: white;
    }
  }
`;


export default Home;
