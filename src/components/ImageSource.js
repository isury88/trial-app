import React, { Component } from 'react';
import '../App.css';

// SUB-COMPONENT



class ImageSource extends Component {


  render() {
    return (
    	<img src={this.props.image} alt="" className="image" />
    );
  }
}

export default ImageSource;