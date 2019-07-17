// const reverse = require('./index');
const midpoint = require('./index');

test('Midpoint function exists', () => {
  // expect(reverse).toBeDefined();
  expect(midpoint).toBeDefined();
});

// test('Reverse reverses a string', () => {
//   expect(reverse('abcd')).toEqual('dcba');
// });

// test('Reverse reverses a string', () => {
//   expect(reverse('  abcd')).toEqual('dcba  ');
// });

test('midpoint of a string', () => {
  expect(midpoint('test')).toEqual('es');
  expect(midpoint('a')).toEqual('a');
  expect(midpoint('rohan')).toEqual('h');
});