import React from 'react';
import Square from './square.js';

class Grid extends React.Component{
	renderSquare(i)
	{
		return <Square value={i}/>
	}
	render(){
		return(
		<div>
		    <div className="gamerow">
		        {this.renderSquare(1)}
			    {this.renderSquare(2)}
			    {this.renderSquare(3)}
				<b/>
		    </div>
		    <div className="gamerow">
		        {this.renderSquare(4)}
		        {this.renderSquare(5)}
			   {this.renderSquare(6)}
			   <b/>
		   </div>
		   <div className="gamerow">
	     	    {this.renderSquare(7)}
	    		{this.renderSquare(8)}
		    	{this.renderSquare(9)}
				<b/>
		    </div>
		</div>
		);
	}
}
export default Grid;