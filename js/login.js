import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js"
const firebaseConfig = {
    apiKey: "AIzaSyDDuZBEJ4TXMtps1cMRpFtIBK1xh9ryBJ8",
    authDomain: "property-listings-421017.firebaseapp.com",
    projectId: "property-listings-421017",
    storageBucket: "property-listings-421017.appspot.com",
    messagingSenderId: "698097444738",
    appId: "1:698097444738:web:49d33d666c99983515d19b",
    measurementId: "G-K1Y1H9J1Z5"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth();
auth.languageCode = 'en';
const provider = new GoogleAuthProvider();
const googleLogin = document.getElementById("google-login-btn");
googleLogin.addEventListener("click", function () {
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const user = result.user;
      console.log(user);
      window.location.href = "../index.html"
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
})




