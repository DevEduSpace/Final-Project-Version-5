import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { collection, query, where, getDocs } from "firebase/firestore";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
// import { collectionGroup } from 'firebase/firestore';

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCndC_DSQIuoODZr-KoNkatrhFl9_Y4zgs",
  authDomain: "eduspacr.firebaseapp.com",
  databaseURL: "https://eduspacr-default-rtdb.firebaseio.com",
  projectId: "eduspacr",
  storageBucket: "eduspacr.appspot.com",
  messagingSenderId: "184358744438",
  appId: "1:184358744438:web:3e72517e35e77991058a57",
  measurementId: "G-505WRY49WL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);
const db = getFirestore(app);


export { auth, db, app }

// checking if current user email is in stellenbosh one

// async function stelliesTest() {

//   const q = query(collection(db, "stellenbosch"), where("email", "==", "22552154@sun.ac.za"));

//   const snapshot = await getDocs(q);

//   // const stellies = collection('stellenbosch');
//   // const snapshot = await stellies.where('email', '==', "22552154@sun.ac.za").get();
//   if (snapshot.empty) {
//     console.log('No matching documents.');
//   }

//   snapshot.forEach(doc => {
//     console.log(doc.id, '=>', doc.data());
//   })
// };

// export { stelliesTest };