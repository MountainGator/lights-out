import './cell.css';
import {useState} from 'react';


const Cell = ({ ind, setLight, setSwitch, onOff, light}) => {
    
    const lightSwitch = () => (
        setSwitch(() => onOff === false ? true : false)
    )

    const changeLight = () => {
        return setLight( () => light === 'cell dark' ? 'cell light' : 'cell dark' );
    }


    function handleClick () {
        lightSwitch();
        changeLight();
    }

    return (
        <div id={ind} className={light} 
            onClick={ () => handleClick()}>
            <div className='circle'></div>
        </div>
    )
}

export default Cell;