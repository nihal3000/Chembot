import React, { useState, useContext } from 'react';
import { useAuthContext } from '../../context/UseAuthContext';
import './Login.css';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuthContext();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Validate and send signup request to backend
        const userData = { email };
        login(userData);
    };

    return (
        <div className="auth-form">
            <h2>Signup</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Signup</button>
            </form>
        </div>
    );
};

export default Signup;
