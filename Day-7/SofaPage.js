import React, { Component } from 'react'
import Navbar from './NabBar';
import Footer from './footer';
import { Link, useNavigate } from 'react-router-dom'
function SofaPage() {
    return ( 
        <>
        <Navbar/>
            <div className='bed'>
                <h2 className='sty'>Sofas</h2>
            </div>
            <div className='ig'>
            <div class="responsive">
                <div class="gallery">
                    <a target="_blank" href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLfn1szuq2U8G0QCrDvtyLNPh08-4AWoITOA&usqp=CAU">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLfn1szuq2U8G0QCrDvtyLNPh08-4AWoITOA&usqp=CAU" alt="Double beds" width="600" height="300" />
                    </a>
                    <div class="desc">Sofa</div>
                </div>
            </div>
            <div class="responsive">
                <div class="gallery">
                    <a target="_blank" href="https://www.ikea.com/in/en/images/products/groenlid-3-seat-sofa-bed-with-chaise-longue-sporda-natural__0622034_pe690260_s5.jpg?f=xxs">
                        <img src="https://www.ikea.com/in/en/range-categorisation/images/sofa-beds-20874.jpeg?imwidth=500" alt="sofa beds" width="600" height="300" />
                    </a>
                    <div class="desc">Sofa Beds</div>
                </div>
            </div>
            </div>
            <div class="clearfix"></div>

            <div className='about1'>
            <h4 className='design1'>Sit, Lie Down Or Store Things - Our Sofa Beds Multitask Like No Other!</h4>
            <p>Our sofa-beds provide a cosy spot for your guests to sleep, especially when you’re short on room in the apartment. Some, like our VALLENTUNA modular sofa-beds, are super-customisable, so you can add or arrange units as you wish. Then there are daybeds like the BRIMNES, which comes with drawers for storing your bedding or your kid’s toys. Want a seating that multitasks? The vibrant FLOTTEBO and elegant NYHAMN look good, have space for storage, and transform from 3-seater sofas to a comfy single bed. </p>
            </div>

            <div className='about1'>
            <h4 className='design1'>Products</h4>
            {/* <p>Our sofa-beds provide a cosy spot for your guests to sleep, especially when you’re short on room in the apartment. Some, like our VALLENTUNA modular sofa-beds, are super-customisable, so you can add or arrange units as you wish. Then there are daybeds like the BRIMNES, which comes with drawers for storing your bedding or your kid’s toys. Want a seating that multitasks? The vibrant FLOTTEBO and elegant NYHAMN look good, have space for storage, and transform from 3-seater sofas to a comfy single bed. </p> */}
            </div>
                <div className='dir'>
            <div class="card1">
                <img src="https://www.ikea.com/in/en/images/products/gammalbyn-3-seat-sofa-blue__0868912_pe781422_s5.jpg?f=m" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">GAMMALBYN</h5>
                    <p className='price'>Rs.20,990</p>
                    <p class="card-text">3-seat sofa, blue</p>
                    <Link to="/cart" class="btn btn-primary">Add to cart</Link>
                </div>
            </div>
            <div class="card1">
                <img src="https://www.ikea.com/in/en/images/products/friheten-corner-sofa-bed-with-storage-hyllie-dark-grey__0690261_pe723182_s5.jpg?f=s" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">FRIHETEN</h5>
                    <p className='price'>Rs.56,990</p>
                    <p class="card-text">Corner sofa-bed with storage, Hyllie dark grey</p>
                    <Link to="/cart" class="btn btn-primary">Add to cart</Link>
                </div>
            </div>
            <div class="card1">
                <img src="https://www.ikea.com/in/en/images/products/vimle-4-seat-sofa-with-chaise-longue-saxemara-light-blue__1028791_pe835526_s5.jpg?f=s" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">VIMLE</h5>
                    <p className='price'>Rs.79,990</p>
                    <p class="card-text">4-seat sofa with chaise longue, Saxemara light blue</p>
                    <Link to="/cart" class="btn btn-primary">Add to cart</Link>
                </div>
            </div>
            </div>
            <div className='dir'>
            <div class="card1">
                <img src="https://www.ikea.com/in/en/images/products/friheten-klagshamn-corner-sofa-bed-with-storage-skiftebo-dark-grey__1057056_pe848725_s5.jpg?f=s" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">FRIHETEN / KLAGSHAMN</h5>
                    <p className='price'>Rs.62,480</p>
                    <p class="card-text">Corner sofa-bed with storage, Skiftebo dark grey</p>
                    <Link to="/cart" class="btn btn-primary">Add to cart</Link>
                </div>
            </div>
            <div class="card1">
                <img src="https://www.ikea.com/in/en/images/products/groenlid-3-seat-sofa-bed-sporda-natural__0621989_pe690197_s5.jpg?f=s" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">GRÖNLID</h5>
                    <p className='price'>Rs.89,480</p>
                    <p class="card-text">3-seat sofa-bed, Sporda natural</p>
                    <Link to="/cart" class="btn btn-primary">Add to cart</Link>
                </div>
            </div>
            <div class="card1">
                <img src="https://www.ikea.com/in/en/images/products/soederhamn-3-seat-section-tonerud-grey__1057813_pe848995_s5.jpg?f=s" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">SÖDERHAMN</h5>
                    <p className='price'>Rs.39,090</p>
                    <p class="card-text">3-seat section, Tonerud grey</p>
                    <Link to="/cart" class="btn btn-primary">Add to cart</Link>
                </div>
            </div>
            </div>
            
            <Footer/>
        </>
     );
}

export default SofaPage;