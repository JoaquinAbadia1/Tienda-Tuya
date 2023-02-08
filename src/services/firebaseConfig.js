
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyC4eSymp6Q7Ytyc5gAe2tAK_BXmlwev1nc",
  authDomain: "tiendatuya-e3c2d.firebaseapp.com",
  projectId: "tiendatuya-e3c2d",
  storageBucket: "tiendatuya-e3c2d.appspot.com",
  messagingSenderId: "228600064654",
  appId: "1:228600064654:web:6c1e29843f203d6dd277df"
};


const app = initializeApp(firebaseConfig);
export const bd = getFirestore(app)