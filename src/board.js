import React from 'react';
import Square from './square.js';

class Grid extends React.Component{
	constructor (props){
		super(props);
		this.state={square_values:Array(9).fill(null),  x_index:true,};
		
	}
	handleclick(i){
		let square_values=this.state.square_values.slice();
		if(square_values[i]||this.checkWinner(square_values)) return;
		square_values[i]= this.state.x_index?'X':'O';
		this.setState({square_values:square_values, x_index:!this.state.x_index});
	
	}
	
	createGrid=()=>{
		let Grid =[];
	    for(let j=0;j<3;j++){
		 	let row=[];
		    for(let i=0;i<3;i++){ 
			    let k= 3*j+i;
			    row.push(<Square value={this.state.square_values[k]} onClick={()=>this.handleclick(k)}/>);
			    }
		    Grid.push(<div className="gamerow">{row}</div>);
		}
		return(Grid);
    }
	checkWinner(squares){
	let lines=[[0,1,2],
	           [3,4,5],
			   [6,7,8],
			   [1,4,7],
			   [2,5,8],
			   [0,3,6],
			   [0,4,8],
			   [2,4,6]
			  ];
    for( let i=0;i<lines.length;i++){
	    let [a,b,c]=lines[i];
		if(squares[a]&& squares[a]===squares[b] && squares[a]===squares[c])
		{
			return squares[a];
		}
	 }
	 return null;
	}
	render(){
	    let message= (this.checkWinner(this.state.square_values))? ('winner:' + this.checkWinner(this.state.square_values)):('Next player:' + (this.state.x_index ? 'X':'O'));
		return(
		    
		     <div>
			   <div className="message">{message}</div>
		       {this.createGrid()}
			</div>
		);
		
	}
}
export default Grid;