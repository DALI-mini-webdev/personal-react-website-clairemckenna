import { render } from "@testing-library/react";

class Newfan extends Component{
    constructor(props){
      super(props)
      this.state = {fanStatus: ''};
  
    }
  

  changeState = () => {
    this.setState({fanStatus: 'I AM A FAN!'})
  }

  render() {
      return(

        <div>
            <h3>Are you a fan of the work?</h3>
            <button onClick = {this.changeState}>CLICK HERE!</button>
        </div>
      )
  }
}