import React from 'react';

function randomDiceVal() {
    return Math.floor(Math.random() * 6) + 1;
}

function Dices(props) {

    const handleClick = (e) => props.btnClick(randomDiceVal(), e.target.id);

    return (
        <div>
            <button id={'btn1'} onClick={(e) => handleClick(e)} disabled={props.disabled.btn1}>Roll Dice 1</button>
            <button id={'btn2'} onClick={(e) => handleClick(e)} disabled={props.disabled.btn2}>Roll Dice 2</button>
            <button id={'btn3'} onClick={(e) => handleClick(e)} disabled={props.disabled.btn3}>Roll Dice 3</button>
        </div>
    )
}

export default Dices
