import React, { useState, useEffect } from 'react';
import HotelList from './hotelList';

function HotelListPage(props){
	const [hotelList, setHotelList] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	useEffect(()=> {
		const fetchHotels = () => {
			try{
				fetch(props.url).then(response => response.json()).then((data) => {
					setHotelList(data.results)
					setLoading(false);
				}).catch((e) => {
					throw e;
				});
			}catch(e){
				setError(true);
				setLoading(false);
			}
		}
		if(props.url){
			fetchHotels();
		}
	}, []);

	const renderHotelList = () => {

		if(loading){
			return(<p className="hotels__loading">Loading...</p>)
		}
		if(error){
			return(<p className="hotels__error">Error</p>)
		}
    	if(hotelList && hotelList.length > 0) {
            return(
        		<HotelList hotelList={hotelList}></HotelList>
            )
        }else
            return (<p className="hotels__nodata">No Hotel results</p>)
        }

   return(
   		<>
   			{renderHotelList()}
   		</>
   )
}

export default HotelListPage;