import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDhOqmmI0US2fS_Y1z9mOwSDfO-sZhQGWo",
  authDomain: "react-netflix-clone-d1509.firebaseapp.com",
  projectId: "react-netflix-clone-d1509",
  storageBucket: "react-netflix-clone-d1509.appspot.com",
  messagingSenderId: "919024264252",
  appId: "1:919024264252:web:6b89475d7ae6d471b00f39",
  measurementId: "G-0X6DD44238"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);