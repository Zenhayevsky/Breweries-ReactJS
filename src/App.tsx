import React from 'react';
import bee from './images/bee.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
          <div>
            <p>
              Please, enter your full name below
            </p>
          </div>
          <div>
            <p>
              Only alphabetical characters are accepted
            </p>
          </div>
        </section>
        <img src={bee} alt="logo" className="Bee-Logo"/>
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
