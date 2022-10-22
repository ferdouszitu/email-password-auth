import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { Link } from 'react-router-dom';
import app from '../firebase/firebase.init';

const auth = getAuth(app);

const LoginBootstrap = () => {
    const handleSubmit = event => {
        event.preventdefault();
        const form = event.target;
        const email = form.email;
        const password = form.password;
    }


    return (
        <div className='w-50 mx-auto'>
            <h3 className='text-success'>Please login!!!</h3>

            <form onSubmit={handleSubmit}>
                <div class="mb-3">
                    <label for="formGroupExampleInput" class="form-label">Example label</label>
                    <input type="email" name='email' class="form-control" id="formGroupExampleInput" placeholder="Your e-mail" required />
                </div>
                <div class="mb-3">
                    <label for="formGroupExampleInput2" class="form-label">Another label</label>
                    <input type="password" name='password' class="form-control" id="formGroupExampleInput2" placeholder="Your password" required />
                    <button class="btn btn-primary" type="submit">Login</button>
                </div>
            </form>
            <p>New to this website ? Please <Link to='/register'>Register</Link> </p>
        </div>
    );
};

export default LoginBootstrap;