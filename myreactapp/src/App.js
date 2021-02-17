
import { render } from '@testing-library/react';
import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import Newfan from './Newfan.js'
import './App.css';
import firebase from './firebase/index'
import funFact from './components/funFact'


function App() {

  console.log(firebase);
  console.log(firebase.db);

const instabuttonFunction = () => {  //learned on stack overflow 
  <input type="button" value="button name" onClick="window.open('https://www.instagram.com/siennahendo/')" /> 
  console.log("Someone viewed Sienna's Instagram ");

}


const linkedinButtonFunction = () =>  {
  <input type="button" value="button name" onClick="window.open('https://www.linkedin.com/in/siennahenderson/')" /> 
  console.log("Someone viewed Sienna's LinkedIn");
  
}



return(
    <div className= "App" >
      <Navbar /> 
      
      <h1> <link rel= "stylesheet" href= "App.css"></link> 
    <h1 className = "header"> Sienna Henderson's Photography Portfolio</h1>
</h1>

<div id = "backgroundcolor">
    <h2> Meet the artist! </h2>

    <p className ="border" id = "backgroundcolor">
        Hello! My name is Sienna Henderson, I am currently a 23 at Dartmouth studying
        photography. For my first assignment, I took pictures of trees around my house.
        On this website, I will continually update and share my photographs so that my professor
        can view them all in one place. I hope you enjoy!! 

    </p>

    <h1>Project 1: Trees</h1>
    <img className = "image-height" src="./pic1.jpg"  />
    <img className = "image-height" src="./pic2.JPG"  />
    <img className = "image-height" src="./pic3.jpg" />
    <img className = "image-height" src="./pic4.jpg" />

    <h3 className = "underline" >You can find more information about Sienna through her various social media platforms
        linked below:</h3>

    <li> <button className = "social-media" onClick = {linkedinButtonFunction}>LinkedIn</button>
    </li>
    <li>
        <button className = "social-media" onClick = {instabuttonFunction}> Instagram</button>
    </li>

</div>

<p>
  <Newfan />
  </p>

  <funFact />


      
    </div>);
} 
  
  



export default App;
