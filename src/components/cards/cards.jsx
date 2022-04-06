import React, { useState, useEffect } from "react";
import './cards.css';
import excluirImage from '../../images/excluir.png';
import telefone from '../../images/telefone.png';
import tipo from '../../images/tipo.png';
import completo from '../../images/completo.png';
import axios from 'axios';

function Cards() {

  const [brewerieStreet, setBrewerieStreet] = useState('');
  const [brewerieName, setBrewerieName] = useState('');
  const [brewerieCidade, setBrewerieCidade] = useState('');
  const [brewerieState, setBrewerieState] = useState('');
  const [brewerieCountry, setBrewerieCountry] = useState('');
  const [brewerieCep, setBrewerieCep] = useState('');
  const [brewerieTelefone, setBrewerieTelefone] = useState('');
  const [brewerieTipo, setBrewerieTipo] = useState('');


  useEffect(() => {

    axios.get('https://api.openbrewerydb.org/breweries?by_postal=44107')
      .then((response) => {
        const brewerieChegando = response.data;
        setBrewerieStreet(brewerieChegando[1].street);
        setBrewerieName(brewerieChegando[1].name);
        setBrewerieCidade(brewerieChegando[1].city);
        setBrewerieState(brewerieChegando[1].state);
        setBrewerieCountry(brewerieChegando[1].country);
        setBrewerieCep(brewerieChegando[1].postal_code);
        setBrewerieTelefone(brewerieChegando[1].phone);
        setBrewerieTipo(brewerieChegando[1].brewery_type);
      });
  }, []);

  return (
    <div className="divCard">
      <div className="headcard">
        <div className="nomeBrewerie">
          <span><b>{brewerieName}</b></span>
        </div>
        <div>
          <img className="excluirIcon" src={excluirImage} />
        </div>
      </div>
      <div class="container">
        <div>
          <span>{brewerieStreet} </span>
        </div>
        <div>
          <span>{brewerieCidade} {brewerieState} - {brewerieCountry} </span>
        </div>
      </div>
      <table className="tags">
        <tr>
          <td>
            <img src={tipo} />
            <p className="teste">
              {brewerieTipo}
            </p>
          </td>
          <td>
            <img src={completo} />
            <p className="teste">
              {brewerieCep}
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <img src={telefone} />
            <p className="teste">
              {brewerieTelefone}
            </p>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Cards;