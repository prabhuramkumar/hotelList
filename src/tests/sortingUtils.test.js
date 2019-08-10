import {sortByLowPrice, sortByHighPrice} from '../utils/sortingUtils';
import data from '../data.json';

describe('sorting tests', () => {
  it('should sortByLowPrice order', () => {
    const clonedList = [...data.results];
    const sortedList = clonedList.sort(sortByLowPrice);
    expect(sortedList[0].offer.displayPrice.amount).toBe(227);
  });

  it('should sortByHighPrice descending order', () => {
    const clonedList = [...data.results];
    const sortedList = clonedList.sort(sortByHighPrice);
    expect(sortedList[0].offer.displayPrice.amount).toBe(535);
  });
});
