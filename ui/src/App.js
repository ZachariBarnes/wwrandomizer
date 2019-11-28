import React from 'react';
import InputForms from './components/InputForms'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App" >
        <div className="header">
          <p>Werewolf Randomizer </p>
        </div>
        <div className="body">

          <div className="topic">Use this tool in order to generate randomized roles for your werewolf or Mafia game.</div>
          <div className="description">
            This tool will also fill remaining role slots with PJVs (Plain Jane Villagers) if the number
              of provided roles is less than the number or provided players.
              Additonally this tool can calculate and generate an appropriate number of BGs (Bad Guys)
              for your game if the option is selected.
        </div>

        </div>
        <InputForms />
        <br />
        <br />
        <br />
        <br />
        <div className="footer">
          For feature requests or feedback please contact Zachari Barnes at ZachariBarnes@yahoo.com
          <br />
          © 2019 Zachari Barnes.  All rights reserved.
        </div>
      </div >
    );
  }
}


export default App;
