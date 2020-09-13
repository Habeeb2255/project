import React from "react";
import { NavLink } from 'react-router-dom';

function Menue(props){
	if (! props.show) return <></>
	return <nav>
	<ul id="MenuItems">
		<li><NavLink to="/">Home</NavLink></li>
		<li><NavLink to="/product">Products</NavLink></li>
		<li><NavLink to="/about">About</NavLink></li>
		<li><NavLink to="/contact">Contact</NavLink></li>
		<li><button className='btn' onClick={props.logOutEvent}>log Out</button></li>
	</ul>
</nav>
}


class Navbar extends React.Component {
	constructor(props){
		super(props)
		this.state={
			show: true
		}
	}

	toogle = () => {
		this.setState({
			show: !this.state.show
		})
	}


	render() {


		return (
			<>
				<div className="container">
					<div className="navbar">
						<div className="logo">
							<NavLink to="/"><img alt='' src="img/habeeb1.png" width="125px"></img></NavLink>
						</div>
						<Menue show={this.state.show} logOutEvent={this.props.logOutEvent}/>
						<NavLink to="/card"><img alt='' src="img/cart.png" width="30px" height="30px"></img></NavLink>
						<img alt='' src="img/menu.png" className="menu-icon"  onClick={this.toogle}></img>
					</div>
				</div>

			</>
		)
	}
}

export default Navbar;