import React , {useState} from 'react';

const GameBoard = () => {

    const [userSelected, setUserSelected] = useState(null);
    const [computerSelected, setComputerSelected] = useState(null);
    const [userScore, setUserScore] = useState(0);
    const [computerScore, setComputerScore] = useState(0);

    function getComputerChoice(){
        const choices = ['rock', 'paper', 'scissors']
        const randomNumber = Math.floor(Math.random() * 3);
        return choices[randomNumber];
    }
    
      function startGame(value) {
        setUserSelected(value);
        setComputerSelected(getComputerChoice());
        
    }

    function selectWinner(){
        const criteria = `${userSelected}-${computerSelected}`;
        let result = null;
        switch(criteria){
            case "paper-rock":
            case "scissors-paper":
            case "rock-scissors":
                result = "user";
                setUserScore((previousState) => previousState + 1);
                break;
            case "rock-paper":
            case "paper-scissors":
            case "scissors-rock":
                result = "computer";
                setComputerScore((previousState) => previousState + 1);
                break;
            case "rock-rock":
            case "paper-paper":
            case "scissors-scissors":
                result = "draw";
                break;
            default:
                result = null;
        }
        return result;
    }


    const resultText = {
        "user" : `You choose ${userSelected}. You Won! 🥳🥳`,
        "computer" : `Computer chooses ${computerSelected}. You Lose! 😥😥`,
        "draw" : `It's a Draw. You both selected same thing.`
    }

    return (
        <div className="gameBoard">
            <div className="text">
                <h2>Pick One</h2>
            </div>
            <div className="choices">
                <button className="choice" value="rock" onClick={(e) => startGame(e.target.alt)}>
                    <img src={require("../images/rock.png")} alt="rock" />
                </button>
                <button className="choice" value="paper" onClick={(e) => startGame(e.target.alt)}>
                    <img src={require("../images/paper.png")} alt="paper" />
                </button>
                <button className="choice" value="scissors" onClick={(e) => startGame(e.target.alt)}>
                    <img src={require("../images/scissors.png")} alt="scissors" />
                </button>
            </div>
            <div className="result">
                <div className="user">
                    <h3>You</h3>
                    <div className="result-image">
                       {userSelected && <img className="user-selected" src={require(`../images/${userSelected}.png`)} />}
                    </div>
                </div>
                <div className="verus">
                    <h3>VS</h3>
                </div>
                <div className="computer">
                    <h3>Computer</h3>
                    <div className="result-image">
                       {computerSelected && <img className="computer-selected" src={require(`../images/${computerSelected}.png`)} />}
                    </div>
                </div>
            </div>
            <div className="winner">
                <div className="winner-text user-win hidden">
                    <span>                     
                    </span>
                </div>
                <div className="scores">
                    <span className="user-score">{userScore}</span>
                    <span>-</span>
                    <span className="computer-score">{computerScore}</span>
                </div>
            </div>
        </div>

    )
}

export default GameBoard;