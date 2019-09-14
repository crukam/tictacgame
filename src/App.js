import React from 'react';
import logo from './logo.svg';
import './App.css';
//import './game.html';
import Grid from './board.js';

class App extends  React.Component {
	render(){
		return(
		         <div className="game-board">
		            <Grid/>
		        </div>
			 );
	}
}



export default App;
