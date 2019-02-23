//src/firebase.js
import firebase from "firebase";

var config = {
    apiKey: "AIzaSyDgC-lyz94WzasW-HVAGKvo2voRrS5Af7I",
    authDomain: "final-project-49d53.firebaseapp.com",
    databaseURL: "https://final-project-49d53.firebaseio.com",
    projectId: "final-project-49d53",
    storageBucket: "final-project-49d53.appspot.com",
    messagingSenderId: "852367365186"
};
firebase.initializeApp(config);
export default firebase;
