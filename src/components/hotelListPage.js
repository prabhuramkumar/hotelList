import React, { useState, useEffect } from 'react';
import HotelList from './hotelList';
import {sortByLowPrice, sortByHighPrice} from '../utils/sortingUtils';

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

	const sortByPrice = (e) => {
		let priceFilterOptions = {
				"low" : sortByLowPrice,
				"high" : sortByHighPrice
			}
		if(e.target.value !== "default") {
			const hotelListCloned = [...hotelList];
			const hotelListPriceSorted = hotelListCloned.sort(priceFilterOptions[e.target.value]);
			setHotelList(hotelListPriceSorted);
		}
	}

	const renderHotelList = () => {

		if(loading){
			return(<p className="hotels__loading">Loading...</p>)
		}
		if(error){
			return(<p className="hotels__error">Error</p>)
		}
    	if(hotelList && hotelList.length > 0) {
            return(
            	<>
            		<div className="">
	            		<p> {hotelList.length} results.</p>
	            		<select className="hotels__pricefilter" onChange={sortByPrice}>
	            			<option value="default">Select</option>
	            			<option value="low">Price: low to high</option>
	            			<option value="high">Price: high to low</option>
	            		</select>
            		</div>
        			<HotelList hotelList={hotelList}></HotelList>
        		</>
            )
        }else
            return (<p className="hotels__nodata">No Hotel results</p>)
        }

   return(
   		<div className="page__hotelsList">
   			{renderHotelList()}
   		</div>
   )
}

export default HotelListPage;