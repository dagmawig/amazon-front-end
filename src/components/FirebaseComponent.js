import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBfBAO70hK-Wv0ck-56k4vAKCKBTNc94Vo",
    authDomain: "front-end-51fa8.firebaseapp.com",
    projectId: "front-end-51fa8",
    storageBucket: "front-end-51fa8.appspot.com",
    messagingSenderId: "904734100102",
    appId: "1:904734100102:web:9700cd6f6ef28cec7c1f07",
    measurementId: "G-99QRNR0EEM"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  export { db, auth};