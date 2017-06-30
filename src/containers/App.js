import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../App.css';

// COMPONENTS
import Home from '../components/Home';
import PageOne from '../components/PageOne';
import PageTwo from '../components/PageTwo';
import PageThree from '../components/PageThree';
import PageFour from '../components/PageFour';

import Input from '../components/Input';

// SUB-COMPONENT
import PageOnePop from '../components/PageOnePop';


class App extends Component {

  constructor() {
    super();
    this.state = {
      title: "Welcome",
    };
  }

  changeTitle(title) {
    this.setState({title});
  }




  render() {
    return (

      <BrowserRouter>

        <ReactCSSTransitionGroup 
              component="ul" 
              className="navbar-nav mr-auto"
              transitionName="slide"
              transitionEnterTimeout={500}
              transitionLeaveTimeout={500}
              transitionAppear={true}
              transitionAppearTimeout={500}
              >


            <div className="App container">

            <Input changeTitle={this.changeTitle.bind(this)} title={this.state.title} />

              <Route path="/"  exact component={Home} />
              <Route path="/pageone"  exact component={PageOne} />
              <Route path="/pagetwo"  exact component={PageTwo} />
              <Route path="/pagethree"  exact component={PageThree} />
              <Route path="/pagefour"  exact component={PageFour} />
              <Route path="/pageonepop"  exact component={PageOnePop} />

            </div>

        </ReactCSSTransitionGroup>

      </BrowserRouter>
    );
  }
}


const mapStateToProps = state => (
    {
      title:state
    }
  );




export default connect(mapStateToProps)(App);
