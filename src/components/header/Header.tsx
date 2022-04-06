import React from 'react';
import './Header.css';
import vector from '../../images/Vector.png';


function Header () {

  const nomeUsuario = localStorage.getItem('ls_nome');

  function backbutton () {
    localStorage.removeItem("ls_nome");
  } 

  return (    
    <div className="header">
        <div>
            <a href="/" onClick={backbutton}>
                <img className="gobackImg" src={vector}></img>
            </a>
            <div className="goback">
                <span>
                    Go back
                </span>
            </div>
        </div>
        <div className="nomeUsuario">
            {nomeUsuario}
        </div>
    </div>
  );
};

export default Header;