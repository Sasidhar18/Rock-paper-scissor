import React from 'react'

const Game = (props) => {

    const choices = ['rock', 'paper', 'scissors'];

    const getRandomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const computerResponse = choices[getRandomInt(0,2)];
    let matchResult = '';

    const playResult = () => {
        if (props.choice.toUpperCase() === computerResponse.toUpperCase()) {
            return "it's a draw!";
        } else if ((props.choice.toLowerCase() === 'rock' && computerResponse === 'scissors')) {
            return "You win! Rock beats scissors.";
        } else if ((props.choice.toLowerCase() === 'rock' && computerResponse === 'paper')) {
            return "You lose! Paper beats rock.";
        } else if ((props.choice.toLowerCase() === 'paper' && computerResponse === 'rock')) {
            return "You win! Paper beats rock.";
        } else if ((props.choice.toLowerCase() === 'paper' && computerResponse === 'scissors')) {
            return "You lose! Scissors beats paper.";
        } else if ((props.choice.toLowerCase() === 'scissors' && computerResponse === 'paper')) {
            return "You win! Scissors beats paper.";
        } else if ((props.choice.toLowerCase() === 'scissors' && computerResponse === 'rock')) {
            return "You lose! Rock beats scissors.";
        }
    }


  return (
    <div>
        <p>you picked {props.choice}</p>
        <p>Computer picked {computerResponse}</p>
        <p>result: {playResult()}</p>
        <p onClick={() => props.showResult(false)}>Play Again</p>
    </div>
  )
}

export default Game
