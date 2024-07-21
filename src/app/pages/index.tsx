import React from 'react';

const LandingPage: React.FC = () => {
    return (
        <div>
            <h1>Welcome to our website!</h1>
            <p>Please choose an option:</p>
            <button onClick={() => console.log('Register clicked')}>Register</button>
            <button onClick={() => console.log('Sign In clicked')}>Sign In</button>
        </div>
    );
};

export default LandingPage;