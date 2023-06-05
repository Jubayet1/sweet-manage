import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCZg5ArQztG2wenvsnOHg9hhfD_Svx9c2o",
  authDomain: "practice-7520a.firebaseapp.com",
  databaseURL: "https://practice-7520a-default-rtdb.firebaseio.com",
  projectId: "practice-7520a",
  storageBucket: "practice-7520a.appspot.com",
  messagingSenderId: "933415613079",
  appId: "1:933415613079:web:2750a2ff2493b29b1e6fd2"
};

const app = initializeApp(firebaseConfig);



export const Auth = getAuth(app)