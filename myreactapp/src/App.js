
import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Newfan from './Newfan'




function App() {

  return (
    <div className = "App">
      <Navbar />
    </div>
  )


const instabuttonFunction = () => {  //learned on stack overflow 
  <input type="button" value="button name" onclick="window.open('https://www.instagram.com/siennahendo/')" /> 
  console.log("Someone viewed Sienna's Instagram ")
};


const linkedinButtonFunction = () =>  {
  <input type="button" value="button name" onclick="window.open('https://www.linkedin.com/in/siennahenderson/')" /> 
  console.log("Someone viewed Sienna's LinkedIn")
}


  return (
    <div className= "App" >
      <head>
    <link rel= "stylesheet" href= "App.css"></link>
    <h1 className = "header"> Sienna Henderson's Photography Portfolio</h1>
</head>

<body id = "backgroundcolor">
    <h2> Meet the artist! </h2>

    <p className ="border" id = "backgroundcolor">
        Hello! My name is Sienna Henderson, I am currently a 23 at Dartmouth studying
        photography. For my first assignment, I took pictures of trees around my house.
        On this website, I will continually update and share my photographs so that my professor
        can view them all in one place. I hope you enjoy!! 

    </p>

    <h1>Project 1: Trees</h1>
    <img src="./pic1.jpg" width = "400" height = "500" />
    <img src="./pic2.JPG" width = "400" height = "500" />
    <img src="./pic3.jpg" width = "400" height = "500" />
    <img src="./pic4.jpg" width = "400" height = "500"/>

    <h3 className = "underline">You can find more information about Sienna through her various social media platforms
        linked below:</h3>

    <li> <button className = "social-media" onclick = {linkedinButtonFunction}>LinkedIn</button>
    </li>
    <li>
        <button className = "social-media" onclick = {instabuttonFunction}> Instagram</button>
    </li>

</body>

<h3>Click below if you are her fan!</h3>
<p>
  <Newfan />
  </p>

      
    </div>
  );
}

export default App;
