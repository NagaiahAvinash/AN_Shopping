import {useState} from 'react';
import {createAuthUserWithEmailAndPassword, createFromUserDocFromAuth} from '../../utils/firebase/firebase.utils.jsx';
import FormInput from '../form-input/form-input.component.jsx';
import './sign-up-form.styles.scss'
import Button from '../button/button.component.jsx';

const defaultFormFields = {
    displayName:'',
    email: '',
    password: '',
    confirmPassword: '',
}

const SignUpForm = ()=>{
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;
    console.log(formFields);

    const handleChange=(event)=>{
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value});
    }
    const resetFormFields = ()=>{
        setFormFields(defaultFormFields);
    }

    const handleSubmit=async(event)=>{
        event.preventDefault();

        if(password!== confirmPassword){
            alert('passwords does not match');
            return;
        }

        try{
            const {user} = await createAuthUserWithEmailAndPassword(email, password);
            console.log(user);
            await createFromUserDocFromAuth(user, {displayName});
            resetFormFields();
        }catch(err){
            if(err.code==='auth/email-already-in-use'){
                alert('email alreay in use');
                resetFormFields();
                    return;
                
            }else{
                
                console.log('there is a error in account creation' + err.message);
            }
            
            
            
        }
    }

    return(
        <div className='sign-up-container'>
        <h2>Don't have an Account?</h2>
            <span>Sign up with your Email and Password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label = 'Display Name' type='text' required onChange={handleChange} name='displayName' value={displayName}/>
                <FormInput label = 'Email' type='email' required onChange={handleChange} name='email' value={email}/>
                <FormInput label = 'Password' type='password' required onChange={handleChange} name='password' value={password}/>
                <FormInput label = 'Confirm Password' type='password' required onChange={handleChange} name='confirmPassword' value={confirmPassword}/>
                <Button type='submit'>Sign Up</Button>
            </form>
        </div>
    );
}
export default SignUpForm;