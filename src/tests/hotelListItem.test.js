import React from 'react';
import { shallow } from 'enzyme';
import HotelListItem from '../components/hotelListItem';
import data from '../data.json';

describe('hotelListItem Render Tests', () => {
  let sampleData = data.results[0];

  it('should hotel list populate', () => {
    const Wrapper = shallow(<HotelListItem hotel={sampleData}/>);
    expect(Wrapper.exists()).toBe(true);
  });
  
  it('should show Hotel Not Aviliable when any of the data(price, name, address..) is missing', () => {
    let newData = JSON.parse(JSON.stringify(sampleData));
    newData.property.title = '';
    const Wrapper = shallow(<HotelListItem hotel={newData}/>);
    expect(Wrapper.find('.list__missing').length).toBe(1);
  });

  it('should show Hotel list when only image is misssing.', () => {
    let newData = JSON.parse(JSON.stringify(sampleData));
    newData.property.previewImage = '';
    const Wrapper = shallow(<HotelListItem hotel={newData}/>);
    expect(Wrapper.find('.list__missing').length).toBe(0);
    expect(Wrapper.find('.list__image').length).toBe(1);
  });

  it('should show placeholder when image is misssing.', () => {
    let newData = JSON.parse(JSON.stringify(sampleData));
    newData.property.previewImage = '';
    const Wrapper = shallow(<HotelListItem hotel={newData}/>);
    expect(Wrapper.find('.list__image img').length).toBe(1);
  });

  it('should show star rating for star rated hotels', () => {
  });

  it('should show circle rating for self rated hotels', () => {
  });
});

describe('hotelListItem happy cases', () => {
  let sampleData = data.results[0];
  const Wrapper = shallow(<HotelListItem hotel={sampleData}/>);
  it('should show hotel name and address', () => {
    expect(Wrapper.find('.list__title').text()).toContain(sampleData.property.title);
  });

  it('should show price per night', () => {
    expect(Wrapper.find('.list__price--duration').text()).toContain(sampleData.offer.displayPrice.currency);
  });

  it('should show room type for the hotel', () => {
    expect(Wrapper.find('.list__roomtype').text()).toContain(sampleData.offer.name);
  });

  it('should show free cancellation when aviliable', () => {
    const Wrapper = shallow(<HotelListItem hotel={data.results[1]}/>);
    expect(Wrapper.find('.list__cancellation').length).toBe(1);
  });

  it('should not show free cancellation when not aviliable', () => {
    expect(Wrapper.find('.list__cancellation').length).toBe(0);
  });

  it('should show savings in booking price when aviliable', () => {
    expect(Wrapper.find('.list__price-savings').length).toBe(1);
  });

  it('should not show savings in booking price when not aviliable', () => {
    const Wrapper = shallow(<HotelListItem hotel={data.results[2]}/>);
    expect(Wrapper.find('.list__price-savings').length).toBe(0);
  });
});