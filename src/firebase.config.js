import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyBRMJhG39EwGdMl_0tfpPQ682igldT8-s0",
  authDomain: "buy-sell-house-efba0.firebaseapp.com",
  databaseURL: "https://buy-sell-house-efba0-default-rtdb.firebaseio.com",
  projectId: "buy-sell-house-efba0",
  storageBucket: "buy-sell-house-efba0.appspot.com",
  messagingSenderId: "239933196595",
  appId: "1:239933196595:web:6a019918a1fadb4c8e9646"
};

  export const app = initializeApp(firebaseConfig);
  export const db =getFirestore();
  