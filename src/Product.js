import React from 'react'
import StarIcon from '@material-ui/icons/Star';

import './Product.css'

function Product({ title, image, price, rating }) {
	return (
		<div className='product'>
			<div className='product__info'>
				<p>{title}</p>
				<p className='product__price'>
					<small>$</small> <strong>{price}</strong>
				</p>
				<div className='product__rating'>{Array(rating).fill().map((_, i) => <p key={i}><StarIcon className="product__ratingStar"/></p>)}</div>
			</div>
			<img src={image} alt={title} />
			<button>Add to Cart</button>
		</div>
	);
}

export default Product
