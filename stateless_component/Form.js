import React , { Component } from 'react';

class Form extends Component{
	render(){
		return(
			<div className="Form">
				<form>
					Image Path: <input type="text"></input><br/>
					Title: <input type="text"></input><br/>
					Subtitle 1: <input type="text"></input><br/>
					Subtitle 2: <input type="text"></input><br/>
					Subtitle 3: <input type="text"></input><br/>
				</form>
			</div>
		)
	}
}

export default Form;