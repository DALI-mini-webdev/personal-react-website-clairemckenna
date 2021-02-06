import { render } from "@testing-library/react";
import numberOfFans from "../numberOfFans";

class Newfan extends Component{
    constructor(props){
      super(props)
      this.state = {updated: false};
      this.state = {number : 0};
    }
  

  changeState = () => {
    this.setState({number: number + 1})
  }


  badNews = () => {
    this.setState({number: number -1 })
  }

  changeNumber = () => {
    thiis.setState({updated: true})
  }



  render() {
      return(

        <div>
            <h3>Are you a fan of the work?</h3>
            <numberOfFans onClick = {this.changeState, this.changeNumber}>YES CLICK HERE!</numberOfFans>
            <numberOfFans onClick = {this.badNews, this.changeNumber}>NO CLICK HERE!</numberOfFans>
        </div>
      )
  }
}

export default Newfan;