import React from 'react';
//import Grid from './board.js';

 class Square extends React.Component{
	 
	 render(){
		 return(
	              <button className= "square" onClick={()=>this.props.onClick()}>{this.props.value}</button>
	          );
	 }
 }
export default Square;