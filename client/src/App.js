import React from 'react';
import './App.css';
import axios from 'axios'

//components
import PlayerCard from './components/PlayerCards';
import DarkModeBtn from './components/DarkModeBtn';

//styles
import {  Card, Checkbox } from 'semantic-ui-react';
import { Jumbotron, Button } from 'reactstrap';


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
        <Jumbotron style= {{background: 'linear-gradient(red, white, blue)'}}>
          <h1 className="display-3">United States women's national soccer team</h1>
          <hr className="my-2" />
          <p className="display-3">Dark Mode</p>
          <DarkModeBtn/>    
        </Jumbotron>
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
