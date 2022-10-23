import { getAuth, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { useBootstrapBreakpoints } from 'react-bootstrap/esm/ThemeProvider';
import { Link } from 'react-router-dom';
import app from '../firebase/firebase.init';

const auth = getAuth(app);

const LoginBootstrap = () => {
    const [success, setSuccess] = useState(false);
    const [userEmail, setUserEmail] = useState('');
    const handleSubmit = event => {
        event.preventdefault();
        setSuccess(false);
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setSuccess(true);
            })
            .catch(error => {
                console.error('error;', error)
            })
    }
    const handleForgetPassword = () => {
        if (!userEmail) {
            alert('Please enter your email address.')
            return
        }
        sendPasswordResetEmail(auth, userEmail)
            .then(() => {
                alert('Password reset email sent.Please check your email.')
            })
            .catch(error =>
                console.error(error));
    }
    const handleEmailBlur = event => {
        const email = event.target.value;
        setUserEmail(email);
    }

    return (
        <div className='w-50 mx-auto'>
            <h3 className='text-success'>Please login!!!</h3>

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Your E-mail</label>
                    <input type="email" onBlur={handleEmailBlur} name='email' className="form-control" id="formGroupExampleInput" placeholder="Your e-mail" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput2" className="form-label">Your password</label>
                    <input type="password" name='password' className="form-control" id="formGroupExampleInput2" placeholder="Your password" required />
                    <button className="btn btn-primary" type="submit">Login</button>
                </div>
            </form>
            {success && <p>Successfully log in to the account</p>}
            <p>New to this website ? Please <Link to='/register'>Register</Link> </p>
            <p><small>Forget password? <button type="button" onClick={handleForgetPassword} className="btn btn-link">Reset password</button></small></p>
        </div>
    );
};

export default LoginBootstrap;