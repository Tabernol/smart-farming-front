import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';

import MainLayout from "./layouts/MainLayout";
import Home from "./components/common/Home";
import SignIn from "./components/common/SignIn";
import Login from "./components/common/Login"
import Dashboard from "./components/protected/Dashboard";
import ProtectedRoute from "./components/protected/ProtectedRoute";

function App() {
    console.log("App component rendered");
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<MainLayout/>}>
                        <Route index element={<Home/>}/>
                        <Route path="sign-in" element={<SignIn/>}/>
                        <Route path="login" element={<Login/>}/>
                        <Route path="dashboard" element={<Dashboard/>}/>
                    </Route>

                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
