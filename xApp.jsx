import React, { Component } from 'react'

class Welcome extends Component {
    state = {
      searchString: '',
      pokemonsIds: [],
      error: null
    }
  
    render() {
  
      return (
        <div className="welcome">
            <div className="instructions">
                <h1> Werewolf Randomizer </h1>
                <h3> Use this tool in order to generate Randomized roles for your werewolf or Mafia game.</h3>
                    <p><br>This tool will also fill remaining slots with PJVs (Plain Jane Villages) if the number
                     of provided roles is less than the number or provided players </br>
                     Additonally this tool can caluclate and generate an appropriate number of BG (Bad Guys) 
                     for you game if given the proper parameters</p>
          </div>
        </div>
      )
    }
  }
  
  export default Welcome