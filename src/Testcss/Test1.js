import React, {Component} from 'react';
import  './TestCss.css';

const Test1 = () =>{
	return(
		<div className="Test1">
			<h1 className="head">This is Test For CSS In React </h1>
			<h2 id="head2">This heading is use for border</h2>
			<p className="p1">This paragraph is use to margin</p> 
			<p className="p2">This paragraph is use to pdding</p> 

			<div className="di">
			<h1> This block element has height 200 px and widht is 100%</h1> 
			</div>
		</div>
	);
}

export default Test1;