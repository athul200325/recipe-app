import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer style={{backgroundColor:'#DF9B06'}} className=" text-black py-4">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-12 col-md-3 mb-4">
              <h4 className="font-weight-bold h3 mb-2">ECart</h4>
              <p className='mb-1'>We are dedicated to providing the best online shopping experience for our customers.</p>
              <p className='mt-4 mb-1'>Code licensed eCart 3.0</p>
              <p>Currently V1.0.3</p>
            </div>

            <div className="col-12 col-md-3 mb-4">
              <h4 className="font-weight-semibold">Links</h4>
              <ul className="list-unstyled">
                <li><Link to="/" className="text-black text-decoration-none">Home</Link></li>
                <li><Link to="/wishlist" className="text-black text-decoration-none">Wishlist</Link></li>
                <li><Link to="/cart" className="text-black text-decoration-none">Cart</Link></li>
                <li><Link to="/contact" className="text-black text-decoration-none">Contact Us</Link></li>
              </ul>
            </div>

            <div className="col-12 col-md-3 mb-4">
              <h4 className="font-weight-semibold">Guides</h4>
              <ul className="list-unstyled">
                <li><Link to="/faq" className="text-black text-decoration-none">React</Link></li>
                <li><Link to="/privacy-policy" className="text-black text-decoration-none">React Tailwind</Link></li>
                <li><Link to="/terms-of-service" className="text-black text-decoration-none">Routing</Link></li>
              </ul>
            </div>

            <div className="col-12 col-md-3 mb-4">
                  <h4 className="font-weight-semibold">Contact Us</h4>
                  <div className="input-group mb-2">
                    <input className='form-control me-2' placeholder='Enter your email' type="text" />
                    <button className='btn btn-light text-primary' type="button">
                      <i className="fa-solid fa-arrow-right"></i>
                    </button>
                  </div>
                  <div className="mt-2 fs-5">
                    <a href="#" target="_blank" rel="noopener noreferrer" className="text-black me-3">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="text-black me-3">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="text-black me-3">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="text-black me-3">
                      <i className="fa-regular fa-envelope"></i>
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="text-black">
                      <i className="fa-brands fa-linkedin"></i>
                    </a>
                  </div>
              </div>

          </div>

          <div className="text-center mt-4">
            <p className="small">&copy; {new Date().getFullYear()} ECart. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
