import { useState } from 'react';
import avatar from '../assets/avatar.png';  // Certifique-se de que o caminho do avatar está correto

export function UserRow({ user }) {
    const [bgColor, setBgColor] = useState('transparent'); // Inicialmente transparente

    return (
        <div
            className="row"
            onClick={() => setBgColor('#f6f6fe')}  // Muda a cor de fundo ao clicar
            style={{ backgroundColor: bgColor }}  // Aplica o bgColor do estado como cor de fundo
        >
            <img src={avatar} alt="" style={{ width: "5rem", borderRadius: "6px" }} />

            <div className="name-msg">
                <span>{user.name}</span>
                <p>{user.lastMS}</p>
            </div>
            <p style={{ color: 'rgb(183, 184, 185)', fontWeight: 'bold' }}>
                {user.min !== undefined ? `${user.min}m` : "--"}
            </p>
        </div>
    );
}
