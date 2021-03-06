import React from 'react';
import { shallow, mount } from 'enzyme';
import HotelListPage from '../components/HotelListPage';
import data from '../data.json';

describe('HotelListPage - Render Tests api call test', () => {
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

  it('should render HotelListPage', () => {
    Wrapper = mount(<HotelListPage />);
    expect(Wrapper.exists()).toBe(true);
  });

  it('should show loader when api call is in progress', () => {
    Wrapper = mount(<HotelListPage />);
    expect(Wrapper.find('.hotels__loading').length).toBe(1);
  });

  // it('should show error when api call fails', done => {
  //   global.fetch = jest.fn().mockImplementation(() => Promise.reject());

  //   Wrapper = mount(<HotelListPage url={"http://url"}/>);
  //   setImmediate(() => {
  //     Wrapper.update();
  //     expect(Wrapper.find('.hotels__error').length).toBe(1);
  //     done();
  //   });
  // });

  it('should not show error and loader when API call is completed.', done => {
    global.fetch = jest.fn().mockImplementation(() => createPromise(data));
    Wrapper = mount(<HotelListPage url={"http://url"}/>);
    setImmediate(() => {
      Wrapper.update();
      expect(Wrapper.find('.hotels__error').length).toBe(0);
      expect(Wrapper.find('.hotels__loading').length).toBe(0);
      done();
    });
  });

  it('should not contain any HotelList and show No hotel to display message when data is empty', done => {
    global.fetch = jest.fn().mockImplementation(() => createPromise({}));
    Wrapper = mount(<HotelListPage url={"http://url"}/>);
    setImmediate(() => {
      Wrapper.update();
      expect(Wrapper.find('.hotels__list').length).toBe(0);
      expect(Wrapper.find('.hotels__nodata').length).toBe(1);
      done();
    });
  });

  it('should show HotelList when success.', done => {
    global.fetch = jest.fn().mockImplementation(() => createPromise(data));
    Wrapper = mount(<HotelListPage url={"http://url"}/>);
    setImmediate(() => {
      Wrapper.update();
      expect(Wrapper.find('.hotels__list').length).toBe(1);
      done();
    });
  });

   describe('price sorting tests', () => {
    beforeEach(done => {
      global.fetch = jest.fn().mockImplementation(() => createPromise(data));
        Wrapper = mount(<HotelListPage url={"http://url"}/>);
        setImmediate(() => {
          Wrapper.update();
          expect(Wrapper.find('.hotels__list').length).toBe(1);
          done();
        });
    });

    it('should state have price low-high when sorted descending', () => {
      Wrapper.find('.hotels__pricefilter').simulate('change', { target: { value: 'low' } });
      let sortedPrice = Wrapper.find('.list__price').first().text();
      expect(sortedPrice).toContain("227");
    });

    it('should state have price high-low when sorted ascending', () => {
      Wrapper.find('.hotels__pricefilter').simulate('change', { target: { value: 'high' } });
      let sortedPrice = Wrapper.find('.list__price').first().text();
      expect(sortedPrice).toContain("535");
    });
  })
});
