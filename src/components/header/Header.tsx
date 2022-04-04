import React from 'react';
import './Header.css';
import vector from '../../images/Vector.png';

const Header = () => (
    <div className="header">
        <div>
            <a href={"/"}>
                <img className="gobackImg" src={vector}></img>
            </a>
            <div className="goback">
                <span>
                    Go back
                </span>
            </div>
        </div>
        <div className="nomeUsuario">
            <span>Full Name</span>
        </div>
    </div>
);

export default Header;