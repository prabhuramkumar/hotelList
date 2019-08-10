import React from 'react';
import { shallow, mount } from 'enzyme';
import HotelList from '../components/hotelList';
import data from '../data.json';
import { act } from 'react-dom/test-utils';

describe('HotelList - Render Tests api call test', () => {
  let Wrapper;
  const createPromise = (data)=>{
    const mockJsonPromise = Promise.resolve(data); // 2
    return Promise.resolve({ // 3
      json: () => mockJsonPromise,
    });
  }

  afterAll(()=>{
    global.fetch.mockClear();
    delete global.fetch;
  });

  it('should render hotelList', () => {
    Wrapper = mount(<HotelList />);
    expect(Wrapper.exists()).toBe(true);
  });

  it('should show loader when api call is in progress', () => {
    Wrapper = mount(<HotelList />);
    expect(Wrapper.find('.hotels__loading').length).toBe(1);
  });

  // it('should show error when api call fails', done => {
  //   global.fetch = jest.fn().mockImplementation(() => Promise.reject());

  //   Wrapper = mount(<HotelList url={"http://url"}/>);
  //   setImmediate(() => {
  //     Wrapper.update();
  //     expect(Wrapper.find('.hotels__error').length).toBe(1);
  //     done();
  //   });
  // });

  it('should not show error and loader when API call is completed.', done => {
    global.fetch = jest.fn().mockImplementation(() => createPromise(data));
    Wrapper = mount(<HotelList url={"http://url"}/>);
    setImmediate(() => {
      Wrapper.update();
      expect(Wrapper.find('.hotels__error').length).toBe(0);
      expect(Wrapper.find('.hotels__loading').length).toBe(0);
      done();
    });
  });

  it('should not contain any hotelListItem and show No hotel to display message when data is empty', done => {
    global.fetch = jest.fn().mockImplementation(() => createPromise([]));
    Wrapper = mount(<HotelList url={"http://url"}/>);
    setImmediate(() => {
      Wrapper.update();
      expect(Wrapper.find('.hotels__list').length).toBe(0);
      expect(Wrapper.find('.hotels__nodata').length).toBe(1);
      done();
    });
  });

  it('should show page with dropdown, HotelList and number of hotels message when success.', done => {
    global.fetch = jest.fn().mockImplementation(() => createPromise(data));
    Wrapper = mount(<HotelList url={"http://url"}/>);
    setImmediate(() => {
      Wrapper.update();
      expect(Wrapper.find('.hotels__list').length).toBe(1);
      done();
    });
  });

  it('Should contain 1 hotelListItem when data has 1 hotel', () => {

  });

  it('should contain 5 hotelListItem when data has 5 hotels', done => {
      global.fetch = jest.fn().mockImplementation(() => createPromise(data));
      Wrapper = mount(<HotelList url={"http://url"}/>);
      setImmediate(() => {
        Wrapper.update();
        expect(Wrapper.find('.list__item').length).toBe(5);
        done();
      });
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
