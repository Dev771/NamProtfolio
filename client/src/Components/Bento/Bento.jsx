import React from 'react'

import Psyduck from '../../public/image/GroupPsyduck.png';

import './style.css';

const Bento = () => {
  return (
    <div className='Bento'>
        <div className='BentoMain'>
            <div className='carasoul box' ></div>
            <div className='bentoMid' >
                <div className='color box' ></div>
                <div className='3d box' ></div>
            </div>
            <div className='bentoMid' >
                <div className='psyduck box' >
                    <div className='psy' >
                        <img src={Psyduck} alt='Psyduck' />
                    </div>
                </div>
                <div className='Gif box' ></div>
            </div>
        </div>
    </div>
  )
}

export default Bento