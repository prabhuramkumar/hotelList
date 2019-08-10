import React from 'react';

function HotelListItem(props){

	const createHotelList = ()=>{
		return props.hotelList.map(item => {
			return(
				<li key={item.id} className="list__item">
		    		<div className="list__image">image</div>
		    		<div className="list__content">content</div>
		    		<div className="list__price">price</div>
		        </li>
        	)
		})
	}	

   return(
   		<ul className="hotels__list">
        	{createHotelList()}
        </ul>
   )
}


export default HotelListItem;