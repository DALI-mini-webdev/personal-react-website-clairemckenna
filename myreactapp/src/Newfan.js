import React, { Component } from 'react';
import { render } from "@testing-library/react";
import numberOfFans from "./numberOfFans";



class Newfan extends Component {
    constructor(props){
      super(props)
      this.state = { 
        number: 0
      };
    }
  

  changeState = (number) => {
    this.setState({
      number: this.state.number + 1
    });
  }


  badNews = (number) => {
    this.setState({
      number: this.state.number - 1 
    });
  }


  render() {
      return(

        <div>
            <h3>Are you a fan of the work?</h3>
            <li><numberOfFans onClick = {this.changeState}>YES CLICK HERE!</numberOfFans></li>
            
            <li><numberOfFans onClick = {this.badNews}>NO CLICK HERE!</numberOfFans></li>
        </div>
      )
  }
}

export default Newfan;