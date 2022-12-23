import React from 'react'
import p1 from '../assets/p1.jpeg';
import p2 from '../assets/p2.jpeg';
import p3 from '../assets/p3.jpeg';

const Teams = () => {
  return (
    <section id='teams' className='teams section-padding bg-light'>
      <header className='section-header'>
        <h2>Lorem, ipsum</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Molestias, provident?
        </p>
      </header>
      <div className='flex-items'>
        <div>
          <img src={p1} alt=""></img>
          <h2>Lorem, ipsum</h2>
          <p>Manager</p>
        </div>
        <div>
          <img src={p2} alt=""></img>
          <h2>Lorem, ipsum</h2>
          <p>Manager</p>
        </div>
        <div>
          <img src={p3} alt=""></img>
          <h2>Lorem, ipsum</h2>
          <p>Manager</p>
        </div>
      </div>
    </section>
  )
}

export default Teams