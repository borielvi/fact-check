import { useMutation } from '@apollo/react-hooks';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';


const Login = () => {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error }] = useMutation(LOGIN_USER);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleFormSubmit = async event => {
        event.preventDefault();

        try {
            const { data } = await login({
                variables: { ...formState }
            });

            Auth.login(data.login.token);
        } catch (e) {
            console.error(e)
        }
    }
    
    return (
        <div id='Login'>
            <main>
                <div>
                    <form onSubmit={handleFormSubmit} className="container text-center rounded-pill forms" id="login-form">
                        <div className="color-blue mb-3">
                            Login
                        </div>
                        <div>
                            <input className="input-border-none rounded mb-1 w-50" 
                                type="email" 
                                id="email" 
                                placeholder="email"
                                name="email"
                                value={formState.email} 
                                onChange={handleChange} 
                            />
                            <br />
                            <input className="input-border-none rounded mb-1 w-50" 
                                type="password" 
                                id="password" 
                                name="password"
                                placeholder="password" 
                                value={formState.password} 
                                onChange={handleChange} 
                            />
                        </div>
                        <button className="rounded btn-green mt-1 mb-2 w-50" type="submit">
                            Login
                        </button>

                        <div className="small">
                            {error && <div>Login failed</div>}
                            New user? <Link to="/signup"> Create your account</Link>
                            <br/>
                            Want to go home? <Link to="/">Home</Link>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    )
}

export default Login;