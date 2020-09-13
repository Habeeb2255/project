import React from 'react';



class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mainImg: 'img/gallery-4.jpg'
        }
    }


        toggle = (e) => {
            e.preventDefault();
            this.setState({
                mainImg: e.target.src
            })
        }

    render() {
        return (
            <>

                <div class="small-container single-product">
                    <div class="row">
                        <div class="col-2">
                            <img  alt='' src={this.state.mainImg} width="100%" id="ProductImg"></img>
                            <div class="small-img-row">
                                <div class="small-img-col">
                                    <img  alt='' src="img/gallery-1.jpg" width="100%" class="small-img"  onClick={this.toggle}></img>
                                </div>
                                <div class="small-img-col">
                                    <img  alt='' src="img/gallery-2.jpg" width="100%" class="small-img" onClick={this.toggle}></img>
                                </div>
                                <div class="small-img-col">
                                    <img  alt='' src="img/gallery-3.jpg" width="100%" class="small-img" onClick={this.toggle}></img>
                                </div>
                                <div class="small-img-col">
                                    <img  alt='' src="img/gallery-4.jpg" width="100%" class="small-img" onClick={this.toggle}></img>
                                </div>
                            </div>
                        </div>
                        <div class="col-2">
                            <p>Home / T-Shirt</p>
                            <h1>Red Printd T-Shirt by HRX</h1>
                            <h4>$50.00</h4>
                            <select>
                                <option>Select Size</option>
                                <option>XXL</option>
                                <option>XL</option>
                                <option>Large</option>
                                <option>Medium</option>
                                <option>Small</option>
                            </select>
                            <input type="number" value="1"></input>
                            <a href="https://www.facebook.com/habeeb.algheelani.5/" class="btn">Add To Cart</a>
                            <h3>Product Details <i class="fa fa-indent"></i></h3>
                            <br></br>
                            <p>Give your summer wardrobe a style upgrade with the HRX Men's Active T-Shirt. Team it with a pair of shorts for your morning workoutor a denims for an evening out with the guys.</p>
                        </div>
                    </div>
                </div>
                <div class="small-container">
                    <div class="row row-2">
                        <h2>Related Products</h2>
                        <p>View More</p>
                    </div>
                </div>



                <div class="small-container">
                    <div class="row">
                        <div class="col-4">
                            <img  alt='' src="img/product-9.jpg"></img>
                            <h4> Black Watch</h4>
                            <div class="rating">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star-half-o"></i>
                                <i class="fa fa-star-o"></i>
                            </div>
                            <p>$50.00</p>
                        </div>
                        <div class="col-4">
                            <img  alt='' src="img/product-10.jpg"></img>
                            <h4>Snake Shose</h4>
                            <div class="rating">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star-half-o"></i>
                                <i class="fa fa-star-o"></i>
                            </div>
                            <p>$130.00</p>
                        </div>
                        <div class="col-4">
                            <img  alt='' src="img/product-11.jpg"></img>
                            <h4>Light Shose</h4>
                            <div class="rating">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star-half-o"></i>
                            </div>
                            <p>$80.00</p>
                        </div>
                        <div class="col-4">
                            <img  alt='' src="img/product-12.jpg"></img>
                            <h4>Adidas Pajamas</h4>
                            <div class="rating">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star-half-o"></i>
                                <i class="fa fa-star-o"></i>
                            </div>
                            <p>$100.00</p>
                        </div>
                    </div>
                </div>
            </>
        );
    }

}


export default Card;