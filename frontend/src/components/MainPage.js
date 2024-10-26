import React from 'react';
import { Link } from 'react-router-dom';

import EventCreate from './EventCreate';

const MainPage = () => {
    return (
        <div style={{ padding: '20px' }}>
            <h1>Main Page</h1>
            <p>This is your main page content.</p>
            <p>You can add more components, images, or links here.</p>
            <Link to="/EventCreate">Go to About Page</Link>
        </div>
    );
};

export default MainPage;
