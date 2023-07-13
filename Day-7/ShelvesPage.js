import React, { Component } from 'react'
import Footer from './footer';
import Navbar from './NabBar';
import { Link, useNavigate } from 'react-router-dom'
function ShelvesPage() {
    return ( 
        <>
        <Navbar/>
        <div className='bed'>
            <h2 className='sty'>Shelves</h2>
        </div>
        <div className='ig'>
            <div class="responsive">
                <div class="gallery">
                    <a target="_blank" href="https://www.ikea.com/in/en/images/products/baggebo-shelving-unit-metal-white__0981563_pe815398_s5.jpg?f=xxs">
                        <img src="https://www.ikea.com/in/en/images/products/baggebo-shelving-unit-metal-white__0981563_pe815398_s5.jpg?f=xxs" alt="Double beds" width="600" height="300" />
                    </a>
                    <div class="desc">Shelves</div>
                </div>
            </div>
            <div class="responsive">
                <div class="gallery">
                    <a target="_blank" href="https://www.ikea.com/in/en/images/products/kallax-shelving-unit-white__1031125_pe836445_s5.jpg?f=xxs">
                        <img src="https://www.ikea.com/in/en/images/products/kallax-shelving-unit-white__1031125_pe836445_s5.jpg?f=xxs" alt="sofa beds" width="600" height="300" />
                    </a>
                    <div class="desc">Shelves 8x8</div>
                </div>
            </div>
            </div>
            <div class="clearfix"></div>
            <div className='about1'>
            <h4 className='design1'>Products</h4>
            {/* <p>Our sofa-beds provide a cosy spot for your guests to sleep, especially when you’re short on room in the apartment. Some, like our VALLENTUNA modular sofa-beds, are super-customisable, so you can add or arrange units as you wish. Then there are daybeds like the BRIMNES, which comes with drawers for storing your bedding or your kid’s toys. Want a seating that multitasks? The vibrant FLOTTEBO and elegant NYHAMN look good, have space for storage, and transform from 3-seater sofas to a comfy single bed. </p> */}
            </div>
            <div className='dir'>
            <div class="card1">
                <img src="https://www.ikea.com/in/en/images/products/lack-wall-shelf-unit-white__1092772_pe863015_s5.jpg?f=m" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">LACK</h5>
                    <p className='price'>Rs.6,190</p>
                    <p class="card-text">Wall shelf unit, white, 30x190 cm (11 3/4x74 3/4 ")</p>
                    <Link to="/cart" class="btn btn-primary">Add to cart</Link>
                </div>
            </div>
            <div class="card1">
                <img src="https://www.ikea.com/in/en/images/products/baggebo-cabinet-with-door-white__1020932_pe832020_s5.jpg?f=s" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">BAGGEBO</h5>
                    <p className='price'>Rs.2,290</p>
                    <p class="card-text">Cabinet with door, white, 50x30x80 cm (19 5/8x11 3/4x31 1/2 ")</p>
                    <Link to="/cart" class="btn btn-primary">Add to cart</Link>
                </div>
            </div>
            <div class="card1">
                <img src="https://www.ikea.com/in/en/images/products/vittsjoe-shelving-unit-black-brown-glass__0849171_pe564039_s5.jpg?f=s" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">VITTSJÖ</h5>
                    <p className='price'>Rs.6,990</p>
                    <p class="card-text">Shelving unit, black-brown/glass, 100x175 cm (39 3/8x68 7/8 ")</p>
                    <Link to="/cart" class="btn btn-primary">Add to cart</Link>
                </div>
            </div>
            </div>
            
        <Footer/>
        </>
     );
}

export default ShelvesPage;