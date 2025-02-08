import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import MainLayout from "./layouts/MainLayout";
import Home from "./components/common/Home";
import SignIn from "./components/common/SignIn";
import Dashboard from "./components/protected/Dashboard";
import ProtectedRoute from "./components/protected/ProtectedRoute";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<MainLayout />}>
                        <Route index element={<Home />} />
                        <Route path="sign-in" element={<SignIn />} />
                        <Route path="dashboard" element={
                            <ProtectedRoute>
                                <Dashboard />
                            </ProtectedRoute>
                        } />
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
