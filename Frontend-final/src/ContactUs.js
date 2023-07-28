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
        <div className='continfo'>
            <h6 className='ctus'><b>Contact us:</b></h6>
            <div className='info-inside'>
                <div className='email'>
                    <h7><b>Email: </b></h7>
                    <h7> bulitbetterstore@gmail.com</h7>
                </div>
                <div className='num'>
                    <h7><b>Customer Care No: </b></h7>
                    <h7>+91 72772 10980</h7>
                </div>
            </div>
        </div>
        <Footer/>
        </>
     );
}

export default ContactUs;