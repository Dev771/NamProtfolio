import React from 'react';
import "./style.css";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Icon } from '@mui/material';

const Navbar = () => {

    const handleClick = () => {
        console.log(document.getElementById("switch").style.justifyContent)

        document.getElementById("switch").style.justifyContent = 'end';
    }

    return (
        <div className='Navbar'>
            <div>
                <Icon component={ArrowDownwardIcon} />
            </div>
            <div className='navend'>
                <div>Home</div>
                <div>Resume</div>
                <div>About</div>
                <div className='switch' id="switch" onClick={handleClick}>
                    <div className='switchButton'></div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;