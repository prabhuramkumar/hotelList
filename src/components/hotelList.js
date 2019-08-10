import React from 'react';

function HotelList(props){

	const createHotelList = () => {

	    if (props.hotelList && props.hotelList.length > 0) {
	      return (
	        <ul className="hotels__list">
	          {props.hotelList.map(item => (
	            <li key={item.id} className="list__item">
		    		<div className="list__image">image</div>
		    		<div className="list__content">content</div>
		    		<div className="list__price">{item.offer.displayPrice.amount}</div>
		        </li>
	          ))}
	        </ul>
	      );
	    } else {
	      return (<p className="list__nodata">There are no items to list!</p>);
	    }
  	}

   return(
   		<>
        	{createHotelList()}
        </>
   )
}


export default HotelList;