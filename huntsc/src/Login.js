import './App.css'; // import the styles used for App.js
import React from 'react';
import './Login.css';
import { signInWithGoogle } from './firebase';
const Login = () => {
    return ( // the Login component just contains a Log In button
        <div> 
            <h1>HuntSC</h1>
            <h1>Start Your Venue Hunt With Us!</h1>
            <button className="button" onClick={signInWithGoogle}>
                Sign In With Google
            </button>
        </div>
    )
}
export default Login;