import { useEffect, useState } from 'react';
import bee from './images/bee.png';
import { Navigate, Route, Link } from 'react-router-dom';
import './App.css';

function App() {

  const [checked, setChecked] = useState(false);
  const [filled, setFilled] = useState("");
  const [desabilitado, setDesabilitado] = useState(true)

  useEffect(() => {

    (checked && filled) ? setDesabilitado(false) : setDesabilitado(true)

  }, [checked, filled]);

  useEffect(() => {
    console.log(`mudou o estado ${checked} e o nome para ${filled}`)
  }, [checked, filled]);

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
              <input className="placeForName" placeholder="Full name" onChange={e => setFilled(e.target.value)}></input>
            </ol>
            <ol className="sendData">
              <form>
                <input type="checkbox" checked={checked} onChange={e => setChecked(e.target.checked)} ></input>
                <span>Are you older than 18 years old?</span>
              </form>
            </ol>
            <ol className="sendData">
              <button onClick={() => window.location.replace("/breweriesHome")} disabled={desabilitado} >Enter</button>
            </ol>
          </ul>
        </section>
        <img src={bee} alt="logo" className="Bee-Logo" />
      </header>
    </div>
  );
}

export default App;
