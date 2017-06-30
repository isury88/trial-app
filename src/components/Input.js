import React, { Component } from 'react';
import '../App.css';

// SUB-COMPONENT

import Title from './Title';


class Input extends Component {

  handleChange(e) {
    const title = e.target.value;
    this.props.changeTitle(title);
  }

  render() {
    return (

      <div>
        <Title  title={this.props.title} />
        <input  placeholder="Change Title" onChange={this.handleChange.bind(this)} />
      </div>

    );
  }
}

export default Input;