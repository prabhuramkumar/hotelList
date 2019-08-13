import React, { useState, useEffect } from 'react';
import HotelList from './hotelList';
import PropTypes from 'prop-types';
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
	}, [props.url]);

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

	const renderError = () => {
		if(error){
			return(<p className="hotels__error">Hotel list loading error!</p>)
		}
	}

	const renderLoading = () => {
		if(loading){
			return(<p className="hotels__loading">Loading...</p>)
		}
	}

	const renderHotelList = () =>{
		if(error || loading) {
			return null;
		}
		
		if(hotelList && hotelList.length > 0) {
            return(
            	<>
            		<div className="hotels__header">
	            		<p className="hotels__count"> {hotelList.length} results for {props.keyword}.</p>
	            		<select className="hotels__pricefilter" onChange={sortByPrice}>
	            			<option value="default">Select</option>
	            			<option value="low">Price: low to high</option>
	            			<option value="high">Price: high to low</option>
	            		</select>
            		</div>
        			<HotelList hotelList={hotelList}></HotelList>
        		</>
            )
        }else {
            return (<p className="hotels__nodata">No Hotel results</p>)
        }
	}

   return(
   		<div className="page__hotelsList">
   			{renderLoading()}
			{renderError()}
			{renderHotelList()}
   		</div>
   )
}

HotelListPage.propTypes = {
  url: PropTypes.string.isRequired,
  keyword: PropTypes.string.isRequired
};

export default HotelListPage;