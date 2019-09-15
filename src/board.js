import React from 'react';
import Square from './square.js';

class Grid extends React.Component{
	constructor (props){
		super(props);
		this.state={square_values:Array(9).fill(null),  x_index:true,};
		
	}
	handleclick(i){
		let square_values=this.state.square_values.slice();
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
	render(){
		return(
		     <div>
		       {this.createGrid()}
			</div>
		);
		
	}
}
export default Grid;