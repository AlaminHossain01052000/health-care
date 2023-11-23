import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, getIdToken } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "../firebase/firebase.init";


initializeFirebase();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);
    // const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState("");
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const registerNewUser = (name, email, password, naviagte) => {
        setLoading(true);
const userInfo={name,email}
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                
                const newUser = { ...userInfo,uid:userCredential.user.uid,};
                setUser(newUser);
                
                
                // updateProfile(auth.currentUser, {
                //     displayName: name
                // }).then(() => {
                //     // Set User Display Name

                // }).catch((error) => {
                //     // An error occurred At the time of setting user displayName

                // });

                fetch("http://localhost:5000/users", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(newUser)
                })
                    .then()
                setLoading(false)
                naviagte("/");
            })
            .catch((error) => {


                setError(error.message);
            })
            .finally(() => setLoading(false))
            ;
    }
    const googleLogIn = (history, location) => {
        setLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setError("");
                const newUser = { displayName: result.user.displayName, email: result.user.email };

                fetch("https://sedan-mela-server.vercel.app/users", {
                    method: "PUT",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(newUser)
                })
                    .then()

                const redirect_url = location?.state?.from || "/home";
                history.replace(redirect_url);
            }).catch((error) => {
                setError(error.message);
            })
            .finally(() => setLoading(false))
            ;
    }
    const loginUser = (email, password, navigate, location) => {
        setLoading(true);
        
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {


                setError("");
                navigate(-1);
                // const redirect_url = location?.state?.from || "/";
                // navigate(redirect_url);
            })
            .catch((error) => {

                setError(error.message);
            })
            .finally(() => setLoading(false))
            ;
    }
    const logoutUser = () => {
        setLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            setError(error.message)
        })
            .finally(() => setLoading(false))
            ;
    }
    useEffect(() => {
        setLoading(true);
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User

                setUser(user);
                getIdToken(user)
                    .then(idToken => {
                        setToken(idToken);
                    })
            } else {
                // When User is signed out

                setUser({})
            }
            setLoading(false);
        });
    }, [auth])
    return {
        user,
        
        registerNewUser,
        googleLogIn,
        logoutUser,
        loginUser,
        loading,
        error,
        token
    }
}
export default useFirebase;