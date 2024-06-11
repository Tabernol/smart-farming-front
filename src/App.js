import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';

import MainLayout from "./layouts/MainLayout";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import Login from "./components/Login"

function App() {
    console.log("App component rendered");
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<MainLayout />}>
                        <Route index element={<Home />} />
                        <Route path="sign-in" element={<SignIn />} />
                        <Route path="login" element={<Login />} />
                        {/*<Route path="*" element={<NotFound />} />*/}
                    </Route>

                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
