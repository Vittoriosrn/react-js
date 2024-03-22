import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBqvpUVQ-xwteVrsLzwMJ9I69r_99TEImU",
  authDomain: "vbuy-database.firebaseapp.com",
  projectId: "vbuy-database",
  storageBucket: "vbuy-database.appspot.com",
  messagingSenderId: "997021656120",
  appId: "1:997021656120:web:85e9d6596602843aacb2cd"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db }