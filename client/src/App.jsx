import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homescreen from './Components/Home/Homescreen.jsx';
import Navbar from './Components/Navbar/Navbar';

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Homescreen />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;