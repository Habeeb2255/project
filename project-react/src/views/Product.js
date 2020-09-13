import React from 'react';
import { Link } from 'react-router-dom';



const data = [
	{
		img: "img/product-1.jpg",
		name: 'Read Printed T-Shirt',
		price: '$50.00'
	},
	{
		img: "img/product-2.jpg",
		name: 'Read Printed T-Shirt',
		price: '$50.00'
	},
	{
		img: "img/product-3.jpg",
		name: 'Read Printed T-Shirt',
		price: '$50.00'
	},
	{
		img: "img/product-4.jpg",
		name: 'Read Printed T-Shirt',
		price: '$50.00'
	},
	{
		img: "img/product-5.jpg",
		name: 'Read Printed T-Shirt',
		price: '$50.00'
	},
	{
		img: "img/product-6.jpg",
		name: 'Read Printed T-Shirt',
		price: '$50.00'
	},
	{
		img: "img/product-7.jpg",
		name: 'Read Printed T-Shirt',
		price: '$50.00'
	},
	{
		img: "img/product-8.jpg",
		name: 'Read Printed T-Shirt',
		price: '$50.00'
	},
	{
		img: "img/product-9.jpg",
		name: 'Read Printed T-Shirt',
		price: '$50.00'
	},
	{
		img: "img/product-10.jpg",
		name: 'Read Printed T-Shirt',
		price: '$50.00'
	},
	{
		img: "img/product-11.jpg",
		name: 'Read Printed T-Shirt',
		price: '$50.00'
	},
	{
		img: "img/product-12.jpg",
		name: 'Read Printed T-Shirt',
		price: '$50.00'
	},
];

function Prodoue(props) {
	return (
		<>
			<div class={props.class}>
				<img alt='' src={props.image} class={props.classImg}></img>
				<Link to='/card'>{props.card1}</Link>
				<h4>{props.name}</h4>
				<div class="rating">
					<i class="fa fa-star"></i>
					<i class="fa fa-star"></i>
					<i class="fa fa-star"></i>
					<i class="fa fa-star-half-o"></i>
					<i class="fa fa-star-o"></i>
				</div>
				<p>${props.price}</p>
			</div>
		</>
	)
}


class Product extends React.Component {

	render() {
		return (
			<>
				<div class="small-container">
					<div class="row row-2">
						<h2>All Prouducts</h2>
						<select>
							<option>Default Shorting</option>
							<option>Short by price</option>
							<option>Short by popularity</option>
							<option>Short by rating</option>
							<option>Short by sale</option>
						</select>
					</div>
					<div class="row">
						{data.map((item, index) => {
							if(index > 7) {
								return<></>;
							}	else {
								if(index === 0){
									return <Prodoue key={index} class='col-4' card1={<img alt=''  src={item.img}></img>}   name={item.name} price={item.price} /> 
								} else {

									return <Prodoue key={index} class='col-4' image={item.img} name={item.name} price={item.price} />;
								}
							}
						})}


					</div>
					<div class="row">
					{data.map((item, index) => {
							if(index < 8) {
								return <></>;
							}	else {
								 return <Prodoue key={index} class='col-4' image={item.img} name={item.name} price={item.price} />;
							}
						})}
					</div>
					<div class="page-btn">
						<span>1</span>
						<span>2</span>
						<span>3</span>
						<span>4</span>
						<span>&#8594;</span>
					</div>
				</div>
			</>
		);
	}
}

export default Product;
















