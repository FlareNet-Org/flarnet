import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUser } from '../../context/userContext';

// TEMPORARY: Bypassing authentication for design preview
const ProtectedRoute = ({ children }) => {
    // const { user } = useUser();

    // if (!user) {
    //     //if no user loginned in redirect to login
    //     return <Navigate to='/login' />;
    // }

    //if the user is authenticated return the children
    return children;
}

export default ProtectedRoute;