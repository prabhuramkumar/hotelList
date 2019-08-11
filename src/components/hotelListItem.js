import React from 'react';
import PropTypes from 'prop-types'

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
				<p className="list__price-savings">${offer.savings.amount}</p>
			)
		}
	}

	const ratings = () => {
		if(!property.rating){
			return null;
		}
		const {ratingValue, ratingType} = property.rating;
		return (
			<p className="list__rating">{ratingType}: {ratingValue}</p>
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
				<div className="list__image">
					{propertyImage()}
				</div>
	    		<div className="list__content">
	    			<div className="list__header">
	    				<h3 className="list__title">{property.title}</h3>
	    				{ratings()}
	    			</div>
	    			<p className="list__roomtype">{offer.name}</p>
	    			{cancellation()}
	    		</div>
	    		<div className="list__price">
	    			<p className="list__price--duration">1 night total ({offer.displayPrice.currency})</p>
	    			<p className="list__price-amount">${offer.displayPrice.amount}</p>
	    			{savings()}
	    		</div>
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