import React from 'react';
import Axios from 'axios';
import Swal from 'sweetalert2';
import { Redirect } from 'react-router-dom';



const L_successToast = Swal.mixin({
	toast: true,
	position: "top-end",
	showConfirmButton: false,
	timer: 3000,
	icon: "success",
	title: "Login successfully",
	timerProgressBar: true,
	onOpen: (toast) => {
		toast.addEventListener("mouseenter", Swal.stopTimer);
		toast.addEventListener("mouseleave", Swal.resumeTimer);
	},
});


const L_failToast = Swal.mixin({
	toast: true,
	position: "top-end",
	showConfirmButton: false,
	timer: 3000,
	icon: "error",
	title: "Login fail",
	timerProgressBar: true,
	onOpen: (toast) => {
		toast.addEventListener("mouseenter", Swal.stopTimer);
		toast.addEventListener("mouseleave", Swal.resumeTimer);
	},
});




const R_successToast = Swal.mixin({
	toast: true,
	position: "top-end",
	showConfirmButton: false,
	timer: 3000,
	icon: "success",
	title: "Registred successfully",
	timerProgressBar: true,
	onOpen: (toast) => {
		toast.addEventListener("mouseenter", Swal.stopTimer);
		toast.addEventListener("mouseleave", Swal.resumeTimer);
	},
});


const R_failToast = Swal.mixin({
	toast: true,
	position: "top-end",
	showConfirmButton: false,
	timer: 3000,
	icon: "error",
	title: "Registration fail",
	timerProgressBar: true,
	onOpen: (toast) => {
		toast.addEventListener("mouseenter", Swal.stopTimer);
		toast.addEventListener("mouseleave", Swal.resumeTimer);
	},
});








class Account extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			l_userName: '',
			l_passwrod: '',
			r_userName: '',
			r_email: '',
			r_passwrod: '',
			r_verPass: '',
			redirect: false
		}
	}




	componentDidMount() {
		const jwt = localStorage.getItem('jwt');
		if (jwt) this.setState({ redirect: true });
	}







	handleChange = (e) => {
		e.preventDefault();
		this.setState({
			[e.target.name]: e.target.value
		});


	}




	register = (e) => {
		e.preventDefault();
		const url = 'http://localhost:5000/register';
		const data = {
			userName: this.state.r_userName,
			email: this.state.r_email,
			password: this.state.r_password,
			verPass: this.state.r_verPass
		};

		console.log(this.state.password === this.state.verifyPassword)
		Axios.post(url, data).then(res => {
			localStorage.setItem('jwt', res.data.jwt);
			R_successToast.fire();
			this.setState({
				redirect: true
			});
		}).catch((e) => {
			R_failToast.fire();
		});



	}


	login = (e) => {
		e.preventDefault();
		const url = 'http://localhost:5000/login';
		const data = {
			userName: this.state.l_userName,
			password: this.state.l_password
		};
		Axios.post(url, data).then(res => {
			localStorage.setItem('jwt', res.data.jwt);
			L_successToast.fire();
			this.setState({
				redirect: true
			});
		}).catch((e) => {
			L_failToast.fire();
			
		})
	}




	toggleLogin = (e) => {
		let LoginForm = document.getElementById("LoginForm");
		let RegForm = document.getElementById("RegForm");
		let Lain = document.getElementById("Lain");



		RegForm.style.transform = "translateX(300px)";
		LoginForm.style.transform = "translateX(300px)";
		Lain.style.transform = "translateX(0px)";

	}


	toggleRegister = (e) => {
		let LoginForm = document.getElementById("LoginForm");
		let RegForm = document.getElementById("RegForm");
		let Lain = document.getElementById("Lain");

		RegForm.style.transform = "translateX(0px)";
		LoginForm.style.transform = "translateX(0px)";
		Lain.style.transform = "translateX(100px)";

	}




	render() {
		if (this.state.redirect) return <Redirect to='/' />
		return (
			<>
				<div class="account-page">
					<div class="container">
						<div class="row">
							<div class="col-2">
								<img alt='' src="img/image1.png" width="100%"></img>
							</div>
							<div class="col-2">
								<div class="form-container">
									<div class="form-btn">
										<span onClick={this.toggleLogin}>Login</span>
										<span onClick={this.toggleRegister}>Register</span>
										<hr id="Lain"></hr>
									</div>
									<form id="LoginForm" onSubmit={this.login}>
										<input name='l_userName' className='LOG' type="text" placeholder="Username" onChange={this.handleChange} value={this.state.userName}></input>
										<input name='l_password' className='LOG' type="password" placeholder="Password" onChange={this.handleChange} value={this.state.passwrod}></input>
										<button type="submit" className='LOG' class="btn">Login</button>
										<a href="https://www.facebook.com/habeeb.algheelani.5/">Forget Password</a>
									</form>

									<form id="RegForm" onSubmit={this.register}>
										<input name='r_userName' className='REG' type="text" placeholder="Username" onChange={this.handleChange} value={this.state.userName}></input>
										<input name='r_email' className='REG' type="email" placeholder="Email" onChange={this.handleChange} value={this.state.email}></input>
										<input name='r_password' className='REG' type="password" placeholder="Password" onChange={this.handleChange} value={this.state.passwrod}></input>
										<input name='r_verPass' type="password" placeholder="Password" onChange={this.handleChange} value={this.state.verPass}></input>
										<button type="submit" class="btn">Register</button>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>

			</>
		);
	}
}
export default Account;
