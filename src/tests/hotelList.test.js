import React from 'react';
import { shallow, mount } from 'enzyme';
import HotelList from '../components/HotelList';
import data from '../data.json';

describe('HotelList - Render Tests api call test', () => {
  let Wrapper;

  it('should show no hotel to display when empty data passed', () => {
    const Wrapper = shallow(<HotelList hotelList={[]} />);
    expect(Wrapper.find('.list__item').length).toBe(0);
    expect(Wrapper.find('.list__nodata').length).toBe(1);
  });

  it('should contain 1 HotelList when data has 1 hotels', () => {
    const singleData = [data.results[0]];
    const Wrapper = shallow(<HotelList hotelList={singleData} />);
    expect(Wrapper.find('.list__item').length).toBe(1);
  });

  it('should contain 5 HotelList when data has 5 hotels', () => {
    const Wrapper = shallow(<HotelList hotelList={data.results} />);
    expect(Wrapper.find('.list__item').length).toBe(5);
  });
});
