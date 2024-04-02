import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyBthx2XBGZwXwJCZbifawZLax3lIFpEHTU",
  authDomain: "my-first-gift.firebaseapp.com",
  projectId: "my-first-gift",
  storageBucket: "my-first-gift.appspot.com",
  messagingSenderId: "728093400437",
  appId: "1:728093400437:web:5dcfa331ada3e1b71c473c"
};


firebase.initializeApp(firebaseConfig);
export default firebase;