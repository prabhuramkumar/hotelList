import React from 'react';
import PropTypes from 'prop-types';
import Ratings from './ratings';

function HotelListItem(props){
	let {offer, property} = props.hotel;

	const cancellation = () => {
		if(offer.cancellationOption.cancellationType === 'FREE_CANCELLATION'){
			return (
				<p className="list__cancellation">Free Cancellation</p>
			)
		}
	}

	const savings = () => {
		if(offer.savings !== null){
			return (
				<p className="list__price-savings">Save: ${offer.savings.amount}</p>
			)
		}
	}

	const handleRatingChange = ()=>{
		return true;
	}

	const ratings = () => {
		if(!property.rating){
			return null;
		}
		const {ratingValue, ratingType} = property.rating;
		return (
			<Ratings rating={ratingValue} 
			hotelId={props.hotel.id} 
			ratingType = {ratingType}
			handleRatingChange={handleRatingChange} />
		)
	}

	const address = () => {
		let comma;
		return (
			<div className="list__address">
				{
					property.address.map((item, index) => { 
						comma = (index+1) < property.address.length ? ", " : ''
						return(
							<span key={index}>{item}{comma}</span>
						)
					}
				)}
			</div>
		)
	}

	const imageSection = () => {
		return (
			<div className="list__image">
				{propertyImage()}
				<span className="list__promotion">{offer.promotion.title}</span>
			</div>
		)
	}

	const contentSection = () => {
		return (
			<div className="list__content">
				<div className="list__header">
					<h3 className="list__title">{property.title}</h3>
					{address()}
					{ratings()}
				</div>
				<p className="list__roomtype">{offer.name}</p>
				{cancellation()}
			</div>
		)
	}

	const priceSection = () => {
		return (
			<div className="list__price">
				<p className="list__price--duration">1 night total ({offer.displayPrice.currency})</p>
				<p className="list__price-amount">${offer.displayPrice.amount}</p>
				{savings()}
			</div>
		)
	}

	const propertyImage = () => {
		let {url, caption} = property.previewImage;
		let placeholderUrl = "../placeholder.png";
		let imageClass; 
		if(!property.previewImage){
		 	url = placeholderUrl;
			caption = property.title;
			imageClass = "placeholder__image";
		}
		return(
			<img className={imageClass} src={url} alt={caption} />
		)
	}

	const createListItem = ()=>{
		if(!property.title || 
			!offer.displayPrice.amount || 
			!property.address || 
			property.address.length < 1 )
		{
			return (
				<p className="list__missing">Hotel not bookable</p>
			)
		}
		return (
			<>
				{imageSection()}
				{contentSection()}
				{priceSection()}
			</>
		)
	}	

   return(
   		<>
        	{createListItem()}
        </>
   )
}

HotelListItem.propTypes = {
  hotel: PropTypes.object.isRequired
};


export default HotelListItem;