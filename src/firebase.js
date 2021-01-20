import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyCm2t_mADfjxepVmGVkEA6Rav01MTEST",
    authDomain: "TEST-4fe15.firebaseapp.com",
    databaseURL: "https://companTEST-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "companion-4fe15",
    storageBucket: "companion-4fe15.appspot.com",
    messagingSenderId: "878260TEST599",
    appId: "1:878260412599:web:543613a3908a48dTEST32",
    measurementId: "G-TWNPJC35DN"
  };
  // Initialize Firebase
  firebase.initializeApp(config);
  
  export default firebase;
