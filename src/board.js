import React from 'react';
import Square from './square.js';

class Grid extends React.Component{
	constructor (props){
		super(props);
		this.state={square_values:Array(9).fill(null),};
		this.handleclick=this.handleclick.bind(this);
	}
	handleclick(i){
		let square_values=this.state.square_values.slice();
		square_values[i]='X';
		this.setState({square_values:square_values});
	
	}
	renderSquare(i)
	{
		return <Square value={this.state.square_values[i]} onClick={()=>this.handleclick(i)}/>
	}
	render(){
		return(
		<div>
		    <div className="gamerow">
		        {this.renderSquare(1)}
			    {this.renderSquare(2)}
			    {this.renderSquare(3)}
				
		    </div>
		    <div className="gamerow">
		        {this.renderSquare(4)}
		        {this.renderSquare(5)}
			   {this.renderSquare(6)}
		    </div>
		   <div className="gamerow">
	     	    {this.renderSquare(7)}
	    		{this.renderSquare(8)}
		    	{this.renderSquare(9)}
			</div>
		</div>
		);
	}
}
export default Grid;