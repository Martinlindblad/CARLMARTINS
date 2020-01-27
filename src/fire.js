import firebase from "firebase"


const firebaseConfig = {
    apiKey: "AIzaSyD5SaqiRye3_AYcIH5mcWtFWTZgxC7bCOs",
    authDomain: "carlmartins-56d39.firebaseapp.com",
    databaseURL: "https://carlmartins-56d39.firebaseio.com",
    projectId: "carlmartins-56d39",
    storageBucket: "carlmartins-56d39.appspot.com",
    messagingSenderId: "453284224767",
    appId: "1:453284224767:web:2d8a80cfc75fe18e91b6ca",
    measurementId: "G-E8YSK8LNRF"
  };
  var fire = firebase.initializeApp(firebaseConfig);
  export default fire;