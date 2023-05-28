import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAuth , createUserWithEmailAndPassword , sendEmailVerification } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBRcKHJnard8B0iWp87ZiGemktBj765uHY",
  authDomain: "digital-khatabook.firebaseapp.com",
  projectId: "digital-khatabook",
  storageBucket: "digital-khatabook.appspot.com",
  messagingSenderId: "663617842018",
  appId: "1:663617842018:web:08abfac3524b9a5b365a3b",
  measurementId: "G-X5PKFSW6WB",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

var fullName = document.getElementById("fullname");
var email = document.getElementById("email");
var password = document.getElementById("password");
var copassword = document.getElementById("copassword");


window.signup = function (e) {
  if (password)
    if (fullName.value == "" || email.value == "" || password.value == "") {
      alert("All Field Are Required");
    }
  if (password.value == copassword.value) {
  } 
  else 
  {
    alert("Password Confirmation is Wrong");
    return false;
  }

  e.preventDefault();
  var obj = {
    fullname: fullName.value,
    email: email.value,
    password: password.value,
  };

  createUserWithEmailAndPassword(auth, obj.email, obj.password)
    .then(function (success) 
    {
      window.location.replace("login.html");
      
    })
    .catch(function (err) 
    {
      alert("Error in " + err);
    });
};
