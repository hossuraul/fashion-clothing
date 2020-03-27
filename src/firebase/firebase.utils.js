import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCUfe8J_8BH32glbRVlmlNy-pxcLuBQItk",
  authDomain: "fashion-db-820a4.firebaseapp.com",
  databaseURL: "https://fashion-db-820a4.firebaseio.com",
  projectId: "fashion-db-820a4",
  storageBucket: "fashion-db-820a4.appspot.com",
  messagingSenderId: "472265393766",
  appId: "1:472265393766:web:d676d7c23f56ab072a8fa7",
  measurementId: "G-2HB6C8H6NV"
}


firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;