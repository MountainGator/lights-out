import './row.css'
import Cell from './cell';
// import {useState} from 'react';

const Row = ({contents, idx, setLight, setSwitch, onOff, light}) => {
    return (
        <div className="row" id={idx}>
            {contents.map((c, i) => <Cell 
                key={`${idx}-${i}`} 
                ind={`${idx}-${i}`}
                setLight={setLight} 
                setSwitch={setSwitch} 
                onOff={onOff} 
                light={light}/>)}
        </div>
    )
}

export default Row;