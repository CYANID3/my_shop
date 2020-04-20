import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyCOwAWjs6m2wma9aX4kgGN0s9rLjNrnpsA",
  authDomain: "shop-13dce.firebaseapp.com",
  databaseURL: "https://shop-13dce.firebaseio.com",
  projectId: "shop-13dce",
  storageBucket: "shop-13dce.appspot.com",
  messagingSenderId: "1096517239723",
  appId: "1:1096517239723:web:1ab89462ba304ea9ca08ee",
  measurementId: "G-LNWCP0J9L0"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export default firebase;