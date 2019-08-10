import React from 'react';
import { shallow, mount } from 'enzyme';
import HotelListItem from '../components/hotelListItem';

describe('Render Tests', () => {
  it('should render hotelList container', () => {
    const Wrapper = shallow(<HotelListItem />);
    expect(Wrapper.exists()).toBe(true);
  });

  it('should show Hotel Not Aviliable when any of the data(price, name, address..) is missing', () => {
  });

  it('should show Hotel list when only image is misssing.', () => {
  });

  it('should show placeholder when image is misssing.', () => {
  });

  it('Should show hotel image when aviliable.', () => {
  });

  it('should show hotel name and address', () => {
  });

  it('should show price per night', () => {
  });

  it('should show room type for the hotel', () => {
  });

  it('should show free cancellation btn when aviliable', () => {
  });

  it('should show savings in booking price when applicable', () => {
  });

  it('should show star rating for star rated hotels', () => {
  });

  it('should show circle rating for self rated hotels', () => {
  });
});