import React from 'react'

const Navbar = () => {
  return (
    <header id='home' className='main-header'>
      <div className='navbar'>
        <h1 className='brand'>
          <i className='fas fa-hotel'></i>
          <span>Deluxe</span> Hotel
        </h1>
        <nav>
          <ul>
            <li>
              <a href='#home'>Home</a>
              <a href='#about'>About</a>
              <a href='#rooms'>Rooms</a>
              <a href='#contact'>Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar;