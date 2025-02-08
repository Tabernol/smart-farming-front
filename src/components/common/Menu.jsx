import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Auth, Hub } from 'aws-amplify';
import './Menu.css'; // Ensure this import statement is present

const Menu = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [givenName, setGivenName] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        // Check authentication when the component is mounted
        checkAuth();

        // Listen to auth events (e.g., sign in, sign out)
        const listener = Hub.listen('auth', (data) => {
            const { payload } = data;
            if (payload.event === 'signIn') {
                checkAuth(); // Update auth state on sign-in
            } else if (payload.event === 'signOut') {
                setIsAuthenticated(false);
            }
        });

        // Cleanup the listener on component unmount
        return () => Hub.remove('auth', listener);
    }, []);

    const checkAuth = async () => {
        try {
            const user = await Auth.currentAuthenticatedUser();
            setIsAuthenticated(true);
            setGivenName(user.attributes.given_name || ''); // Ensure it's handled if given_name is undefined
        } catch {
            setIsAuthenticated(false);
        }
    };

    const handleSignOut = async () => {
        try {
            await Auth.signOut();
            setIsAuthenticated(false);
            navigate('/'); // Redirect to home after sign-out
        } catch (error) {
            console.log('Error signing out:', error);
        }
    };

    return (
        <nav className="menu">
            <div className="menu-links">
                <Link to="/">Home</Link>
                <Link to="/dashboard">Dashboard</Link>
            </div>
            <div className="auth-links">
                {isAuthenticated ? (
                    <>
                        <span>Welcome, {givenName}</span>
                        <Link to="#" onClick={handleSignOut}>Sign Out</Link>
                    </>
                ) : (
                    <Link to="/sign-in">Sign In</Link>
                )}
            </div>
        </nav>
    );
};

export default Menu;




// import React from "react";
// import {Link} from "react-router-dom";
// import "./Menu.css"; // Ensure this import statement is present
//
// const Menu = () => {
//     return (
//         <nav className="menu">
//             <div className="menu-links">
//                 <Link to="/">Home</Link>
//                 <Link to="/dashboard">Dashboard</Link>
//             </div>
//             <div className="auth-links">
//                 <Link to="/sign-out">Sign Out</Link>
//                 <Link to="/sign-in">Sign In</Link>
//             </div>
//         </nav>
//     );
// };
//
// export default Menu;
