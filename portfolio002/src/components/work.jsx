import React from 'react'
import WorkItem from './WorkItem'

const data = [
  {
    year: 2021,
    title: 'Web Designer',
    duration: '3 years',
    details: 'Freelance for my start-up, Hyperactive Digital Studios. During this time I focused on designing content for social media, and building static websites and some responsive web apps.',
  },
  {
    year: 2018,
    title: 'Student @ Devry University',
    duration: '4 years',
    details: 'Started my studies into Web Development at Devry. In the next 4 years, I will graduate with a degree in Web Development and a Bachelors in Multi-media Design.',
  },
  {
    year: 2000,
    title: 'Sales',
    duration: '15 years',
    details: 'During my 15 years at Westgate Resorts in Gatlingburg, I gained much needed experience in customer support and sales. .',
  },
  {
    year: 1996,
    title: 'Graphics Design',
    duration: '5 years',
    details: 'During my time at D.J. Signs, I discovered Adobe Illustrator and Photoshop designing outdoor signs for different brick and mortar businesses in Nashville, Tn.',
  },
    
]
  const Work = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>
      {data.map((item, idx) => (
        <WorkItem
        key={idx}
        year={item.year} 
        title={item.title} 
        duration={item.duration} 
        details={item.details} />
  ))}
      </div>
  );
};

export default Work