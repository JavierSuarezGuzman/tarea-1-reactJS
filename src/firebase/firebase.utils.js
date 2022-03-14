import firebase from "firebase/app"; 

import "firebase/firestore"; 

import "firebase/auth"; 

const config = {
  apiKey: "AIzaSyD9MKWXXUSrk79QPWs5Z67WUOYiQOIJYRw",
  authDomain: "reactjs-enero-firebase.firebaseapp.com",
  projectId: "reactjs-enero-firebase",
  storageBucket: "reactjs-enero-firebase.appspot.com",
  messagingSenderId: "378619538486",
  appId: "1:378619538486:web:b518528f66ef6cfa6dbc97"
};


firebase.initializeApp(config);


export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return ;

    const userRef = firestore.doc(`users/${userAuth.uid}`); 

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({ 
                displayName,
                email,
                createdAt,
                ...additionalData,
             });
        }catch (error) {
            console.log("Error al crear el usuario", error.message);
        }
    }

    return userRef;

};


export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;

