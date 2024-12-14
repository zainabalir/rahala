import './Login.css';
import React, { useState } from 'react';
import axios from 'axios';
import Signup from '../Signup/Signup';

const Login = ({ onClose, onLoginSuccess }) => {
    const [showSignUp, setShowSignUp] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const openSignUp = () => setShowSignUp(true);
    const closeSignUp = () => setShowSignUp(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/login/', {
                username,
                password,
            });

            if (response.status === 200) {
                const { token } = response.data;
                onLoginSuccess(username, token); // استدعاء دالة النجاح
                onClose(); // إغلاق نافذة تسجيل الدخول بعد النجاح
            }
        } catch (error) {
            setErrorMessage('Invalid username or password. Please try again.');
        }
    };

    return (
        <>
            {showSignUp ? (
                <Signup closeSignUp={closeSignUp} onLoginSuccess={onLoginSuccess} />
            ) : (
                <div className="login-overlay">
                    <div className="logform-container">
                        <button className="close-button" onClick={onClose}>&times;</button>
                        <p className="title">Welcome back</p>
                        <form className="form" onSubmit={handleLogin}>
                            <input
                                type="text"
                                className="input"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                            <input
                                type="password"
                                className="input"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            {errorMessage && <p className="error-message">{errorMessage}</p>}
                            <p className="logpage-link">
                                <span className="page-link-label">Forgot Password?</span>
                            </p>
                            <button type="submit" className="form-btn">Log in</button>
                        </form>
                        <p className="sign-up-label">
                            Don't have an account?{' '}
                            <span className="sign-up-link" onClick={openSignUp}>
                                Sign up
                            </span>
                        </p>
                    </div>
                </div>
            )}
        </>
    );
};

export default Login;
