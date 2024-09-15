import { initializeApp } from "firebase/app";
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDlgI81YD1iI_FwqYdc4tit6bWO5WZwAlE",
    authDomain: "an-clothing.firebaseapp.com",
    projectId: "an-clothing",
    storageBucket: "an-clothing.appspot.com",
    messagingSenderId: "248269197432",
    appId: "1:248269197432:web:77f1e229afe38ecbaf1d8d"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: 'select_account'
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = ()=> signInWithPopup(auth, provider);

  export const db= getFirestore();
  export const createFromUserDocumentFromAuth= async (userAuth)=>{
    const userDocRef= doc(db,'users', userAuth.uid );
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());
    
    if(!userSnapshot.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try{
           await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
            })
        }catch(err){ 
            console.log('not able to create new profile');
        }

        return userAuth;
    }
  }

