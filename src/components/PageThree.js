import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../App.css';

class PageThree extends Component {
  render() {
    return (

    <div className="Home PageLayout container">


	       <ReactCSSTransitionGroup 
          component="ul" 
          className="PageThree container"
          transitionName="slide"
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={1000}
          transitionAppear={true}
          transitionAppearTimeout={1000}
          >
            <li className="nav-item listItem btn-x "><button className="btn btn-danger"><Link to="/">X</Link></button></li>

	      	  <h1>PAGE THREE</h1>

          </ReactCSSTransitionGroup>

                <li className="nav-item listItem nextPage "><button className="btn btn-success"><Link to="/pagefour">Go To Page 4</Link></button></li>
                <li className="nav-item listItem prevPage "><button className="btn btn-success"> <Link to="/pagetwo">Go to Page 2 </Link></button></li>
                <li className="nav-item listItem homePage "><button className="btn btn-success"><Link to="/">Go Home</Link></button></li>

		  </div>

    );
  }
}

export default PageThree;