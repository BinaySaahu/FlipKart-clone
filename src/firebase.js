import firebase from 'firebase';


const config = {
  apiKey: "AIzaSyAFg-5r9UApiiyB5rCjpshJxikQTvV0m6g",
  authDomain: "flipkart-clone-caedd.firebaseapp.com",
  projectId: "flipkart-clone-caedd",
  storageBucket: "flipkart-clone-caedd.appspot.com",
  messagingSenderId: "547358822477",
  appId: "1:547358822477:web:59e2cbd95194e1a0a78c04",
  measurementId: "G-DZLE0F28BG"
};
firebase.initializeApp(config)
var auth = firebase.auth();

export {firebase,auth};