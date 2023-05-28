
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
import { getAuth , signInWithEmailAndPassword , sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

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
const analytics = getAnalytics(app);
const auth = getAuth();

var email = document.getElementById("email");
var password = document.getElementById("password");

window.login = function (e) {
  e.preventDefault();
  var obj = {
    email: email.value,
    password: password.value,
  };


  // signInWithEmailAndPassword(auth, obj.email, obj.password)
  //   .then(function (success) {
  //     alert("logined Successfully");
  //     var aaaa = success.user.uid;
  //     localStorage.setItem("uid", aaaa);
  //     console.log(aaaa);

  //     window.location.replace("MainPage.html");
  //     // localStorage.setItem(success,user,uid)
  //   })
  //   .catch(function (err) {
  //     alert("login error" + err);
  //   });

  signInWithEmailAndPassword(auth, obj.email, obj.password)
  .then((userCredential) => {
   
    const user = userCredential.user;
    window.location.replace("MainPage.html")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

  console.log(obj);
};
