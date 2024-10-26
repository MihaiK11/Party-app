import React from 'react';
import { Link } from 'react-router-dom';

import EventCreate from './EventCreate';
import SignUp from './sign_up';

const MainPage = () => {
    return (
        <div style={{ padding: '20px' }}>
            <h1>Main Page</h1>
            <p>This is your main page content.</p>
            <p>You can add more components, images, or links here.</p>

            <div>
                <Link to="/EventCreate">Go to About Page</Link>
            </div>

            <div>
                <Link to="/SignUp">Go to Sign Up</Link>
            </div>
        </div>
    );
};

export default MainPage;
