import React from 'react'
import { Routes, Route } from 'react-router-dom';
import ProtectedRoutes from './ProtectedRoutes';
import NoMatch from '../pages/NoMatch';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';


function RootRouter() {
    return (
        <>
            <div >
                <Routes>
                    <Route path='/' element={<ProtectedRoutes><Dashboard /></ProtectedRoutes>} />
                    <Route path='/login' element={<Login />} />
                    <Route path="*" element={<NoMatch />} />
                </Routes>
            </div>
        </>
    )
}


export default RootRouter