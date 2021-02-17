import React, {Component} from 'react';
import firebase from '../firebase/index';
import questions from './questionsPost';
import './styles.css'



class funFact extends Component{
    constructor(props){
        super(props);
        this.state = {
            allQs: [],
            question: '',
            id: 0
        }
    }

    newQuestionFunction = (event) => {
        this.setState({
            question: event.target.value})
        }
    

    saveNewQuestion = () =>{
        firebase.db.collection('questions').add
    ({
        question: this.state.question,
        id: this.state.id
    }).then(ref => {
        console.log('document reference id', ref.id);
        this.setState({
            id: this.state.id +1
        }).catch((e) => {
            console.log(e);
        })
    })
}
    fetchQuestions = () => {
        const FAQ = [];
        firebase.db.collection('questions').get()
        .then(query => {
            query.forEach(doc => {
                console.log(doc.data());
                FAQ.push(doc.data);
            })
        }).then(() => {
            this.setState({
                allQs: FAQ
            })
        }).catch((e) => {
            console.log(e);
        })
    }


    render(){
        const q = this.state.allQs.map((question) => {
            <questionsPost
                newQuestion = {funFact.question}
            />
        })
        

        return(
            <div>

                <p>Ask a Question Here:</p>
                <input type ="text" value ={this.state.question} onChange={this.newQuestionFunction}/>

                <button onClick = {this.saveNewQuestion}> Submit! </button>

                <div className = 'questionStyle'>
                    <button onClick = {this.fetchQuestions}>Show the FAQs</button>
                    {allQs}
                </div>

            </div>
        )
    }
}


    export default funFact;


