import React from 'react';

class Footer extends React.Component {


    render() {
        return (
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="footer-col-1">
                            <h3>Download Our App</h3>
                            <p>Download App for Android and ios mobile phone.</p>
                            <div className="app-logo">
                                <img alt='' src="img/play-store.png"></img>
                                <img alt='' src="img/app-store.png"></img>
                            </div>
                        </div>
                        <div className="footer-col-2">
                            <img alt='' src="img/habeeb1.png"></img>
                            <p>Our Purpose Is To Sustainably Make the Pleasure and Benefits of Sports Accessible to the Many.</p>
                        </div>
                        <div className="footer-col-3">
                            <h3>Useful Links</h3>
                            <ul>
                                <li>Coupons</li>
                                <li>Blog Post</li>
                                <li>Reurn Policy</li>
                                <li>Join Affiliate</li>
                            </ul>
                        </div>
                        <div className="footer-col-4">
                            <h3>Follow Us</h3>
                            <ul>
                                <li>Facebook</li>
                                <li>Twitter</li>
                                <li>Instagram</li>
                                <li>YouTube</li>
                            </ul>
                        </div>
                    </div>
                    <hr></hr>
                    <p className="Copy">Copy&Right 2020 - Habeeb Algheelany</p>
                </div>
            </div>
        );
    }
}


export default Footer; 