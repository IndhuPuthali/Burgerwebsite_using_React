
import React from 'react';
import './Carousel.css';

function Carousel() {
    return (
        <div className="carousel">
            <div className="text">
               <h1>Start your <br/>BK® order.</h1>
               <button id="btn1">Order Pickup</button><br/>
               <button id="outline">Order Delivery</button>
            </div>
            <div className="image">
                <img src="https://cdn.sanity.io/images/czqk28jt/prod_bk_us/ebf010cdf5b1d00f1906481669f067a4e83409eb-800x450.gif?w=1080&q=90&fit=max&auto=format" alt="" />
            </div>
        </div>
    );
}

export default Carousel;
