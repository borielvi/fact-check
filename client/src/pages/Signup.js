import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const Signup = () => {
    const [formState, setFormState] = useState({ email: '', username: '', firstName: '', lastName: '', password: '' });
    const [addUser, { error }] = useMutation(ADD_USER);

    const handleChange = event => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value
        });
    };

    const handleFormSubmit = async event => {
        event.preventDefault();

        try {
                const { data } = await addUser({
                    variables: { ...formState }
                });

                Auth.login(data.addUser.token);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div id="Signup">
            <main>
                <div>
                    <form className="container text-center rounded-pill forms" id="signup-form" onSubmit={handleFormSubmit}>
                        <div className="color-blue mb-3">
                            Sign-up
                        </div>

                        <div className="container">
                            <div className="row">
                                <div className="col-sm">
                                    <input 
                                        className="input-border-none rounded mb-1 w-100" 
                                        type="email" 
                                        id="email" 
                                        placeholder="email" 
                                        name="email"
                                        onChange={handleChange}
                                        value={formState.email}
                                    />
                                    <br />
                                    <input 
                                        className="input-border-none rounded mb-1 w-100" 
                                        type="text" id="username" 
                                        placeholder="username" 
                                        name="username"
                                        onChange={handleChange}
                                        value={formState.username}
                                    />
                                </div>
        
                                <div className="col-sm">
                                    <input 
                                        className="input-border-none rounded mb-1 w-100" 
                                        type="text" 
                                        id="firstName" 
                                        placeholder="first name" 
                                        name="firstName"
                                        onChange={handleChange}
                                        value={formState.firstName}
                                    />
                                    <br/>
                                    <input 
                                        className="input-border-none rounded mb-1 w-100" 
                                        type="text" 
                                        id="lastName" 
                                        placeholder="last name" 
                                        name="lastName"
                                        onChange={handleChange}
                                        value={formState.lastName}
                                    />
                                </div>
                            </div>
                            <input 
                                className="input-border-none rounded mb-1 w-100" 
                                type="password" 
                                id="password" 
                                placeholder="password" 
                                name="password"
                                onChange={handleChange}
                                value={formState.password}
                            />
                            <br/>
                            <input 
                                className="input-border-none rounded mb-1 w-100" 
                                type="password" 
                                id="password-verify" 
                                placeholder="password" 
                            />
                        </div>
                        <button className="rounded btn-green mt-1 mb-2 w-50" type="submit">
                            Sign-up
                        </button>

                        <div className="small">
                            {error && <div>Sign up failed</div>}
                            Already have an account? <Link to="/login"> Login</Link>
                            <br/>
                            Want to go home? <Link to="/">Home</Link>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    )
}

export default Signup;