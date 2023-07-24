import React, { Component } from 'react'
import '../src/homepage.css'
import Slideshow from './slideshow';
import Footer from './footer';
import ImgMediaCard from './card';
import ScrollButton from './ScrollButton';
import Services from './Services';
import Navbar from './NabBar';
import { selectUser ,logout} from './Redux/useerSlice.js'
import { useDispatch, useSelector } from 'react-redux'
function Homepage() {
    const user=useSelector(selectUser)
    return (
        <>
            <Navbar/>
            <br/>
            {/* <h1 className='welcome-msg'>Bonjour {user.username} Welcome to built better furniture store</h1> */}
            <center>
            <Slideshow />
            </center>
            <div className='content'>
            <ImgMediaCard/>
            </div>
            {/* <h1>ytjk</h1> */}
            <ScrollButton/>
            <Services/>
            <Footer />
        </>
    );
}

export default Homepage;