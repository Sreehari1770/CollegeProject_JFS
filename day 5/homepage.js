import React, { Component } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { RiSearchLine } from 'react-icons/ri';
import '../src/homepage.css'
import { IconButton } from "rsuite";
import {Menu } from '@rsuite/icons';
import TemporaryDrawer from './Sidebar';
import Slideshow from './slideshow';
import Footer from './footer';
import ImgMediaCard from './card';
import ScrollButton from './ScrollButton';
import Services from './Services';

function Homepage() {

    return (
        <>
            <div className="header">
                <div className="space">
                    <div className='log'>
                        <TemporaryDrawer />
                        <Link to="/" class="logo">Built better</Link>
                    </div>
                    <div className='search'>
                    <input type="text" placeholder="Search..." className="searchInput" />
                    <button className="searchButton">
                    <RiSearchLine className="search-icon" />
                    </button>
                    </div>
                    <div class="header-right">
                        <Link to="/" class="active" >Home</Link>
                        <Link to="/signin">Signin</Link>
                        <Link to="/register">Register</Link>
                    </div>
                </div>
            </div>
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