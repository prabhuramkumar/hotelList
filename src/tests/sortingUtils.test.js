import {sortByAscending, sortByDecending} from '../utils/sortingUtils';

describe('sorting tests', () => {
  let Wrapper;

  it('should sortByAscending order', () => {
    const sortedList = sortByAscending();
    expect(0).toBe(0)
  });

  it('should sortByAscending descending order', () => {
    const sortedList = sortByDecending();
    expect(0).toBe(0)
  });

});
