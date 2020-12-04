import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    function openClaimForm() {
        const pop_up_form = document.getElementById('pop-up');
        pop_up_form.style.visibility = 'visible';
    }

    return (
        <div className="jumbotron div-header pb-4 pt-4">
            <div className="title">
                Fact Check
            </div>
            <Link to="/">
                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-house-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M8 3.293l6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"></path>
                    <path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"></path>
                </svg>
            </Link>
            <Link to="/signup">
                <button className="header-btn">Signup</button>
            </Link>
            <Link to="/login">
                <button className="header-btn">Login</button>
            </Link>
            <div className="float-right color-green" onClick={ openClaimForm }>
                Add a Claim
                <svg width="1.3em" height="1.3em" viewBox="0 0 16 16" className="bi bi-plus-circle" fill="green" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                    <path fillRule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
                </svg>
            </div>
        </div>
    )
}

export default Header;