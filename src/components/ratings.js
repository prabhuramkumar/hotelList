import React, {useState} from 'react';
import PropTypes from 'prop-types';

function Ratings(props){
	const [currentRating, setCurrentRating] = useState(props.rating);
	const starTypes = {
		"self": "hotel__style--circle",
		"star": "hotel__style--star"
	}

	const handleClick = (newRating) => {
		setCurrentRating(newRating);
		props.handleRatingChange(newRating);
	}

	const generateStars = (starId, value, starChecked, className)=>{
		return(
			<>
				<input type="radio" id={starId} className="starRadio"  onChange={(e)=>handleClick(value)} name={props.hotelId} value={value} checked={starChecked}/>
				<label className={className} htmlFor={starId}  value={value}  title={value}></label>
			</>
		)
	}

	const generateStarsHalfAndFull = () => {
		let starsArray = [1,2,3,4,5];
		starsArray.reverse();

		if(isNaN(currentRating) || currentRating < 0.5 || currentRating > 5){
			return (
				<p className="hotel__ratings__invalid">Invalid Rating Value</p>
			)
		}

		return (
			<>
				{ 
					starsArray.map((value, index) =>{
						const firstHalfStarValue = 0.5;
						const halfStarValue = value + 0.5;
						const fullStarId = props.hotelId+"_starfull_"+value;
						const halfStarId = props.hotelId+"_starhalf_"+value;
						const firsHalfStarId = props.hotelId+"_starhalf_"+firstHalfStarValue;
						const key = props.hotelId+"_"+index;

						let fullStarChecked = '';
						let halfStarChecked = '';
						let firstHalfStarChecked = '';

						if(currentRating === firstHalfStarValue){
							firstHalfStarChecked = 'checked';
						}

						if(currentRating === value) {
							fullStarChecked = 'checked';
						}

						if(currentRating === halfStarValue){
							halfStarChecked = 'checked';
						}

						return(
							<React.Fragment key={key}>
								{value !== 5 ?
			    					<>
		    							{generateStars(halfStarId, halfStarValue, halfStarChecked, "half")}
			    					</>
			    					:null
			    				}
								{generateStars(fullStarId, value, fullStarChecked, "full")}
			    				
			    				{value === 1 ?
			    					<>
			    						{generateStars(firsHalfStarId, firstHalfStarValue, firstHalfStarChecked, "half")}
			    					</>
			    					:null
			    				}
			    			</React.Fragment>
						)
					})
				}
			</>
		)
	}
	return (
		<div className="hotel__ratings">
			<fieldset className={`hotel__ratings--fieldset  + ${starTypes[props.ratingType]}`}>
			    {generateStarsHalfAndFull()}
			</fieldset>
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