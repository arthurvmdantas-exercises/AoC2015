import { input } from "../inputs/day1";

export function Day1Puzzle1() {
  let floor = 0;

  input.split('').forEach(value => value === "(" ? floor++ : floor--);

  return floor;
}

export function Day1Puzzle2() {
  let floor = 0;
  let index = 0;

  input.split('').every((value, idx) => {
    value === "(" ? floor++ : floor--;
    index = idx;
    if (floor === -1) return false;
    return true;
  });

  return index + 1;
}