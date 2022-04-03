import React from 'react';
import bee from './Images/bee.png';
import './App.css';

function App() {
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
              <input className="placeForName" placeholder="Full name"></input>
            </ol>
            <ol className="sendData">
              <input type="checkbox"></input>
              <span>Are you older than 18 years old?</span>
            </ol>
            <ol className="sendData">
              <button>Enter</button>
            </ol>
          </ul>
        </section>
        <img src={bee} alt="logo" className="Bee-Logo" />
        {/* <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
