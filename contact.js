
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-analytics.js";

const firebaseConfig = {
    apiKey: "AIzaSyAFIqyWsBThBklFT8svjUUerXJgX7vJEWA",
    authDomain: "chama-e7e54.firebaseapp.com",
    projectId: "chama-e7e54",
    storageBucket: "chama-e7e54.appspot.com",
    messagingSenderId: "911475630973",
    appId: "1:911475630973:web:3eb17990d13a56b35a6214",
    measurementId: "G-HRXP9QSKZ8"
  };

// Initialize Firebase
var config = {
    apiKey: "AIzaSyD5bCyvYm5adElW2tllyfYH-CXnyQdUxVY",
    authDomain: "contactform-2086d.firebaseapp.com",
    databaseURL: "https://contactform-2086d.firebaseio.com",
    projectId: "contactform-2086d",
    storageBucket: "contactform-2086d.appspot.com",
    messagingSenderId: "35839015044"
  };
  firebase.initializeApp(config);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    //Get value
    var name = getInputVal('fname');
    var company = getInputVal('lname');
    var email = getInputVal('email');
    var message = getInputVal('message');
  
    // Save message
    saveMessage(fname, lname, email, message);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Function to get form value
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(fname, lname, email, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: fname,
      lname: lname,
      email: email,
      message: message
    });
  }
  