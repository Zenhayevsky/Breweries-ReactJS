import React from "react";
import './cards.css'
import excluirImage from '../../images/Vector.png'
function Cards() {

  return (
    <div className="divCard">
      <div className="headcard">
        <div className="nomeBrewerie">
          <span><b>10-56 Brewering Company l</b></span>
        </div>
        <div>
          <img className="excluirIcon" src={excluirImage}/>
        </div>
      </div>
      <div class="container">
        <div>
          <span>John Doe</span>
        </div>
        <div>
          <span>Architect e Engineer</span>
        </div>
      </div>
    </div>
  );
};

export default Cards;