import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getDatabase} from "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyCOELRaBlqAJrLGvFnF3IjXQnk7v9VJdmg",
  authDomain: "react-contact-bb621.firebaseapp.com",
  databaseURL: "https://react-contact-bb621-default-rtdb.firebaseio.com",
  projectId: "react-contact-bb621",
  storageBucket: "react-contact-bb621.appspot.com",
  messagingSenderId: "544577554229",
  appId: "1:544577554229:web:8f8729743b3e7060e1ae7c"
}
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database =getDatabase(app);

export {auth,database};