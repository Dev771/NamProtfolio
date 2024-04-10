import React from 'react';

import ScribbleMan from '../../public/image/Scrible.png';
import GoodSpace from '../../public/image/GoodSpace.png';
import Kloudrac from '../../public/image/Kloudrac.png';
import BVICAM from '../../public/image/BVICAM.png';


import "./style.css";

const Homescreen = () => {
  return (
    <div className='heroSection'>
      <div className='heroSectionMainDiv'>
        <div className='dateAndTime' >{new Date().toUTCString()}</div>
        <h1 className='mainString' >Not so product designer,<br/> Part time photographer,<br/> love food, music, art</h1>
        <h3 className='otherContent' >It's <strong>नमन भटेजा 👋</strong> , Your friendly neighbourhood product based in Delhi, India. I enjoy crafting exceptional digital interfaces that offer delightful and intuitive experiences.</h3>
        <h3 className='IWorked' >I Worked With...</h3>
        <div className='compIcons'>
          <img src={GoodSpace} alt='Good Space' />
          <img src={Kloudrac} alt='Kloudrac' />
          <img src={BVICAM} alt='BVICAM' />
        </div>
      </div>
      <div className='scribleMan' >
        <img src={ScribbleMan} alt="" />
      </div>
    </div>
  )
}

export default Homescreen;