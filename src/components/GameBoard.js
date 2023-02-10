import React , {useState, useEffect} from 'react';

const GameBoard = () => {

    const [userSelected, setUserSelected] = useState(null);
    const [computerSelected, setComputerSelected] = useState(null);
    const [winner, setWinner] = useState(null);
    const [userScore, setUserScore] = useState(0);
    const [computerScore, setComputerScore] = useState(0);

    const resultText = {
        "user" : `You chose ${userSelected}. You Won! 🥳🥳`,
        "computer" : `Computer chose ${computerSelected}. You Lose! 😥😥`,
        "draw" : `It's a Draw. You both selected same thing.`
    }

    function getComputerChoice(){
        const choices = ['rock', 'paper', 'scissors']
        const randomNumber = Math.floor(Math.random() * 3);
        return choices[randomNumber];
    }

    function startGame(value) {
        setUserSelected(value);
        const computerChoice = getComputerChoice();
        setComputerSelected(computerChoice);
    }

    useEffect(() => {
        if (computerSelected !== null && userSelected !== null)
            selectWinner();
    }, [computerSelected, userSelected]);
    
    let result = null;
    function selectWinner(){        
        if(userSelected === computerSelected){
            result = 'draw';
        }

        const criteria = `${userSelected}-${computerSelected}`;
        if (['paper-rock', 'scissors-paper', 'rock-scissors'].indexOf(criteria) === -1){
            result = 'computer';
        }
        result = 'user';
        setWinner(result);
    }

    useEffect(() => {
        if (winner === 'user'){
            setUserScore(prevScore => prevScore + 1);
        }
        if (winner === 'computer'){
            setComputerScore(prevScore => prevScore + 1);
        }
    }, [winner]);

    return (
        <div className="gameBoard">
            <div className="text">
                <h2>Pick One</h2>
            </div>
            <div className="choices">
                <button className="choice" value="rock" onClick={() => startGame('rock')}>
                    <img src={require("../images/rock.png")} alt="rock" />
                </button>
                <button className="choice" value="paper" onClick={() => startGame('paper')}>
                    <img src={require("../images/paper.png")} alt="paper" />
                </button>
                <button className="choice" value="scissors" onClick={() => startGame('scissors')}>
                    <img src={require("../images/scissors.png")} alt="scissors" />
                </button>
            </div>
            <div className="result">
                <div className="user">
                    <h2>You</h2>
                    <div className="result-image">
                       {userSelected && <img className="user-selected" src={require(`../images/${userSelected}.png`)} />}
                    </div>
                </div>
                <div className="verus">
                    <p>VS</p>
                </div>
                <div className="computer">
                    <h2>Computer</h2>
                    <div className="result-image">
                       {computerSelected && <img className="computer-selected" src={require(`../images/${computerSelected}.png`)} />}
                    </div>
                </div>
            </div>
            <div className="winner">
                {winner && <div className={`winner-text ${winner}-win`}>
                    <span>{resultText[result]}</span>
                </div>}
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