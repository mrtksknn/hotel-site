import React from 'react'
import about1 from '../assets/about1.jpeg';

const About = () => {
  return (
    <section id='about' className='about flex-columns'>
      <div className='row'>
        <div className='column'>
          <div className='column-1'>
            <img src={about1} alt=""></img>
          </div>
        </div>
        <div className='column'>
          <div className='column-2 bg-secondary'>
            <h2>Customer Service</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Veniam, possimus.
            </p>
            <button className='btn btn-outline'>
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About