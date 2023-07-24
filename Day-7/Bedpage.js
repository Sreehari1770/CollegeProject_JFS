import React, { Component } from 'react'
import '../src/BedPage.css'
import Navbar from './NabBar';
import Footer from './footer';
import { Link, useNavigate } from 'react-router-dom'
function Bedpage() {
    return (
        <>
            <Navbar />
            <div className='bed'>
                <h2 className='sty'>Beds</h2>
            </div>
            <div className='ig'>
                <div class="responsive">
                    <div class="gallery">
                        <a target="_blank" href="https://www.ikea.com/in/en/range-categorisation/images/double-beds-16284.jpeg?imwidth=300">
                            <img src="https://www.ikea.com/in/en/range-categorisation/images/double-beds-16284.jpeg?imwidth=300" alt="Double beds" width="600" height="400" />
                        </a>
                        <div class="desc">Double Beds</div>
                    </div>
                </div>
                <div class="responsive">
                    <div class="gallery">
                        <a target="_blank" href="https://www.ikea.com/global/assets/range-categorisation/images/sofa-beds-10663.jpeg?imwidth=300">
                            <img src="https://www.ikea.com/global/assets/range-categorisation/images/sofa-beds-10663.jpeg?imwidth=300" alt="sofa beds" width="600" height="400" />
                        </a>
                        <div class="desc">Sofa Beds</div>
                    </div>
                </div>
                <div class="responsive">
                    <div class="gallery">
                        <a target="_blank" href="https://www.ikea.com/in/en/range-categorisation/images/beds-with-storage-25205.jpeg?imwidth=300">
                            <img src="https://www.ikea.com/in/en/range-categorisation/images/beds-with-storage-25205.jpeg?imwidth=300" alt="Storage beds" width="600" height="400" />
                        </a>
                        <div class="desc">Beds with storage</div>
                    </div>
                </div>
                <div class="responsive">
                    <div class="gallery">
                        <a target="_blank" href="https://www.ikea.com/global/assets/range-categorisation/images/single-beds-16285.jpeg?imwidth=300">
                            <img src="https://www.ikea.com/global/assets/range-categorisation/images/single-beds-16285.jpeg?imwidth=300" alt="Single beds" width="600" height="400" />
                        </a>
                        <div class="desc">Single Beds</div>
                    </div>
                </div>
            </div>

            <div class="clearfix"></div>

            <div className='about1'>
                <h4 className='design1'>Bed’s For More Than Just A Good Night’s Sleep</h4>
                <p>A single bed for the stag or a double bed for the couple - you’ll find the one you need right here. Our king-size beds are perfect for snuggling or when you both need more room to stretch. Many of our beds also have smart storage options so you can tuck away bed linen, extra pillows and quilts. Our cots and children’s beds will keep your little one safe and comfortable through the night. And with our collection of sofa-beds, guests are always welcome to stay overnight. </p>
            </div>
            <div className='about1'>
                <h4 className='design1'>Products</h4>
                {/* <p>Our sofa-beds provide a cosy spot for your guests to sleep, especially when you’re short on room in the apartment. Some, like our VALLENTUNA modular sofa-beds, are super-customisable, so you can add or arrange units as you wish. Then there are daybeds like the BRIMNES, which comes with drawers for storing your bedding or your kid’s toys. Want a seating that multitasks? The vibrant FLOTTEBO and elegant NYHAMN look good, have space for storage, and transform from 3-seater sofas to a comfy single bed. </p> */}
            </div>
            {/* <div className='Row'> */}
            <div className='dir'>
            <div class="card1">
                <img src="https://www.ikea.com/in/en/images/products/grimsbu-bed-frame-grey__1101968_pe866785_s5.jpg?f=s" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">GRIMSBU</h5>
                    <p className='price'>Rs.4,490</p>
                    <p class="card-text">Bed frame, grey, 140x200 cm (55 1/8x78 3/4 ")</p>
                    <Link to="/cart" class="btn btn-primary">Add to cart</Link>
                </div>
            </div>
            <div class="card1">
                <img src="https://www.ikea.com/in/en/images/products/idanaes-upholstered-ottoman-bed-gunnared-dark-grey__1079006_pe857430_s5.jpg?f=xxs" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">IDANÄS</h5>
                    <p className='price'>Rs.52,990</p>
                    <p class="card-text">Upholstered ottoman bed, Gunnared dark grey, 180x200 cm (70 7/8x78 3/4 ")</p>
                    <Link to="/cart" class="btn btn-primary">Add to cart</Link>
                </div>
            </div>
            <div class="card1">
                <img src="https://www.ikea.com/in/en/images/products/slaekt-bed-frame-with-underbed-and-storage-white__0876382_pe691863_s5.jpg?f=xxs" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">SLÄKT</h5>
                    <p className='price'>Rs.21,480</p>
                    <p class="card-text">Bed frame with underbed and storage, white, 90x200 cm (35 3/8x78 3/4 ")</p>
                    <Link to="/cart" class="btn btn-primary">Add to cart</Link>
                </div>
            </div>
            </div>
            <div className='dir'>
            <div class="card1">
                <img src="https://www.ikea.com/in/en/images/products/vevelstad-bed-frame-white__1035359_pe840535_s5.jpg?f=xxs" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">SLATTUM</h5>
                    <p className='price'>Rs.16,990</p>
                    <p class="card-text">Upholstered bed frame, Knisa light grey, 160x200 cm (63x78 3/4 ")</p>
                    <Link to="/cart" class="btn btn-primary">Add to cart</Link>
                </div>
            </div>
            <div class="card1">
                <img src="https://www.ikea.com/in/en/images/products/songesand-bed-frame-with-4-storage-boxes-brown-luroey__1101593_pe866767_s5.jpg?f=xxs" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">SONGESAND</h5>
                    <p className='price'>Rs.24,990</p>
                    <p class="card-text">Bed frame with 4 storage boxes, brown/Luröy, 160x200 cm (63x78 3/4 ")</p>
                    <Link to="/cart" class="btn btn-primary">Add to cart</Link>
                </div>
            </div>
            <div class="card1">
                <img src="https://www.ikea.com/in/en/images/products/tufjord-upholstered-bed-frame-gunnared-blue__1150685_pe884655_s5.jpg?f=xxs" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">TUFJORD</h5>
                    <p className='price'>Rs.44,490</p>
                    <p class="card-text">Upholstered bed frame, Gunnared blue, 180x200 cm (70 7/8x78 3/4 ")</p>
                    <Link to="/cart" class="btn btn-primary">Add to cart</Link>
                </div>
            </div>
            </div>
            
            {/* </div> */}
            
            <Footer />
        </>
    );
}

export default Bedpage;