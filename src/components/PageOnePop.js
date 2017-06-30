import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';



class PageOnePop extends Component {
  render() {
    return (
       <div className="Home PageLayout container">
			<li className="nav-item listItem btn-x "><button className="btn btn-danger"><Link to="/pageone">X</Link></button></li>
			<h1>PAGE ONE First POPUP</h1>
	    </div>
    );
  }
}

export default PageOnePop;