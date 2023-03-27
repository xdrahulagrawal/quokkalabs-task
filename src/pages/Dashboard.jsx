import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../assests/styles/dashboard.css'

function Dashboard() {
    const navigate = useNavigate();

    const logoutHandler = () => {
        localStorage.removeItem('auth')
        navigate('/login')
    }
    
    return (
        <main className='dashboard-container'>
            <h1>Dashboard</h1>
            <button className='logout-btn' onClick={logoutHandler}>Logout</button>
        </main>
    );
}

export default Dashboard;