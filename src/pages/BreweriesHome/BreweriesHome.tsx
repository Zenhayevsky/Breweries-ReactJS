import React from 'react';
import Header from '../../components/header/Header';
import Card from '../../components/cards/cards';
import './BreweriesHome.css';

const BreweriesHome = () => (
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
                        <Card />
                    </div>
                </section>
            </main>
        </body>
    </div>
);

export default BreweriesHome;