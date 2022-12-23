import React from 'react'
import room1 from '../assets/room1.jpeg'
import room2 from '../assets/room2.jpeg'
import room3 from '../assets/room3.jpeg'

const Rooms = () => {
  return (
    <section id='rooms' className='rooms section-padding'>
      <header className='section-header'>
        <h2>
          Lorem, ipsum
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Molestias, provident?
        </p>
      </header>
      <div className='flex-items'>
        <div className='card'>
          <img src={room1} alt=""></img>
          <div className='card-body bg-warning'>
            <h2>Deluxe Room</h2>
            <p>Lorem, ipsum</p>
          </div>
        </div>
        <div className='card'>
          <img src={room2} alt=""></img>
          <div className='card-body bg-warning'>
            <h2>Superior Room</h2>
            <p>Lorem, ipsum</p>
          </div>
        </div>
        <div className='card'>
          <img src={room3} alt=""></img>
          <div className='card-body bg-warning'>
            <h2>Standart Room</h2>
            <p>Lorem, ipsum</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Rooms