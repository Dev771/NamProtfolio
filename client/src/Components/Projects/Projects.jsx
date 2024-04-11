import React from 'react'

import "./style.css"
import ProjectDisplay from '../ProjectDisplay/ProjectDisplay'

const Projects = () => {
  return (
    <div className='Projects' >
        <div className='projectheader' >SOME OF MY SELECTED WORKS</div>
        <div className='ProjectSlider'>
            <ProjectDisplay url="https://www.behance.net/gallery/180327443/Freecharge-homepage-(UI-design)" />
            <ProjectDisplay url="https://www.behance.net/gallery/172550511/Indigo-flight-booking-app-design-(Mini-Project)" />
            <ProjectDisplay url="https://www.behance.net/gallery/172544767/Nike-Retro-Poster" />
            <ProjectDisplay url="https://www.behance.net/gallery/170927173/UX-UI-Dashboard-Web-Application" />
            <ProjectDisplay url="https://www.behance.net/gallery/172491601/Nike-Landing-Page-(Mini-Project)" />
            <ProjectDisplay url="https://www.behance.net/gallery/170629161/Green-Genie-Health-at-your-doorsteps" />
        </div>
    </div>
  )
}

export default Projects