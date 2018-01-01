import React, { Component } from "react";
import { customersURL } from "../../apiRoutes";

import "./customers.css";

class Customers extends Component {
	constructor(props) {
		super(props);
    
		this.state = {
			customers: []
		};
	}
    
	componentDidMount() {
		fetch(customersURL)
			.then(res => res.json())
			.then(customers => this.setState({customers}, () => console.log("Customers successfully fetched...", customers)));
	}

	render() {
		return (
			<div>
				<h2>Customers</h2>
				<ul>
					{this.state.customers.map(customer => 
						<li key={customer.id}>{ customer.firstName } { customer.lastName }</li>
					)}
				</ul>
			</div>
		);
	}
}

export default Customers;
