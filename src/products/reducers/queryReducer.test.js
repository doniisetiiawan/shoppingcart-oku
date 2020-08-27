import actions from '../../actions/queryActions';
import queryReducer from './queryReducer';

test('query() can set query', () => {
  // arrange
  const query = { text: '' };
  const newQuery = { text: 'apple' };

  // act
  const queryAction = actions.setQuery(newQuery);
  const result = queryReducer(query, queryAction);

  // assert
  expect(result).toEqual(newQuery);
});
