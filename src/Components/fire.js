
import  firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";


var firebaseConfig = {
    
    apiKey: "AIzaSyCSc1HggNJTlr_2sY9E_KFHXchAdQkzxFs",
    authDomain: "auth-parking.firebaseapp.com",
    projectId: "auth-parking",
    storageBucket: "auth-parking.appspot.com",
    messagingSenderId: "303659300063",
    appId: "1:303659300063:web:c39f38fc6beb946965656a"
};
const fire = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
export  {auth, db, storage};

export default fire;