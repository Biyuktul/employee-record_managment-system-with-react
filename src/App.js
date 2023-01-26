import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Routes } from 'react-router-dom';

import LandingPage from './components/Login/LandingPage'
import LoginPage from './components/Login/LoginPage'
import RegisterPage from './components/Login/RegisterPage'
import ForgetPasswordPage from './components/Login/ForgetPasswordPage'
import HomePage from './components/Login/HomePage'

import './App.css'

export default function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route exact path="/" element ={ <LandingPage/> } />
                    <Route path="/login" element={ <LoginPage/> } />
                    <Route path="/register" element={ <RegisterPage/> } />
                    <Route path="/forget-password" element={ <ForgetPasswordPage/> } />
                    <Route path="/home" element={ <HomePage/> } />
                </Routes>
            </div>
        </Router>
    )
}


const FooterStyle = {
    background: "#222",
    fontSize: ".8rem",
    color: "#fff",
    position: "absolute",
    bottom: 0,
    padding: "1rem",
    margin: 0,
    width: "100%",
    opacity: ".5"
}
