 import firebase from "firebase";
 
const firebaseConfig = {
  apiKey: "AIzaSyAE77aZhe22JoV6S6obAE7Ebo25382JWxc",
  authDomain: "project-40-b401f.firebaseapp.com",
  databaseURL: "https://project-40-b401f-default-rtdb.firebaseio.com",
  projectId: "project-40-b401f",
  storageBucket: "project-40-b401f.appspot.com",
  messagingSenderId: "548308444641",
  appId: "1:548308444641:web:d6b63fe19c8c72ebab5ea0"
};
let app = firebase.initializeApp(firebaseConfig);

export default  app.database()

  