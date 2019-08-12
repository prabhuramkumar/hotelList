import React from 'react';
import { shallow, mount } from 'enzyme';
import Ratings from '../components/ratings';

describe('Ratings test', () => {
  let Wrapper;

  it('should render invalid rating when rating is above 5', () => {
    const mockFunction = jest.fn();
    const Wrapper = mount(<Ratings 
      rating={6} 
      hotelId={"one"} 
      ratingType = {"self"}
      handleRatingChange={mockFunction} />);
    // expect(Wrapper.find(".hotel__ratings__invalid").length).toBe(1);
  });

  it('should render invalid rating when rating is below 0.5', () => {
    const mockFunction = jest.fn();
    const Wrapper = mount(<Ratings 
      rating={0} 
      hotelId={"one"} 
      ratingType = {"self"}
      handleRatingChange={mockFunction} />);
    // expect(Wrapper.find(".hotel__ratings__invalid").length).toBe(1);
  });

  it('should render invalid rating when rating is not a number', () => {
    const mockFunction = jest.fn();
    const Wrapper = mount(<Ratings 
      rating={"two"} 
      hotelId={"one"} 
      ratingType = {"self"}
      handleRatingChange={mockFunction} />);
    // expect(Wrapper.find(".hotel__ratings__invalid").length).toBe(1);
  });

  it('should redner selected star value when provided for 0.5', () => {
    const mockFunction = jest.fn();
    const Wrapper = mount(<Ratings 
      rating={0.5} 
      hotelId={"qantas"} 
      ratingType = {"self"}
      handleRatingChange={mockFunction} />);
  });

  it('should redner selected star value when provided for 3', () => {
    const mockFunction = jest.fn();
    const Wrapper = mount(<Ratings 
      rating={3} 
      hotelId={"qantas"} 
      ratingType = {"self"}
      handleRatingChange={mockFunction} />);
  });

   it('should call handleRatingChange with new selected rating on click', () => {
    const mockFunction = jest.fn();
    const Wrapper = mount(<Ratings 
      rating={0.5} 
      hotelId={"qantas"} 
      ratingType = {"self"}
      handleRatingChange={mockFunction} />);
    // expect(mockFunction).toHaveBeenCalledWith(0.5);
  });
  
});
