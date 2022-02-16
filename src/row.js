import './row.css'
import Cell from './cell';
import {useState} from 'react';

const Row = ({ contents, idx, checkForWin }) => {
    

    return (
        <div className="row" id={idx}>
            {contents.map((c, i) => <Cell 
                key={`${idx}-${i}`} 
                ind={`${idx}-${i}`}
                checkForWin={checkForWin}
                />)}
        </div>
    )
}

export default Row;