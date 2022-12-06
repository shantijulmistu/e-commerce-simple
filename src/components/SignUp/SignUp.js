import React, { useContext, useState } from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';
import { AuthContext } from './../../contexts/UserContext';

const SignUp = () => {
    const [error, setError] = useState(null);
    const { createUser } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        if (password.length < 6) {
            setError('Password must be at least 6 characters');
            return;
        }
        if (password !== confirmPassword) {
            setError('Your password did not match');
            return;
        }

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset();
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div className="form-container">
            <h1 className="form-title">Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" placeholder="Your email address" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" placeholder="Your password address" required />
                </div>
                <div className="form-control">
                    <label htmlFor="confirmPassword"> Confirm Password</label>
                    <input type="password" name="confirmPassword" id="" placeholder="Your password address" required />
                </div>
                <input className="btn-submit" type="submit" value="Sign Up" />
            </form>
            <p>Already have an account ? <Link to="/login">Login</Link></p>
            <p className="text-error">{error}</p>
        </div >
    );
};

export default SignUp;