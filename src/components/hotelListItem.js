import React from 'react';

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
				<div className="list__image"><img src={property.url} alt={property.previewImage.caption} /></div>
	    		<div className="list__content">
	    			<h3 className="list__title">{property.title}</h3>
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


export default HotelListItem;