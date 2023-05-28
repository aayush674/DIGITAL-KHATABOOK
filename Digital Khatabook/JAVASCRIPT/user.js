
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
import { getDatabase ,ref , push ,set, onValue,onChildAdded,get,remove,update, onChildChanged, onChildRemoved } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
import {
    getAuth,
    signOut,
    onAuthStateChanged,
  } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyBRcKHJnard8B0iWp87ZiGemktBj765uHY",
authDomain: "digital-khatabook.firebaseapp.com",
projectId: "digital-khatabook",
storageBucket: "digital-khatabook.appspot.com",
messagingSenderId: "663617842018",
appId: "1:663617842018:web:08abfac3524b9a5b365a3b",
measurementId: "G-X5PKFSW6WB"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const database = getDatabase();


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
  const displayName = user.displayName;
  const email = user.email;
  const photoURL = user.photoURL;
  const emailVerified = user.emailVerified;

  const uid = user.uid;
}


function checkAuthentication() {
  onAuthStateChanged(auth, function (user) {
    if (user) {
      const uid = user.uid;
      console.log(uid);
      
    } else {
      
      window.location.href = "login.html";
    }
  });
}
checkAuthentication();