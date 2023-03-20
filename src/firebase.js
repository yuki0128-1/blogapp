import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCXJL2aAx3mefwcPsENed_2gsnmxMe68Ko",
  authDomain: "blog-86dc2.firebaseapp.com",
  projectId: "blog-86dc2",
  storageBucket: "blog-86dc2.appspot.com",
  messagingSenderId: "773395653653",
  appId: "1:773395653653:web:7e22fcc6aabfb3eb7fda1c"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth,provider,db };