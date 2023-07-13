import React, { Component } from 'react'
import '../src/AboutUspage.css'
import Navbar from './NabBar';
import Footer from './footer';
function AboutUs() {
    return (
        <>
            <Navbar />
            <div className='about'>
            <h1 className='design'>About us</h1>
            <p>One brand, many companies, and many, many people – that’s us in a nutshell. Spread all over the world, we have a passion for home furnishing and an inspiring shared vision: to create a better everyday life for the many people. This, together with our straightforward business idea, shared values, and a culture based on the spirit of togetherness, guides us in everything we do.</p>
            </div>
            <div className='pic'>
                <img src='https://gbl-sc9u2-prd-cdn.azureedge.net/-/media/aboutikea/images/about-us/a-boy-playing-in-his-room-ai01-02-ph156118-ikea-l-198a883d/a-boy-playing-in-his-room-ai01-02-ph156118-ikea-l-198a883d-figure-image-desktop?rev=27c00ef451cc4fbbb045ed53b81be85b' style={{width:1263,height:550}}/>
            </div>
            <div className='about'>
            <h2 className='design'>To offer a wide range of well-designed, functional home furnishing products at prices so low, that as many people as possible will be able to afford them.</h2>
            <i>Built better business idea</i>
            {/* <p>One brand, many companies, and many, many people – that’s us in a nutshell. Spread all over the world, we have a passion for home furnishing and an inspiring shared vision: to create a better everyday life for the many people. This, together with our straightforward business idea, shared values, and a culture based on the spirit of togetherness, guides us in everything we do.</p> */}
            </div>
            <div className='about'>
            <h2 className='design'>More than a retailer</h2>
            <p>To meet the needs of our customers we have a unique business model and value chain. It includes product development, design, supply, manufacture and sales. And of course, it starts and ends with our customers.</p>
            </div>
            <div className='cont'>
                <img src='https://gbl-sc9u2-prd-cdn.azureedge.net/-/media/aboutikea/images/about-us/woman-making-notes-ai01-px105983-ikea-97b12d3e/woman-making-notes-ai01-px105983-ikea-97b12d3e-figure-image-desktop?rev=12907e2bfb634fc88c95597b6e770225' style={{width:1263,height:550}}/>
            </div>
            <div className='about'>
            {/* <h2 className='design'>More than a retailer</h2> */}
            <p>Our value chain is about putting people first, and that starts by listening to people’s needs and dreams.</p>
            </div>
            <Footer />

        </>

    );
}

export default AboutUs;