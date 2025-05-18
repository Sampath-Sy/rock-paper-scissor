import React, { useEffect, useState } from "react";
import "./RockPaperScissor.css";
import game from "./../assets/game.png";
import paper from "./../assets/paper.png";
import rock from "./../assets/rock.png";
import scissor from "./../assets/scissor.png";

const ROCK = "rock";
const PAPER = "paper";
const SCISSOR = "scissor";

export default function RockPaperScissor() {
  const [userSelection, setUserSelection] = useState(null);
  const [computerSelection, setComputerSelection] = useState(null);
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const choices = [ROCK, PAPER, SCISSOR];

  console.log(userSelection, computerSelection);

  function getWinner(user, computer) {
    if (user === computer) {
      return "tie";
    }
    if (
      (user === ROCK && computer === SCISSOR) ||
      (user === SCISSOR && computer === PAPER) ||
      (user === PAPER && computer === ROCK)
    ) {
      return "user";
    }
    return "computer";
  }

  function handleSelection(choice) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    setUserSelection(choice);
    setComputerSelection(computerChoice);

    const result = getWinner(choice, computerChoice);
    if (result === "user") {
      setUserScore((prev) => prev + 1);
    } else if (result === "computer") {
      setComputerScore((prev) => prev + 1);
    }
  }

  return (
    <div className="main-container">
      <div className="head-container">
        <img src={game} alt="" className="image" />
        <h1 className="heading">WELCOME TO ROCK,PAPER , SCISSOR GAME</h1>
      </div>

      <div className="icon-container">
        <div
          className="title-image-container"
          onClick={() => handleSelection(ROCK)}
        >
          <h2 className="title">Rock</h2>
          <img
            src={rock}
            alt=""
            className={userSelection === "rock" ? "icon selected" : "icon"}
          />
        </div>
        <div
          className="title-image-container"
          onClick={() => handleSelection(PAPER)}
        >
          <h2 className="title">Paper</h2>
          <img
            src={paper}
            alt=""
            className={userSelection === "paper" ? "icon selected" : "icon"}
          />
        </div>
        <div
          className="title-image-container"
          onClick={() => handleSelection(SCISSOR)}
        >
          <h2 className="title">Scissor</h2>
          <img
            src={scissor}
            alt=""
            className={userSelection === "scissor" ? "icon selected" : "icon"}
          />
        </div>
      </div>
      <div className="choice-score-container">
        <p>
          Your choice: <span className="choice">{userSelection}</span>
        </p>
        <p>
          Computer choice:<span className="choice">{computerSelection}</span>
        </p>
        <h2>your score:<span className="score user">{userScore}</span> </h2>
        <h2>computer score: <span className="score computer">{computerScore}</span></h2>
      </div>
    </div>
  );
}
