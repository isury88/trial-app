import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../App.css';

// SUB-COMPONENT


class PageOne extends Component {

  render() {
    return (


      <div className="Home PageLayout container">

            <ReactCSSTransitionGroup 
                component="ul" 
                className="PageOne  container"
                transitionName="slide"
                transitionEnterTimeout={1000}
                transitionLeaveTimeout={1000}
                transitionAppear={true}
                transitionAppearTimeout={1000}
                >
                  <li className="nav-item listItem btn-x "><button className="btn btn-danger"><Link to="/">X</Link></button></li>
                    
                  <h1>PAGE ONE</h1>
            </ReactCSSTransitionGroup>

            

          <li className="nav-item listItem nextPage "><button className="btn btn-success"><Link to="/pagetwo">Go To Page 2</Link></button></li>
          <li className="nav-item listItem prevPage "><button className="btn btn-success"><Link to="/">Go Home</Link></button></li>
          <li className="nav-item listItem btn-x "><button className="btn btn-danger"><Link to="/pageonepop">POPUP</Link></button></li>

      </div>

    );
  }
}

export default PageOne;