import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Use Routes instead of Switch
import MainPage from './components/MainPage';
import EventCreate from './components/EventCreate';
import SignUp from './components/sign_up';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Routes> {/* Use Routes here */}
                    <Route path="/" element={<MainPage />} /> 
                    <Route path="/EventCreate" element={<EventCreate />} />
                    <Route path="/SignUp" element={<SignUp />} />
                    {/* Use element prop */}
                    {/* Add more routes here as needed */}
                </Routes>
            </div>
        </Router>
    );
};

export default App;
