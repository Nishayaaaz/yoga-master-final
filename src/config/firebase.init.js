// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCE0r6genZzDkMsrKQ12tmbX3k9B_zkT4w",
  authDomain: "yoga-master-server.firebaseapp.com",
  projectId: "yoga-master-server",
  storageBucket: "yoga-master-server.appspot.com",
  messagingSenderId: "860151532762",
  appId: "1:860151532762:web:b9ba623707d629f45529e3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);