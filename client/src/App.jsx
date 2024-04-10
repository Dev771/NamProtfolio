import React from 'react';
import Home from './Components/Home/Home.jsx';
import Navbar from './Components/Navbar/Navbar';
import Bento from './Components/Bento/Bento.jsx';

const App = () => {
    return (
        <div>
            <Navbar />
            <Home />
            <Bento />
        </div>
    )
}

export default App;