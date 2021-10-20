import {useEffect, useState} from "react";
import initializeAuthentication from "../Firebase/firebase.init";
import {getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut} from "firebase/auth";

initializeAuthentication();

const useFirebase = () => {
	const [user, setUser] = useState({});
	const [error, setError] = useState('');
	const auth = getAuth();
	const googleProvider = new GoogleAuthProvider();
	const signInUsingGoogle = () => {
		return signInWithPopup(auth, googleProvider)
	}
	const logout = () => {
		signOut(auth)
		.then(() => {
				setUser({});
			}
		)
	}
	useEffect(() => {
		onAuthStateChanged(auth, user => {
			if (user) {
				console.log("inside state change", user);
				setUser(user)
			}
		})
	}, []);
	
	return {
		user,
		error,
		signInUsingGoogle,
		logout
	}
}

export default useFirebase;