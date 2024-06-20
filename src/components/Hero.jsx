import React from 'react';
import { Link } from 'react-router-dom';
const Hero = () => {
  return (
    <>
    <div className="main-container">
      <div className="image-content">
        <img src="images/section9.jpg" alt="Description" />
        <div className="overlay-text">
        <span className='star-icon'>
            <i className="ri-star-s-fill"></i>
            <i className="ri-star-s-fill"></i>
            <i className="ri-star-s-fill"></i>
            <i className="ri-star-s-fill"></i>
            <i className="ri-star-s-fill"></i>
            </span>
          <p className='small-heading'>The Ultimate Luxury Experience</p>
          <h1 className='heading'>Enjoy the best movement of the life</h1>
          <Link to="/SUKH-SAGAR/room">
          <button>Room & Suits</button>
        </Link>
        </div>
      </div>
    </div>
  </>
  )
}

export default Hero
