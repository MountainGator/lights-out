import './board.css';
// import Cell from './cell';
import Row from './row';
import {useState} from 'react';

const Board = ({ width = 8, height = 7 }) => {
    const boardCols = Array.from({ length: width });
    const boardRows = Array.from({ length: height });

    const [mode, setMode] = useState('dark-mode');
    const mainBody = document.getElementById('root');
    mainBody.classList.add(mode);

    const [onOff, setSwitch] = useState(false);

    
    
    const [light, setLight] = useState('cell dark');
    

    return (
        <div id="main-game">
            <h1 id="game-title">Lights Out</h1>
            {boardRows.map((r, i) => <Row 
                key={i} 
                idx={i} 
                contents={boardCols} 
                setLight={setLight} 
                setSwitch={setSwitch} 
                onOff={onOff} 
                light={light} />)}
        </div>
    )
}

export default Board;