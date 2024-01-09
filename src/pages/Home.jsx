import React from 'react'
import Hero from '../components/Hero'
import AboutContainer from '../components/AboutContainer'
import RoomBook from '../components/RoomBook'
import ImageCarousel from '../components/ImageCarousel'
import VideoContainer from '../components/VideoContainer'
import Testimonial from '../components/Testimonial'
import HotelContainer from '../components/HotelContainer'
import HotelBlog from '../components/HotelBlog'
import ContactContainer from '../components/ContactContainer'

const Home = () => {
    return (
        <>
            <Hero />
            <AboutContainer />
            <RoomBook />
            <ImageCarousel />
            <VideoContainer />
            <Testimonial />
            <HotelContainer />
            <HotelBlog />
            <ContactContainer />
        </>
    )
}

export default Home
