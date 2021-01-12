import React from 'react';

function calcWinner(userResult, compResult) {
    let winner = '';
    if (userResult > compResult) {
        winner = 'VINST';
    } else if (userResult < compResult) {
        winner = 'FÖRLUST';
    } else if (userResult === compResult) {
        winner = 'LIKA';
    }
    return winner;
}

function Result(props) {
    let winner = '';
    let replay = '';
    if (props.gameEnded) {
        winner = calcWinner(props.userResult, props.computerResult);
        replay = <button onClick={props.reset}>Reset game</button>;
    }
    return (
        <div>
            <h2>{ winner }</h2>
            <p>Ditt poäng: { props.userResult }</p>
            <p>Datorns poäng: { props.computerResult }</p>
            {replay}
        </div>
    )
}

export default Result
