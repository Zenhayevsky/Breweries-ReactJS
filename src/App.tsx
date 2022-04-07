import React, { useEffect, useState } from 'react';
import bee from './images/bee.png';
import { Navigate, Route, Link } from 'react-router-dom';
import './App.css';

function App() {

  const [checked, setChecked] = useState(false);
  const [desabilitado, setDesabilitado] = useState(true)

  const [ nome, setNome ] = useState("");

  const armazenar = ( chave : any, valor: any ) => {
    localStorage.setItem(chave, valor);
    window.location.replace("/breweriesHome")
  }

  useEffect(() => {

    const tamanhoNoome = nome.length;
    const incluiEspaco = nome.includes(" ");

    (checked && nome && tamanhoNoome > 5 && incluiEspaco ) ? setDesabilitado(false) : setDesabilitado(true)
    // console.log(`mudou o estado ${checked} e o nome para ${nome}`)

  }, [checked, nome]);

  return (
    <div className="App">
      <header className="App-header">
        <section>
          <ul>
            <ol>
              <span>
                Please, enter your full name below
              </span>
            </ol>
            <ol>
              <span>
                Only alphabetical characters are accepted
              </span>
            </ol>
            <ol>
              <input value={nome} className="placeForName" placeholder="Full name" onChange={(e) => setNome(e.target.value)}></input>
            </ol>
            <ol className="sendData">
              <form>
                <input type="checkbox" checked={checked} onChange={e => setChecked(e.target.checked)} ></input>
                <span>Are you older than 18 years old?</span>
              </form>
            </ol>
            <ol className="sendData">
              <button onClick={() => armazenar('ls_nome', nome)} disabled={desabilitado} >Enter</button>
            </ol>
          </ul>
        </section>
        <img src={bee} alt="logo" className="Bee-Logo" />
      </header>
    </div>
  );
}

export default App;
