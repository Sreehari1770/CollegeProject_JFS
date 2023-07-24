import React, { useContext, useState,useEffect } from 'react'
import '../src/BedPage.css'
import Navbar from './NabBar';
import Footer from './footer';
import { SearchContext } from './searchContext';
import { connect } from 'react-redux';
import { addToCart } from './cartActions';
import axios from 'axios';
function Bedpage({ addToCart }) {

const {searchQuery}=useContext(SearchContext);
const [products, setProducts] = useState([]);

useEffect(() => {
  fetchProductsByType("bed"); // Fetch products of type "sofa" when the component mounts
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
            
            <Footer />
        </>
    );
}

const mapDispatchToProps = {
    addToCart: addToCart,
  };
// export default Bedpage;
export default connect(null, mapDispatchToProps)(Bedpage);