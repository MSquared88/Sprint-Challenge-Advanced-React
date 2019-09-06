import React from 'react';
import './App.css';
import axios from 'axios'

//components
import PlayerCard from './components/PlayerCards'

import { Header, Card, } from 'semantic-ui-react'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      players: []

    }
  }
  
  componentDidMount() {
    axios
    .get('http://localhost:5000/api/players')
    .then(res => {
      // console.log(res.data)
      this.setState({
        players: res.data})
    })
  }

  render() {
    return (
      <div className="App">
        <Header as='h1'>First Header</Header>
        <Card.Group itemsPerRow={6}>
         {this.state.players.map(player => {
           return(
             <PlayerCard player= {player}/>
           )
         })}
         
        </Card.Group>
      </div>
    );
  }
}

export default App;
