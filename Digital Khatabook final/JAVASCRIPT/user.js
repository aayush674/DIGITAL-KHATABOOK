// code of main too 
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
import { getDatabase ,ref , push ,set, onValue,onChildAdded,get,remove,update, onChildChanged, onChildRemoved } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
import {
    getAuth,
    signOut,
    onAuthStateChanged,
  } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRcKHJnard8B0iWp87ZiGemktBj765uHY",
authDomain: "digital-khatabook.firebaseapp.com",
projectId: "digital-khatabook",
storageBucket: "digital-khatabook.appspot.com",
messagingSenderId: "663617842018",
appId: "1:663617842018:web:08abfac3524b9a5b365a3b",
measurementId: "G-X5PKFSW6WB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const database = getDatabase();

var inp = document.getElementById("Name")
var descri= document.getElementById("Description") 
var status = document.getElementById("Status")




window.logout = function () {
  signOut(auth)
    .then(function () {
      
      window.location.href = "login.html";
    })
    .catch(function (err) {
      console.log(err);
    });
};
const user = auth.currentUser;
if (user !== null) {
  // The user object has basic properties such as display name, email, etc.
  const displayName = user.displayName;
  const email = user.email;
  const photoURL = user.photoURL;
  const emailVerified = user.emailVerified;

  // The user's ID, unique to the Firebase project. Do NOT use
  // this value to authenticate with your backend server, if
  // you have one. Use User.getToken() instead.
  const uid = user.uid;
}


// function logout(){
//   firebaseConfig.auth.signOut()
// }
function checkAuthentication() {
  onAuthStateChanged(auth, function (user) {
    if (user) {
      const uid = user.uid;
      console.log(uid);
      // ...
    } else {
      // User is signed out
      // ...
      window.location.href = "login.html";
    }
  });
}
checkAuthentication();