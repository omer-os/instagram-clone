import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyC9fM64iBh-wnlmSg5isCOSkj8EZ8aLriM",
  authDomain: "custom-dominion-312000.firebaseapp.com",
  projectId: "custom-dominion-312000",
  storageBucket: "custom-dominion-312000.appspot.com",
  messagingSenderId: "638647943941",
  appId: "1:638647943941:web:962b86236d68657584ad6c",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
