import React, { Component } from 'react'
import '../src/homepage.css'
import Slideshow from './slideshow';
import Footer from './footer';
import ImgMediaCard from './card';
import ScrollButton from './ScrollButton';
import Services from './Services';
import Navbar from './NabBar';

function Homepage() {

    return (
        <>
            <Navbar/>
            <br/>
            <center>
            <Slideshow />
            </center>
            
            <div className='content'>
            <ImgMediaCard/>
            </div>
            <ScrollButton/>
            <Services/>
            <Footer />
        </>
    );
}

export default Homepage;