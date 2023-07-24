import React, { Component } from 'react'
import Footer from './footer';
import Navbar from './NabBar';
import { Link, useNavigate } from 'react-router-dom'
function TablePage() {
    return ( 
        <>
        <Navbar/>
            <div className='bed'>
                <h2 className='sty'>Tables</h2>
            </div>
            <div className='ig'>
            <div class="responsive">
                <div class="gallery">
                    <a target="_blank" href="https://www.ikea.com/in/en/images/products/torald-desk-white__1073186_pe855653_s5.jpg?f=xxs">
                        <img src="https://www.ikea.com/in/en/images/products/torald-desk-white__1073186_pe855653_s5.jpg?f=xxs" alt="Double beds" width="600" height="300" />
                    </a>
                    <div class="desc">Tables</div>
                </div>
            </div>
            <div class="responsive">
                <div class="gallery">
                    <a target="_blank" href="https://www.ikea.com/in/en/images/products/skogsta-ingolf-table-and-6-chairs-acacia-black__1097283_pe864870_s5.jpg?f=xxs">
                        <img src="https://www.ikea.com/in/en/images/products/skogsta-ingolf-table-and-6-chairs-acacia-black__1097283_pe864870_s5.jpg?f=xxs" alt="sofa beds" width="600" height="300" />
                    </a>
                    <div class="desc">Dining Tables</div>
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
                <img src="https://www.ikea.com/in/en/images/products/linnmon-adils-table-white__0737165_pe740925_s5.jpg?f=xxs" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">LINNMON / ADILS</h5>
                    <p className='price'>Rs.2,990</p>
                    <p class="card-text">Table, white, 100x60 cm (39 3/8x23 5/8 ")</p>
                    <Link to="/cart" class="btn btn-primary">Add to cart</Link>
                </div>
            </div>
            <div class="card1">
                <img src="https://www.ikea.com/in/en/images/products/sandsberg-adde-table-and-4-chairs-black-black__1016431_pe830392_s5.jpg?f=s" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">SANDSBERG / ADDE</h5>
                    <p className='price'>Rs.6,790</p>
                    <p class="card-text">Table and 4 chairs, black/black, 110x67 cm (43 1/4x26 3/8 ")</p>
                    <Link to="/cart" class="btn btn-primary">Add to cart</Link>
                </div>
            </div>
            <div class="card1">
                <img src="https://www.ikea.com/in/en/images/products/kvistbro-storage-table-silver-colour-dark-grey-green__1179048_pe895817_s5.jpg?f=s" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">KVISTBRO</h5>
                    <p className='price'>Rs.2,390</p>
                    <p class="card-text">Storage table, silver-colour/dark grey-green, 44 cm (17 3/8 ")</p>
                    <Link to="/cart" class="btn btn-primary">Add to cart</Link>
                </div>
            </div>
            </div>
                <div className='dir'>
                <div class="card1">
                    <img src="https://www.ikea.com/in/en/images/products/lagkapten-alex-desk-white-anthracite-white__1184966_pe898187_s5.jpg?f=s" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">LAGKAPTEN / ALEX</h5>
                        <p className='price'>Rs.10,890</p>
                        <p class="card-text">Desk, white anthracite/white, 140x60 cm (55 1/8x23 5/8 ")</p>
                        <Link to="/cart" class="btn btn-primary">Add to cart</Link>
                    </div>
                </div>
                <div class="card1">
                    <img src="https://www.ikea.com/in/en/images/products/skogsta-nordviken-table-and-6-chairs-acacia-black__1097254_pe864851_s5.jpg?f=s" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">SKOGSTA / NORDVIKEN</h5>
                        <p className='price'>Rs.72,690</p>
                        <p class="card-text">Table and 6 chairs, acacia/black, 235x100 cm (92 1/2x39 3/8 ")</p>
                        <Link to="/cart" class="btn btn-primary">Add to cart</Link>
                    </div>
                </div>
                <div class="card1">
                    <img src="https://www.ikea.com/in/en/images/products/ingatorp-ingolf-table-and-4-chairs-black-brown-black__0354112_pe547811_s5.jpg?f=s" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">INGATORP / INGOLF</h5>
                        <p className='price'>Rs.56,790</p>
                        <p class="card-text">Table and 4 chairs, black/brown-black, 110/155 cm (43 1/4/61 ")</p>
                        <Link to="/cart" class="btn btn-primary">Add to cart</Link>
                    </div>
                </div>
                </div>
            
            <Footer/>
        </>
     );
}

export default TablePage;