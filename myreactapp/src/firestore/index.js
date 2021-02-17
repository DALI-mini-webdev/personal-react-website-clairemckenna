import firebase from 'firebase';
import 'firebase/firestore';


firebase.initializeApp({


    apiKey: "AIzaSyD3qYawxTIs7ewkyB7dYnEs-HdY09wfw3g",
    authDomain: "photowebsite-a09e1.firebaseapp.com",
    projectId: "photowebsite-a09e1",
    storageBucket: "photowebsite-a09e1.appspot.com",
    messagingSenderId: "863899599031",
    appId: "1:863899599031:web:607a6b0bcb8fdc3cb20d32",
    measurementId: "G-8KQ8Q08WZ5"
  });
  
  const db = firebase.firestore();

  export default{
      firebase,db
  }
