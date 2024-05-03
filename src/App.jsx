import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import Room from './pages/Room';
import Resturant from './pages/Resturant';
import SPA from './pages/SPA';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Home from './pages/Home';
import RoomDetails from './pages/RoomDetails';

const App = () => {
  return (
  <>
    <Router>
      <Navbar />
      <Routes>
         <Route path="/SUKH-SAGAR/" element={<Home/>} />
         <Route path="/SUKH-SAGAR/about" element={<About/>} />
         <Route path="/SUKH-SAGAR/room" element={<Room/>} />
         <Route path="/SUKH-SAGAR/roomdetails" element={<RoomDetails/>} />
         <Route path="/SUKH-SAGAR/resturant" element={<Resturant/>}/>
         <Route path='/SUKH-SAGAR/spa' element={<SPA/>}/>
         <Route path='/SUKH-SAGAR/blog' element={<Blog />}/>
         <Route exact path="/SUKH-SAGAR/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </Router>
    </>
  );
};

export default App;
