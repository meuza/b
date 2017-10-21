import React from 'react';
class Calculator extends React.Component{
	constructor(){
		super();
		this.state = {a: "",b: ""};
	}	
	setA(aa){
		const A1 = aa.target.value;
		this.setState({a:A1});
	}
	setB(bb){
		const B2 = bb.target.value;
		this.setState({b:B2});
	}
	render(){
	return(
		<div>
			<div> A : <input onChange={this.setA.bind(this)}/></div>
			<div> B : <input onChange={this.setB.bind(this)}/></div>
			<h1>SUM = {this.state.a+this.state.b}</h1>
		</div>
	);
	}
}
export default Calculator;