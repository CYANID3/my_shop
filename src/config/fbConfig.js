import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage'

const config = {
  apiKey: "AIzaSyC8kf0ONX2Eou_B8nJKzGs-PamfkBR3acc",
  authDomain: "myapp-53e2c.firebaseapp.com",
  databaseURL: "https://myapp-53e2c.firebaseio.com",
  projectId: "myapp-53e2c",
  storageBucket: "myapp-53e2c.appspot.com",
  messagingSenderId: "572926455895",
  appId: "1:572926455895:web:4a5dc80d0cd6b914ca7312",
  measurementId: "G-DN4WK5DVZV"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();

export default firebase;