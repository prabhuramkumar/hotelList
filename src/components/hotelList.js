import React from 'react';
import HotelListItem from './hotelListItem';

function HotelList(props){

   return(
        <ul className="hotel__list">
            <HotelListItem></HotelListItem>
        </ul> 
   )
}


export default HotelList;