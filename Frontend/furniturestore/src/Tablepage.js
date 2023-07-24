import React, {useContext,useState,useEffect} from 'react'
import Footer from './footer';
import Navbar from './NabBar';
// import { Link, useNavigate } from 'react-router-dom'
import { SearchContext } from './searchContext';
import { connect } from 'react-redux';
import { addToCart } from './cartActions';
import axios from 'axios';
function TablePage({ addToCart }) {
    // const [cartItems, setCartItems] = useState([]);
    const {searchQuery}=useContext(SearchContext);
    const [products, setProducts] = useState([]);

    useEffect(() => {
      fetchProductsByType("table"); // Fetch products of type "sofa" when the component mounts
    }, []);
  
    const fetchProductsByType = async (type) => {
      try {
        const response = await axios.get(`http://localhost:8080/products/getproducts/${type}`);
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    const filteredProducts = products.filter((product) =>
  product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
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
                
                {filteredProducts.map((product, index) => (
                  <div key={index} className='card1'>
                    <img src={product.image} class='card-img-top' alt='...' />
                    <div class='card-body'>
                      <h5 class='card-title'>{product.name}</h5>
                      <p className='price'>Rs. {product.price}</p>
                      <p class='card-text'>{product.description}</p>
                      {/* <div className='btn'> */}
                      <button id='btn1'
                        onClick={() => addToCart({ image:product.image,name: product.name, price: product.price })}
                        class='btn btn-primary'
                      >
                        Add to cart
                      </button>
                      {/* </div> */}
                    </div>
                  </div>
                ))}
                
              </div>
            <Footer/>
        </>
     );
}
const mapDispatchToProps = {
    addToCart: addToCart,
  };
// export default TablePage;
export default connect(null, mapDispatchToProps)(TablePage);