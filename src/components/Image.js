import React, { Component } from 'react';
import '../App.css';

// SUB-COMPONENT
import ImageSource from './ImageSource';




class Image extends Component {

  handleClick(e) {

    const image = "https://lh4.ggpht.com/wKrDLLmmxjfRG2-E-k5L5BUuHWpCOe4lWRF7oVs1Gzdn5e5yvr8fj-ORTlBF43U47yI=w300";
    this.props.changeImage(image);
  }

  secondHandleClick(e) {

    const image = "";
    this.props.changeImage(image);
  }


  render() {

      console.log(this.props);

    return (

      <div className = "image-box">
        <button className="btn btn-danger" onClick={this.handleClick.bind(this)} >Show Image</button>
        <button className="btn btn-danger" onClick={this.secondHandleClick.bind(this)} >Hide Image</button>
        <ImageSource image={this.props.image}/>
      </div>

    );
  }
}

export default Image;