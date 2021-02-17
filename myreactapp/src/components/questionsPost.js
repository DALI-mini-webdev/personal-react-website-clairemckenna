import React, {Component} from 'react';
import Firebase from '../firebase/index';



class questionsPost extends Component {
    constructor(props) {
      super(props);
      this.state = {
        editing: false,
        newQuestion: '',
      };

    }

    render(){
        return(
            <div>
            <p>{this.props.question}</p>
        </div>
        )
        
    }

}

export default questionsPost;