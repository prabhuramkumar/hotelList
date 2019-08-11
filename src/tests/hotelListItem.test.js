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

  it('should show Hotel list even when only image is misssing.', () => {
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
    expect(Wrapper.find('.placeholder__image').length).toBe(1);
  });

  it('should not show circle/star rating when not aviliable', () => {
    let newData = JSON.parse(JSON.stringify(sampleData));
    newData.property.rating = '';
    const Wrapper = shallow(<HotelListItem hotel={newData}/>);
    expect(Wrapper.find('.list__rating').length).toBe(0);
  });

  it('should show circle rating for self rated hotels', () => {
    const Wrapper = shallow(<HotelListItem hotel={sampleData}/>);
    expect(Wrapper.find('.list__rating').text()).toContain(4.5);
    expect(Wrapper.find('.list__rating').text()).toContain("self");
  });

  it('should show start rating for star rated hotels', () => {
    const Wrapper = shallow(<HotelListItem hotel={data.results[2]}/>);
    expect(Wrapper.find('.list__rating').text()).toContain(4);
    expect(Wrapper.find('.list__rating').text()).toContain("star");
  });

  it('should show address with comma for more than one line and no comma for last line.', () => {
    const Wrapper = shallow(<HotelListItem hotel={data.results[0]}/>);
    expect(Wrapper.find('.list__address span').first().text()).toContain(',');
    expect(Wrapper.find('.list__address span').last().text()).not.toContain(',');
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

  it('should promotion type when aviliable', () => {
    const Wrapper = shallow(<HotelListItem hotel={data.results[2]}/>);
    expect(Wrapper.find('.list__promotion').text()).toBe('Red Hot');
  });
});