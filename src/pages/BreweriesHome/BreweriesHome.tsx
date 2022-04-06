import React, {useEffect, useState} from 'react';
import Header from '../../components/header/Header';
import Card from '../../components/cards/cards';
import './BreweriesHome.css';
import axios from 'axios';

function BreweriesHome () {

    const [brewerieStreet, setBrewerieStreet] = useState('');
    const [brewerieName, setBrewerieName] = useState('');
    const [brewerieCidade, setBrewerieCidade] = useState('');
    const [brewerieState, setBrewerieState] = useState('');
    const [brewerieCountry, setBrewerieCountry] = useState('');
    const [brewerieCep, setBrewerieCep] = useState('');
    const [brewerieTelefone, setBrewerieTelefone] = useState('');
    const [brewerieTipo, setBrewerieTipo] = useState('');
  
    const [array, setArray] = useState([]);
  
  
    useEffect (() => {
  
    }, [brewerieStreet, brewerieName, brewerieCidade, brewerieState, brewerieCountry, brewerieCep, brewerieTelefone,brewerieTipo]);
  
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
    <div>
        <body className="conteudo">
            <header className="title">
                <div>
                    <Header />
                </div>
            </header>
            <main>
                <section className="conteudo">
                    <div className="breweriesList">
                        <Card 
                        brewerieStreet={brewerieStreet}
                        brewerieName={brewerieName}
                        brewerieCidade={brewerieCidade}
                        brewerieState={brewerieState}
                        brewerieCountry={brewerieCountry} 
                        brewerieCep={brewerieCep}
                        brewerieTelefone={brewerieTelefone}
                        brewerieTipo={brewerieTipo}
                        />
                    </div>
                </section>
            </main>
        </body>
    </div>
    );
};

export default BreweriesHome;