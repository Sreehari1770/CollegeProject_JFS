import React, { Component } from 'react'
import Navbar from './NabBar';
import Footer from './footer';
import { Link, useNavigate } from 'react-router-dom'
function ChairPage() {
    return ( 
        <>
        <Navbar/>
        <div className='bed'>
            <h2 className='sty'>Chairs</h2>
        </div>
        <div className='ig'>
            <div class="responsive">
                <div class="gallery">
                    <a target="_blank" href="https://www.ikea.com/in/en/images/products/pello-armchair-holmby-natural__0841137_pe600889_s5.jpg?f=xxs">
                        <img src="https://www.ikea.com/in/en/images/products/pello-armchair-holmby-natural__0841137_pe600889_s5.jpg?f=xxs" alt="Double beds" width="600" height="300" />
                    </a>
                    <div class="desc">Chair</div>
                </div>
            </div>
            <div class="responsive">
                <div class="gallery">
                    <a target="_blank" href="https://www.ikea.com/in/en/images/products/langfjaell-conference-chair-with-armrests-gunnared-blue-white__0853611_pe671477_s5.jpg?f=xxs">
                        <img src="https://www.ikea.com/in/en/images/products/langfjaell-conference-chair-with-armrests-gunnared-blue-white__0853611_pe671477_s5.jpg?f=xxs" alt="sofa beds" width="600" height="300" />
                    </a>
                    <div class="desc">Office Chair</div>
                </div>
            </div>
            <div class="responsive">
                <div class="gallery">
                    <a target="_blank" href="https://www.ikea.com/in/en/images/products/matchspel-gaming-chair-bomstad-black__0997853_pe822829_s5.jpg?f=xxs">
                        <img src="https://www.ikea.com/in/en/images/products/matchspel-gaming-chair-bomstad-black__0997853_pe822829_s5.jpg?f=xxs" alt="sofa beds" width="600" height="300" />
                    </a>
                    <div class="desc">Gaming chair</div>
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
                <img src="https://www.ikea.com/in/en/images/products/adde-chair-black__0728277_pe736167_s5.jpg?f=s" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">ADDE</h5>
                    <p className='price'>Rs.800</p>
                    <p class="card-text">Chair, black</p>
                    <Link to="/cart" class="btn btn-primary">Add to cart</Link>
                </div>
            </div>
            <div class="card1">
                <img src="https://www.ikea.com/in/en/images/products/huvudspelare-gaming-chair-black__1039672_pe840417_s5.jpg?f=s" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">HUVUDSPELARE</h5>
                    <p className='price'>Rs.4,490</p>
                    <p class="card-text">Gaming chair, black</p>
                    <Link to="/cart" class="btn btn-primary">Add to cart</Link>
                </div>
            </div>
            <div class="card1">
                <img src="https://www.ikea.com/in/en/images/products/poaeng-armchair-birch-veneer-knisa-light-beige__0571500_pe666933_s5.jpg?f=s" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">POÄNG</h5>
                    <p className='price'>Rs.7,990</p>
                    <p class="card-text">Armchair, birch veneer/Knisa light beige</p>
                    <Link to="/cart" class="btn btn-primary">Add to cart</Link>
                </div>
            </div>
            </div>
            <div className='dir'>
            <div class="card1">
                <img src="https://www.ikea.com/in/en/images/products/strandmon-slipcover-for-wing-chair-froerum-beige-anthracite__1157423_pe887694_s5.jpg?f=xxs" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">STRANDMON</h5>
                    <p className='price'>Rs.4,000</p>
                    <p class="card-text">Slipcover for wing chair, Frörum beige/anthracite</p>
                    <Link to="/cart" class="btn btn-primary">Add to cart</Link>
                </div>
            </div>
            <div class="card1">
                <img src="https://www.ikea.com/in/en/images/products/markus-office-chair-vissle-dark-grey__0724714_pe734597_s5.jpg?f=s" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">MARKUS</h5>
                    <p className='price'>Rs.13,990</p>
                    <p class="card-text">Office chair, Vissle dark grey</p>
                    <Link to="/cart" class="btn btn-primary">Add to cart</Link>
                </div>
            </div>
            <div class="card1">
                <img src="https://www.ikea.com/in/en/images/products/ikea-ps-loemsk-swivel-armchair-white-red__0726690_pe735385_s5.jpg?f=m" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">IKEA PS LÖMSK</h5>
                    <p className='price'>Rs.6,900</p>
                    <p class="card-text">Swivel armchair, white/red</p>
                    <Link to="/cart" class="btn btn-primary">Add to cart</Link>
                </div>
            </div>
            </div>
            
        <Footer/>
        </>
     );
}

export default ChairPage;