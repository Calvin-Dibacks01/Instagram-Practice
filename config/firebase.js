import firebase from 'firebase/app';
require('firebase/firestore')

const config = {
  apiKey: "AIzaSyAYoZycUp9exMjel_l6hSEm4HvRP7Mr404",
  authDomain: "instagram-clone-ad29f.firebaseapp.com",
  projectId: "instagram-clone-ad29f",
  storageBucket: "instagram-clone-ad29f.appspot.com",
  messagingSenderId: "964380860519",
  appId: "1:964380860519:web:5640bc5c0f918973e9f4c2",
  measurementId: "G-48BES1H82L"
};


firebase.initializeApp(config);

const db = firebase.firestore()

db.settings({
  timestampsInSnapshots: true
});

export default db;