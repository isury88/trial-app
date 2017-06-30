import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';


// SUB-COMPONENT
import Image from './Image';


class Home extends Component {

	constructor() {
		super();
		this.state = {
			image: "",
		};
	}

	changeImage(image) {
		this.setState({image});
	}


  render() {

  	// setTimeout( () => {
  	// 	this.setState({image : "Rendering new Image"})
  	// }, 3000);

    return (

	 	<div className="Home container">
			 <h1>Home Page</h1>
				<nav className="navbar-brand">
				 	<ul className="navbar-nav mr-auto">
	                	<li className="nav-item listItem "><button className="btn btn-success"><Link to="/pageone">Page One</Link></button></li>
	                	<li className="nav-item listItem "><button className="btn btn-success"><Link to="/pagetwo">Page Two</Link></button></li>
	                	<li className="nav-item listItem "><button className="btn btn-success"><Link to="/pagethree">Page Three </Link></button></li>
	                	<li className="nav-item listItem "><button className="btn btn-success"><Link to="/pagefour">Page Four </Link></button></li>
	  					<li className="nav-item listItem "><button className="btn btn-success"><Link to="/pageonepop">Page One POP</Link></button></li>
	  					
	  					
	  					<Image  changeImage ={this.changeImage.bind(this)} image={this.state.image} />
	  					
					</ul>


            	</nav>



           
		</div>

		
            	
            

            

    );
  }
}

export default Home;