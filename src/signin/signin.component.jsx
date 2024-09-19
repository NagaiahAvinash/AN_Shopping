import {signInWithGooglePopup, createFromUserDocFromAuth} from '../utils/firebase/firebase.utils.jsx';
import SignUpForm from '../components/sign-up-form/sign-up-form.component.jsx';
const SignIn = ()=>{
    const logGoogleUser = async ()=>{
        const {user} = await signInWithGooglePopup();
        console.log (user);
       const userDocRef = await createFromUserDocFromAuth(user);
       console.log('this is userDocRef', userDocRef);
    } 
    return(
        <div>
            <h1> This is a Sigin Page</h1>
            <button onClick={logGoogleUser}>Click to SignIn with Google</button>
            <SignUpForm/>
        </div>
    );
}
export default SignIn