import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyDmKH6sFWCfApFdyhUctu7BVXfWYXnb-gE",
  authDomain: "tiktok-clone-e03db.firebaseapp.com",
  databaseURL: "https://tiktok-clone-e03db.firebaseio.com",
  projectId: "tiktok-clone-e03db",
  storageBucket: "tiktok-clone-e03db.appspot.com",
  messagingSenderId: "861111621532",
  appId: "1:861111621532:web:3ff843f977ed6b446a1a59",
  measurementId: "G-4TJCS5VYLC"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db