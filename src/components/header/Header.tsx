import React from 'react';
import './Header.css';
import vector from '../../images/Vector.png';


function Header () {
    // const useStateWithLocalStorage = (nome : any) => {
    //     const [name, setName] = React.useState(
    //       localStorage.getItem(nome) || ''
    //       );
    //     }
  const nomeUsuario = localStorage.getItem('ls_nome');

  return (    
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
            {nomeUsuario}
        </div>
    </div>
  );
};

export default Header;