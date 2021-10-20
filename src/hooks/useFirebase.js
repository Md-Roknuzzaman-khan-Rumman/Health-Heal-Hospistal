import {getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut} from "firebase/firebase-auth";
import {useEffect, useState} from "react";

const useFirebase = () => {
	const [users, setUsers] = useState({});
	const auth = getAuth();
	const signInUsingGoogle = () => {
		const googleProvider = new GoogleAuthProvider();
		
		signInWithPopup(auth, googleProvider)
		.then(result => {
			setUsers(result.user)
		})
	}
	
	// observed user state change
	useEffect(() => {
			const unsubscribed = onAuthStateChanged(auth, user => {
				if (user) {
					setUsers(user)
				} else {
					setUsers({})
				}
			});
			return () => unsubscribed();
		}
		,
		[]
	)
	;
	
	const logOut = () => {
		signOut(auth)
		.then(() => {
		});
	}
	return {
		users, signInUsingGoogle, logOut
	}
}

export default useFirebase;