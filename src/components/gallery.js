import React from 'react'
import img1 from '../assets/1.jpeg';
import img2 from '../assets/2.jpeg';
import img3 from '../assets/3.jpeg';
import img4 from '../assets/4.jpeg';


const Gallery = () => {
  return (
    <section id='gallery' className='gallery flex-grid section-padding'>
      <header className='section-header'>
        <h2>Lorem ipsum.</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Ratione, incidunt.
        </p>
      </header>
      <div className='row'>
        <div className='column'>
          <img src={img1} alt=""></img>
          <img src={img2} alt=""></img>
        </div>
        <div className='column'>
          <img src={img3} alt=""></img>
          <img src={img4} alt=""></img>
        </div>
        <div className='column'>
          <img src={img1} alt=""></img>
          <img src={img2} alt=""></img>
        </div>
        <div className='column'>
          <img src={img3} alt=""></img>
          <img src={img4} alt=""></img>
        </div>
      </div>
    </section>
  )
}

export default Gallery