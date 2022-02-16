import './cell.css';
import './index.css';
import {useState} from 'react';


const Cell = ({ ind, checkForWin }) => {
    const [light, setLight] = useState('cell dark');
    const [onOff, setSwitch] = useState(false);
    

    const lightSwitch = () => (
        setSwitch(() => onOff === false ? true : false)
    )

    const changeLight = () => {
        return setLight( () => light === 'cell dark' ? 'cell light' : 'cell dark' );
    }

    function handleClick (evt) {
        lightSwitch();
        changeLight();

        const selected = evt.target.id; 
        
        const y = parseInt(selected.slice(0,1));
        const x = parseInt(selected.slice(-1));
        
        const upLeft = document.getElementById(`${y - 1}-${x - 1}`);
        const upCenter = document.getElementById(`${y - 1}-${x}`);
        const upRight = document.getElementById(`${y - 1}-${x + 1}`);

        const cenLeft = document.getElementById(`${y}-${x - 1}`);
        const cenRight = document.getElementById(`${y}-${x + 1}`);

        const downLeft = document.getElementById(`${y + 1}-${x - 1}`);
        const downCenter = document.getElementById(`${y + 1}-${x}`);
        const downRight = document.getElementById(`${y + 1}-${x + 1}`);

        const cellArr = [
            upLeft, upCenter, upRight, 
            cenLeft, cenRight, 
            downLeft, downCenter, downRight];
        
        for(let cell of cellArr){
            if(cell !== null) {
                if(cell.className === 'cell dark') {
                cell.className = 'cell light';
                } else if(cell.className === 'cell light') {
                    cell.className = 'cell dark';
                }
            }
        }


    }

    return (
        <div id={ind} className={light} 
            onClick={ (e) => { 
                handleClick(e);
                checkForWin();
            }}>
            <div className='circle'></div>
        </div>
    )
}

export default Cell;