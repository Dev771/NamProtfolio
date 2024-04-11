import React from 'react';
import Home from './Components/Home/Home.jsx';
import Navbar from './Components/Navbar/Navbar';
import Bento from './Components/Bento/Bento.jsx';
import Projects from './Components/Projects/Projects.jsx';

const App = () => {
    return (
        <div>
            <Navbar />
            <Home />
            <Bento />
            <Projects />
        </div>
    )
}

export default App;