import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import  './Login.css';
import { useAuthContext } from '../../context/UseAuthContext';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { user, setUser } = useAuthContext();

    const login = (userData) => { setUser(userData); localStorage.setItem('user', JSON.stringify(userData)); navigate('/chat'); };
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Validate and send login request to backend
        const userData = { email };
        login(userData);
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className='chem'>Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
