import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDHEIbbH_tuMy4wnlcRtStYP9Gk_aHLgfk",
  authDomain: "contact-info-9d032.firebaseapp.com",
  databaseURL: "https://contact-info-9d032-default-rtdb.firebaseio.com",
  projectId: "contact-info-9d032",
  storageBucket: "contact-info-9d032.appspot.com",
  messagingSenderId: "945720189941",
  appId: "1:945720189941:web:9e3dba84a9b1c4f6ec36bc"
  };

  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);

  