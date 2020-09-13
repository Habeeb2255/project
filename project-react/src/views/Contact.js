import React from 'react';
import { NavLink} from 'react-router-dom';

class Contact extends React.Component {
	render() {
		return (
			<>
				<div class="account-page">
					<div class="container">
						<div class="row">
							<div class="col-2">
								<img alt='' src="img/image1.png" width="100%"></img>
							</div>
							<div class="col-2">
								<form class="contact-form">
									<input type="text" class="put-from" placeholder="Your-Name"></input>
									<input type="number" class="put-from" placeholder="Phone no."></input>
									<input type="email" class="put-from" placeholder="Email id"></input>
									<textarea class="form-control" rows="4" placeholder="Message"></textarea>
									<button type="submit" class="btn">SEND MESSAGE</button>
								</form>
								<div class="contact-form-2">
									<div class="follow"><b>Address:</b><i class="fa fa-map-marker"></i>  XYZ Malle, Ariana, TUN</div>
									<div class="follow"><b>Phone:</b><i class="fa fa-phone"></i>  +216 53 48 25 71</div>
									<div class="follow"><b>Email:</b><i class="fa fa-envelope"></i>  tsmm419habeeb@gmail.com</div>
									<div class="follow"><label><b>Get Soial:</b></label>
										<NavLink to="/"><i class="fa fa-facebook"></i></NavLink>
										<NavLink to="/"><i class="fa fa-youtube"></i></NavLink>
										<NavLink to="/"><i class="fa fa-twitter"></i></NavLink>
										<NavLink to="/"><i class="fa fa-google"></i></NavLink>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		)
	}
}
export default Contact;