import React, { useState } from 'react';
import './LoginComponent.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './FirebaseComponent';

function Login() {
    const history = useHistory();
    const [email, getEmail] = useState('');
    const [password, getPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        .then(auth=> {
            if (auth) {
                history.push('/');
            }
        })
        .catch((error) => alert(error.message));
    };

    const signUp = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
        .then(auth=> {
            if (auth) {
                history.push('/');
            }
        })
        .catch((error) => alert(error.message));
    };

    return (
        <div className="login">
            <Link to="/">
                <img className="login_logo" src="https://pngimg.com/uploads/amazon/amazon_PNG21.png" />
            </Link>

            <div className="login_form">
                <h1>Sign-In</h1>

                <form>
                    <h5>Email</h5>
                    <input type="text" value={email}
                  onChange={(e)=>getEmail(e.target.value)}  />
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={(e)=>getPassword(e.target.value)} />
                    <button type="submit" onClick={signIn}  className="login_signIn">
                        Sign-In
                  </button>
                </form>
                <br />
                <button onClick={signUp} className="login_signUp">
                    Create New Account
                  </button>
            </div>
        </div>
    );
}

export default Login;