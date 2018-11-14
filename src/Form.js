import React , { Component } from 'react';
import ChildCard from './ChildCard'

class Form extends Component{

	constructor(props){
		super(props);
		 this.state= {products : [{title:"Offices & Applyies", sub1:"Writting Supplyies", sub2:"Calenders & Planners",
		 sub3:"Offices Basic",  path:"https://assets.staples-static.com/sbd/cre/products/home-banners/popularcategory/images/dg17721_finalofficesupplies_380x229.png"}]
	}	
	}

	addToCard = () => {
		
		const title = this.refs.title.value;
		const sub1 = this.refs.sub1.value;
		const sub2 = this.refs.sub2.value;
		const sub3 = this.refs.sub3.value;
		const path = this.refs.path.value;

		const tempProducts = this.state.products;
		tempProducts.push({title, sub1, sub2, sub3, path });
		this.setState({products: tempProducts});
	
	}

	deleteCard = (number) => {
		const tempProducts = this.state.products;
		delete tempProducts[number];
		this.setState({products: tempProducts});
		
	}

	render(){
		return(
			<div className="Form">
				<div>
					Title: <input type="text" ref="title"></input><br/>
					imagePath: <input type="text" ref="path"></input><br/>
					Subtitle 1: <input type="text" ref="sub1"></input><br/>
					Subtitle 2: <input type="text" ref="sub2"></input><br/>
					Subtitle 3: <input type="text" ref="sub3"></input><br/><br/>
					<button onClick={this.addToCard} >ADD Another Card</button>
				</div>
					 {this.state.products? this.state.products.map((abc, number)=> (
                 		<ChildCard imagePath={abc.path} title={abc.title} sub1={abc.sub1}
                 		 sub2={abc.sub2} sub3={abc.sub3} deleteCard= {this.deleteCard}
                 		 number={number}/>
                   		)) :''}
					
			
	    	</div>
		)
	}
}

export default Form;