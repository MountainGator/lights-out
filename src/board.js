import './board.css';
// import Cell from './cell';
import Row from './row';
import {useState} from 'react';

const Board = ({ width = 9, height = 9 }) => {
    const boardCols = Array.from({ length: width });
    const boardRows = Array.from({ length: height });

    const [mode, setMode] = useState('dark-mode');
    const mainBody = document.getElementById('root');
    mainBody.classList.add(mode);

    const [title, setTitle] = useState(['Lights Out', 'white']);
    
    function checkForWin () {
        const wholeBoard = [...document.querySelectorAll('.light')];
        console.log(wholeBoard);
        const long = width * height;
        if (wholeBoard.length === long - 1) {
            setMode('light-mode');
            setTitle(['You Win!', 'black']);
        }
    }


    return (
        <div id="main-game">
            <h1 id="game-title" style={{ color: `${title[1]}` }}>{title[0]}</h1>
            {boardRows.map((r, i) => <Row 
                key={i} 
                idx={i} 
                contents={boardCols}
                checkForWin={checkForWin}
                 />)}
        </div>
    )
}

export default Board;