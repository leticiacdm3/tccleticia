import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDLxM0LaiGWRJGzPh4XwZncRwadSC8pc5k",
  authDomain: "tcc-leticia-b16b1.firebaseapp.com",
  projectId: "tcc-leticia-b16b1",
  storageBucket: "tcc-leticia-b16b1.appspot.com",
  messagingSenderId: "225293433346",
  appId: "1:225293433346:web:cb1810d5c17ce00665051b",
  measurementId: "G-9PK4BK66KX"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export {
    auth
}