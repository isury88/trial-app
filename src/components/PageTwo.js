import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../App.css';

class PageTwo extends Component {
  render() {
    return (

      <div className="Home PageLayout container">


	     <ReactCSSTransitionGroup 
          component="ul" 
          className="PageTwo container"
          transitionName="slide"
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={1000}
          transitionAppear={true}
          transitionAppearTimeout={1000}
          >
          <li className="nav-item listItem btn-x "><button className="btn btn-danger"><Link to="/">X</Link></button></li>   
          <h1>PAGE TWO</h1>
        </ReactCSSTransitionGroup>
	      	
         <li className="nav-item listItem nextPage "><button className="btn btn-success"><Link to="/pagethree">Go To Page 3 </Link></button></li>
         <li className="nav-item listItem prevPage "><button className="btn btn-success"><Link to="/pageone">Go to Page 1</Link></button></li>
         <li className="nav-item listItem homePage "><button className="btn btn-success"><Link to="/">Go Home </Link></button></li>

     </div>

    );
  }
}

export default PageTwo;