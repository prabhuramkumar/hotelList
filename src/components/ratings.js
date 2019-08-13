import React, {useState} from 'react';
import PropTypes from 'prop-types';

function Ratings(props){
	const [newRating, setNewRating] = useState(props.rating);

	const handleClick = (rating) => {
		setNewRating(rating);
		props.handleRatingChange(rating);
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

		if(isNaN(newRating) || newRating < 0.5 || newRating > 5){
			return (
				<p className="hotel__ratings__invalid">Invalid Rating Value</p>
			)
		}

		return (
			<>
				{ 
					starsArray.map((value, index) =>{
						const halfId = props.hotelId+"_starhalf";
						const fullId = props.hotelId+"_starfull";
						const fullStarId = fullId+value;
						const halfStarId = halfId+value;
						const firstHalfStarValue = 0.5;
						const halStarValue = value + 0.5;
						const key = props.hotelId+"_"+index;

						let fullStarChecked = '';
						let halfStarChecked = '';
						let firstHalfStarChecked = '';

						if(newRating === firstHalfStarValue){
							firstHalfStarChecked = 'checked';
						}

						if(newRating === value) {
							fullStarChecked = 'checked';
						}

						if(newRating === halStarValue){
							halfStarChecked = 'checked';
						}

						return(
							<React.Fragment key={key}>
								{generateStars(fullStarId, value, fullStarChecked, "full")}
			    				{value !== 5 ?
			    					<>
		    							{generateStars(halfStarId, halStarValue, halfStarChecked, "half")}
			    					</>
			    					:null
			    				}
			    				{value === 1 ?
			    					<>
			    						{generateStars(halfId, firstHalfStarValue, firstHalfStarChecked, "half")}
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
			<fieldset className="hotel__ratings--fieldset">
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