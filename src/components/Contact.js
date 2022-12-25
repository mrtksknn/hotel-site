import React from 'react'
import contact from '../assets/contact.jpeg';

const Contact = () => {
  return (
    <section id='contact' className='contact flex-columns'>
      <div className='row'>
        <div className='column'>
          <div className='column-1'>
            <img src={contact} alt=""></img>
          </div>
        </div>
        <div className='column'>
          <div className='column-2 bg-light'>
            <h2>Contact Us</h2>
            <form action='' className='contact-form'>
              <div className='form-control'>
                <label for="name">Name</label>
                <input type="text" id="name" placeholder='Enter your name' />
              </div>
              <div className='form-control'>
                <label for="email">Email</label>
                <input type="email" id="email" placeholder='Enter your email' />
              </div>
              <div className='form-control'>
                <label for="phone">Phone</label>
                <input type="text" id="phone" placeholder='Enter your phone' />
              </div>
              <button type='submit' className='btn btn-primary'>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact