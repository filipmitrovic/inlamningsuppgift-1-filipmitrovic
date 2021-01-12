import React from 'react';
import Dices from './components/Dices';
import Result from './components/Result';
import './index.css';
let gameEndedCounter = 0;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userDiceSum: 0,
            computerDiceSum: 0,
            btnDisabled: {
                btn1: false,
                btn2: false,
                btn3: false
            },
            gameEnded: false,
        }
        this.handleClick = this.handleClick.bind(this);
        this.computerDice = this.computerDice.bind(this);
        this.resetGame = this.resetGame.bind(this);

    }

    computerDice() {
        const randomNumber = Math.floor(Math.random() * 6) + 1;
        this.setState((prevState) => ({ computerDiceSum: prevState.computerDiceSum + randomNumber }));
    }

    handleClick(randomNumber, btnID) {
        this.setState((prevState) => ({ userDiceSum: prevState.userDiceSum + randomNumber }));
        this.setState({ btnDisabled: { ...this.state.btnDisabled, [btnID]: true} });
        this.computerDice();
        gameEndedCounter++;
        if (gameEndedCounter === 3) {
            this.setState({ gameEnded: true });
        }
    }

    resetGame() {
        gameEndedCounter = 0;
        this.setState({
            userDiceSum: 0,
            computerDiceSum: 0,
            btnDisabled: {
                btn1: false,
                btn2: false,
                btn3: false
            },
            gameEnded: false,
        })
    }

    render() {
        return (
            <div style={{margin: '20px'}}>
                <h1>Dice Game</h1>
                <section>
                    <Dices 
                        btnClick={this.handleClick} 
                        disabled={this.state.btnDisabled}
                    />
                    <Result 
                        userResult={this.state.userDiceSum} 
                        computerResult={this.state.computerDiceSum} 
                        gameEnded={this.state.gameEnded}
                        reset={this.resetGame}
                    />
                </section>
            </div>
        )
    }
}

export default App;