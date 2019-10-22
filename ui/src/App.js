import React from 'react';
import InputForms from './components/InputForms'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App" >
        <header className="header">
          <p>Werewolf Randomizer </p>
        </header>
        <body className="body">
          <p>
            <div className="topic">Use this tool in order to generate Randomized roles for your werewolf or Mafia game.</div>
            <div className="description">
              This tool will also fill remaining slots with PJVs (Plain Jane Villages) if the number
                of provided roles is less than the number or provided players
                Additonally this tool can caluclate and generate an appropriate number of BG (Bad Guys)
                for you game if given the proper parameters
        </div>
          </p>
        </body>
        <InputForms />
      </div >
    );
  }
}


export default App;
