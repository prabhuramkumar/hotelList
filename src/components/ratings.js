import React, {useState} from 'react';
import PropTypes from 'prop-types';

function Ratings(props){
	return (
		<div className="hotel__ratings">
			<p>ratings</p>
		</div>
	)
}

Ratings.propTypes = {
  rating: PropTypes.number.isRequired,
  ratingType: PropTypes.string.isRequired,
  handleRatingChange: PropTypes.func.isRequired,
  hotelId: PropTypes.string.isRequired
};

export default Ratings; 