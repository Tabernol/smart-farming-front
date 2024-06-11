import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { isAuthenticated } from '../../utils/auth';

const ProtectedRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        element={isAuthenticated() ? <Component /> : <Navigate to="/login" />}
    />
);

export default ProtectedRoute;
