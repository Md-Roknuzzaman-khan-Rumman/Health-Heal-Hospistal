import {initializeApp} from "firebase/firebase-app";
import firebaseConfig from "./firebase.config";

const initAuth = () => {
	initializeApp(firebaseConfig);
}

export default initAuth;