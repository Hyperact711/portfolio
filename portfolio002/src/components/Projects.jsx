import React from 'react'
import ProjectItem from './ProjectItem'
import selfieImage from '../assets/selfieImage.jpg'
import apps from '../assets/images/carvenienceApp.jpg'
import hyperLogo from '../assets/images/hyperLogo.svg'

const Projects = () => {
  return  (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
      <p className='text-center py-8'>Here are some of my recent projects that I have worked on in the past year. Each example has a hover effect that gives a brief description and a link to the finished project.</p>
      <div className='grid sm:grid-cols-2 gap-12'>
        <ProjectItem img={selfieImage} title='JavaScript Developer' />
        <ProjectItem img={apps} title='Responsive Web App' />
        <ProjectItem img={hyperLogo} title='Budget friendly for Start-ups' />
        <ProjectItem />
      </div>
    </div>
  )
}

export default Projects