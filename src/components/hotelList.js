import React from 'react';
import HotelListItem from './hotelListItem';
import PropTypes from 'prop-types';

function HotelList(props){

	const createHotelList = () => {
	    if (props.hotelList && props.hotelList.length > 0) {
	      return (
	        <ul className="hotels__list">
	          {props.hotelList.map(item => (
	            <li key={item.id} className="list__item">
	            	<HotelListItem hotel={item}></HotelListItem>
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

HotelList.propTypes = {
  hotelList: PropTypes.array.isRequired
};


export default HotelList;