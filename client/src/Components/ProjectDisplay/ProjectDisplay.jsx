import React from 'react'

import projPhoto from '../../public/image/projectPhot.png';

import './style.css';

const ProjectDisplay = ({url}) => {
  return (
    <a className='card' href={url} target='_blank' rel='noreferrer' >
        <img src={projPhoto} alt='Project Img' />
        <div>
            <div className='projectDate'>Graphy <div></div> 2021</div>
            <h1>Project 1</h1>
            <p>Redesigned existing and new features like search, polls, quiz, live and more</p>
        </div>
    </a>
  )
}

export default ProjectDisplay