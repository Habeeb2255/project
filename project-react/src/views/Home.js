import React from 'react';
import {Link} from 'react-router-dom';



class Home extends React.Component {


    render() {
        return (
            <>
                <div className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-2">
                            <h1>Give Your Working<br></br> A New Style!</h1>
                            <p>Success isn't always about greatness. it's about consistency. Consistent<br></br> hard work gains success .Greatness will come.</p>
                            <a href="https://www.facebook.com/habeeb.algheelani.5/" className="btn">Explore Now &#8594;</a>
                        </div>
                        <div className="col-2">
                            <img alt ='' src="img/image1.png"></img>
                        </div>
                    </div>
                    </div>
                </div>
            

            <div className="categories">
                <div className="small-container">
                    <div className="row">
                        <div className="col-3">
                            <img alt ='' src="img/category-1.jpg"></img>
                        </div>
                        <div className="col-3">
                            <img alt ='' src="img/category-2.jpg"></img>
                        </div>
                        <div className="col-3">
                            <img alt ='' src="img/category-3.jpg"></img>
                        </div>
                    </div>
                </div>
            </div>

            <div className="small-container">
                <h2 className="title">Featured Products</h2>
                <div className="row">
                    <div className="col-4">
                        <Link to="/card"><img alt ='' src="img/product-1.jpg"></img></Link>
                        <h4>Red Printed T-Shirt</h4>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-o"></i>
                        </div>
                        <p>$50.00</p>
                    </div>
                    <div className="col-4">
                        <img alt ='' src="img/product-2.jpg"></img>
                        <h4>Black Sport Shose</h4>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-half-o"></i>
                            <i className="fa fa-star-o"></i>
                        </div>
                        <p>$80.00</p>
                    </div>
                    <div className="col-4">
                        <img alt ='' src="img/product-3.jpg"></img>
                        <h4>Gray Pajamas</h4>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-half-o"></i>
                        </div>
                        <p>$90.00</p>
                    </div>
                    <div className="col-4">
                        <img alt ='' src="img/product-4.jpg"></img>
                        <h4>Blue Printed T-Shirt</h4>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-o"></i>
                        </div>
                        <p>$70.00</p>
                    </div>
                </div>
                <h2 className="title">Latest Products</h2>
                <div className="row">
                    <div className="col-4">
                        <img alt ='' src="img/product-5.jpg"></img>
                        <h4>White Winter Shose</h4>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-o"></i>
                        </div>
                        <p>$100.00</p>
                    </div>
                    <div className="col-4">
                        <img alt ='' src="img/product-6.jpg"></img>
                        <h4> Puma T-Shirt</h4>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-half-o"></i>
                            <i className="fa fa-star-o"></i>
                        </div>
                        <p>$80.00</p>
                    </div>
                    <div className="col-4">
                        <img alt ='' src="img/product-7.jpg"></img>
                        <h4>Winter Socks</h4>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-half-o"></i>
                        </div>
                        <p>$10.00</p>
                    </div> 
                    <div className="col-4">
                        <img alt ='' src="img/product-8.jpg"></img>
                        <h4> Black Wriswatch</h4>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                        <p>$150.00</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <img alt ='' src="img/product-9.jpg"></img>
                        <h4> Black Watch</h4>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-half-o"></i>
                            <i className="fa fa-star-o"></i>
                        </div>
                        <p>$50.00</p>
                    </div>
                    <div className="col-4">
                        <img alt ='' src="img/product-10.jpg"></img>
                        <h4>Snake Shose</h4>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-half-o"></i>
                            <i className="fa fa-star-o"></i>
                        </div>
                        <p>$130.00</p>
                    </div>
                    <div className="col-4">
                        <img alt ='' src="img/product-11.jpg"></img>
                        <h4>Light Shose</h4>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-half-o"></i>
                        </div>
                        <p>$80.00</p>
                    </div>
                    <div className="col-4">
                        <img alt ='' src="img/product-12.jpg"></img>
                        <h4>Adidas Pajamas</h4>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-half-o"></i>
                            <i className="fa fa-star-o"></i>
                        </div>
                        <p>$100.00</p>
                    </div>
                </div>
            </div>

            <div className="offer">
                <div className="small-container">
                    <div className="row">
                        <div className="col-2">
                            <img alt ='' src="img/exclusive.png" className="offer-img"></img>
                        </div>
                        <div className="col-2">
                            <p>Exclusively Available on Habeeb</p>
                            <h1>Smart Band 4</h1>
                            <small>The Mi Smart Band 4 features a 39.9% larger (then Mi Band 3) AMOLED color full-touch display with adjustable brightness, so evrything is clear as can be.</small>
                            <a href="https://www.facebook.com/habeeb.algheelani.5/" className="btn"> Buy Now &#8594;</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="testimonial">
                <div className="small-container">
                    <h2 className="title">Our User</h2>
                    <div className="row">
                        <div className="col-3">
                            <i className="fa fa-quote-left"></i>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div className="rating">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star-o"></i>
                            </div>
                            <img alt ='' src="img/2000.png"></img>
                            <h3>Habeeb Algheelany</h3>
                        </div>
                        <div className="col-3">
                            <i className="fa fa-quote-left"></i>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div className="rating">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star-o"></i>
                            </div>
                            <img alt ='' src="img/2000.png"></img>
                            <h3>Habeeb Algheelany</h3>
                        </div>
                        <div className="col-3">
                            <i className="fa fa-quote-left"></i>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div className="rating">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star-o"></i>
                            </div>
                            <img alt ='' src="img/2000.png"></img>
                            <h3>Habeeb Algheelany</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className="brands">
                <div className="small-container">
                    <div className="row">
                        <div className="col-5">
                            <img alt ='' src="img/logo-godrej.png"></img>
                        </div>
                        <div className="col-5">
                            <img alt ='' src="img/logo-oppo.png"></img>
                        </div>
                        <div className="col-5">
                            <img alt ='' src="img/logo-coca-cola.png"></img>
                        </div>
                        <div className="col-5">
                            <img alt ='' src="img/logo-paypal.png"></img>
                        </div>
                        <div className="col-5">
                            <img alt ='' src="img/logo-philips.png"></img>
                        </div>
                    </div>
                </div>
            </div>

            </>
        );

    }
}



export default Home;