import {signInWithGooglePopup, createFromUserDocumentFromAuth} from '../utils/firebase/firebase.utils.jsx';
const SignIn = ()=>{
    const logGoogleUser = async ()=>{
        const {user} = await signInWithGooglePopup();
        console.log (user);
       const userDocRef = await createFromUserDocumentFromAuth(user);
       console.log('this is userDocRef', userDocRef);
    } 
    return(
        <div>
            <h1> This is a Sigin Page</h1>
            <button onClick={logGoogleUser}>Click to SignIn with Google</button>
        </div>
    );
}
export default SignIn