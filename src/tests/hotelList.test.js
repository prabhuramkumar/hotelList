import React from 'react';
import { shallow, mount } from 'enzyme';
import HotelList from '../components/hotelList';

describe('HotelList - Render Tests api call test', () => {
  it('should render hotelList', () => {
    const Wrapper = shallow(<HotelList />);
    expect(Wrapper.exists()).toBe(true);
  });

  it('should show error when api call fails', () => {
  });

  it('should show loader when api call is in progress', () => {
  });

  it('Should show HotelList when api call is success and has hotels', () => {
  });

  it('should show price filter api call is success', () => {
  });

  it('should not show error and loader when API call is completed.', () => {
  });

  it('should show No hotel to display message when data is empty', () => {
  });

  it('should not contain any hotelListItem when data is empty', () => {
  });

  it('should show page with dropdown, HotelList and no of hotels message when success.', () => {
  });

});

describe('HotelList - HotelList Tests cases', () => {
  it('should render hotelList', () => {
    const Wrapper = shallow(<HotelList />);
    expect(Wrapper.exists()).toBe(true);
  });

  it('Should contain 1 hotelListItem when data has 1 hotel', () => {
  });

  it('should contain 5 hotelListItem when data has 5 hotels', () => {
  });

});

describe('HotelList - Price filter Tests cases', () => {
  it('should render hotelList', () => {
    const Wrapper = mount(<HotelList />);
    expect(Wrapper.exists()).toBe(true);
  });

  it('should state have default list without price sorting.', () => {
  });

  it('should state have price high-low when sorted descending', () => {
  });

  it('should state have price low-high when sorted ascending', () => {
  });

  it('should have re-rendered hotelList with price sorted.', () => {
  });
});
