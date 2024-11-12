import { useState } from 'react';
import avatar from '../assets/avatar.png'


export function UserRow(){
    const [bgColor, setBgColor] = useState('transparent'); // Inicialmente transparente

    return (
        <div 
            className="row" 
            onClick={() => setBgColor('#f6f6fe')}  // Muda a cor de fundo ao clicar
            style={{ backgroundColor: bgColor }}  // Aplica o bgColor do estado como cor de fundo
        >
            <img src={avatar} alt="" style={{width: "5rem", borderRadius: "6px" }}/>

            <div className="name-msg">
                <span>Nome</span>
                <p>ult. msg</p>
            </div>
            <p style={{color: 'rgb(183, 184, 185)', fontWeight: 'bold'}}>1m</p>
        </div>
    )
}


