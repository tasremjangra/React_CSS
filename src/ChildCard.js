import React , { Component } from 'react';

const ChildCard = ({ imagePath , title , sub1 , sub2 , sub3, deleteCard, number }) => {
	return(
			<div className="ChildCard">
				<div className="Gallery">
					<button  onClick={() => deleteCard(number)}>Remove</button>
	  				<a target="_blank" href="">
						<img src={imagePath} alt="Office Supplies" width="600" height="400"></img>
					</a>
					<div className="Desc">
						<a href="#"><h3 className="Fontsize">{title}</h3></a><br/>
						<a href="#"><p className="Text7">{sub1}</p></a>
						<a href="#"><p className="Text7">{sub2}</p></a>
						<a href="#"><p className="Text7">{sub3}</p></a>
						
					</div>
				</div>
			</div>
			
		);
	}


export default ChildCard;