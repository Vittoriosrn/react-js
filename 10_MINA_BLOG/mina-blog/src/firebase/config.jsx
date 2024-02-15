import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBY993MNkP22iKw6vx6pQ_I7QduT7_vdC8",
  authDomain: "minablog-cef11.firebaseapp.com",
  projectId: "minablog-cef11",
  storageBucket: "minablog-cef11.appspot.com",
  messagingSenderId: "837250008526",
  appId: "1:837250008526:web:574dfc875c9776f16b179f"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db }