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
				<h1> This block element  has1 height 200 px and widht is 100%</h1>
			</div> 
			<div className="outline">
				<p>This is use for otline </p>
			</div>	
			<div className="Justfy">
				In my younger and more vulnerable years my father gave me some advice that
				 I've been turning over in my mind ever since. 'Whenever you feel like criticizing
				  anyone,' he told me, 'just remember that all the people in this world haven't had 
				  the advantages that you've had.'
			</div>
			<div className="Shadow">
				<h1>This is Shadow of the Text</h1>
			</div>
			<div className="fontSize">
				<h1>This is Times New Roman serif</h1>
				<h2 id="tr"> This is a paragraph, shown in the Arial font</h2>
			</div>

			<div className="icons">
				<a href="#" className="fa fa-facebook"></a>
				<a href="#" className="fa fa-twitter"></a>
				<a href="#" className="fa fa-google"></a>
				<a href="#" className="fa fa-linkedin"></a>
				<a href="#" className="fa fa-youtube"></a>
				<a href="#" className="fa fa-instagram"></a>
				<a href="#" className="fa fa-pinterest"></a>
				<a href="#" className="fa fa-snapchat-ghost"></a>
				<a href="#" className="fa fa-skype"></a>
				<a href="#" className="fa fa-android"></a>
			</div>
		</div>
	);
}

export default Test1;