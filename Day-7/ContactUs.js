import React, { Component } from 'react'
import '../src/ContactUs.css'
import Navbar from './NabBar';
import Footer from './footer';
function ContactUs() {
    return ( 
        <>
        <Navbar/>
        <div className='contact'>
            <h2 className='abt'>Got a question? We are happy to help.</h2>
            <p>The Built Better business spans a wide range of areas, organisations and companies. To help you find the right contact, we've put together the most commonly asked questions, including contact details.</p>
        </div>
        <Footer/>
        </>
     );
}

export default ContactUs;