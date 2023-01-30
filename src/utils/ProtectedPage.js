import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedPage = ({ children }) => {
    const token = localStorage.getItem('access-token');
    console.log(token);
    const { pathname } = useLocation();
    if (!token) {
        console.log('hello');
        return <Navigate to='/login' state={{ path: pathname }} />;
    }
    return children;
};

export default ProtectedPage;