//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const factors = {
  3 : 'Pling',
  5 : 'Plang',
  7 : 'Plong'
};
export const convert = (number) => {
  return Object.entries(factors).map(([factor,res]) => number % factor === 0 ? res : '').join('') || '' + number;
};
