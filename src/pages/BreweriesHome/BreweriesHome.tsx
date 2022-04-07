import React, {useEffect, useState} from 'react';
import Header from '../../components/header/Header';
import Card from '../../components/cards/cards';
import './BreweriesHome.css';
import axios from 'axios';

function BreweriesHome () {

    const [array, setArray] = useState([]);
    const limite = [1,2,3,4,5,6]
  
    useEffect(() => {
  
      axios.get('https://api.openbrewerydb.org/breweries?by_state=new_york')
        .then((response) => {
          const brewerieChegando = response.data;
          console.log(brewerieChegando)
          setArray(brewerieChegando);
        });
    }, []);

    return (
    <div>
        <body className="total">
            <header className="title">
                <div>
                    <Header />
                </div>
            </header>
            <main>
                <section>
                    <div>
                        <div className="breweriesList">
                        {array.map((i) => (
                            <Card 
                            brewerie={i}
                            />
                        ))}
                        </div>
                    </div>
                </section>
            </main>
        </body>
    </div>
    );
};

export default BreweriesHome;