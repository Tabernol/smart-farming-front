import React from 'react';
import { Navigate } from 'react-router-dom';
import { Auth } from 'aws-amplify';

const ProtectedRoute = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = React.useState(null);

    React.useEffect(() => {
        checkAuth();
    }, []);

    const checkAuth = async () => {
        try {
            await Auth.currentAuthenticatedUser();
            setIsAuthenticated(true);
        } catch {
            setIsAuthenticated(false);
        }
    };

    if (isAuthenticated === null) {
        return <div>Loading...</div>; // Optionally show a loader
    }

    return isAuthenticated ? children : <Navigate to="/sign-in" />;
};

export default ProtectedRoute;



// import React from 'react';
// import { Route, Navigate } from 'react-router-dom';
// import { isAuthenticated } from '../../utils/auth';
//
// const ProtectedRoute = ({ component: Component, ...rest }) => (
//     <Route
//         {...rest}
//         element={isAuthenticated() ? <Component /> : <Navigate to="/login" />}
//     />
// );
//
// export default ProtectedRoute;
