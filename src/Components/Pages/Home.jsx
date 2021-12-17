import React from 'react';
import Alarm from '../AppComponents/Alarm';

const Home = () => {
    return (
        <>
            <div className="container">
                <h1>Your Alarms</h1>
                <Alarm />
            </div>
        </>
    );
};

export default Home;
