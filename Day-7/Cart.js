import React, { Component } from 'react'
import Navbar from './NabBar';
import { Link, useNavigate } from 'react-router-dom'
import Footer from './footer';
import '../src/Cart.css'
function Cart() {
    return (
        <>
            <Navbar />
            <div className='stycart'>
                <h2 className='word'>Your Cart is empty</h2>
            </div>
            <div className='cont1'>
                <div className='bord'>
                    <div className='inside'>
                        <h5><b>Have an account?</b></h5>
                        <Link to="/signin">Join or log in </Link><p>for a smoother checkout.</p>
                    </div>
                    <div className='insidelogo'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className='rec'>
                <h4 className='recdesign'><b>Recommended for you</b></h4>
            </div>
            <div className='dir'>
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
                    <img src="https://www.ikea.com/in/en/images/products/lagkapten-alex-desk-white-anthracite-white__1184966_pe898187_s5.jpg?f=s" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">LAGKAPTEN / ALEX</h5>
                        <p className='price'>Rs.10,890</p>
                        <p class="card-text">Desk, white anthracite/white, 140x60 cm (55 1/8x23 5/8 ")</p>
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
            </div>
            <Footer />
        </>
    );
}

export default Cart;