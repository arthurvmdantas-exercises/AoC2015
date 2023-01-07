import { input } from "../inputs/day2";

interface BoxDimension {
  length: number;
  width: number;
  height: number;
}

type Dimensions = `${number}x${number}x${number}`;

/**
* Transform the "NNxNNxNN" representation to an object
*/
function GetObject(dimensions: Dimensions): BoxDimension {
  const split = dimensions.split('x');
  return {
    length: Number(split[0]),
    width: Number(split[1]),
    height: Number(split[2])
  }
}

/**
* For each box, calculate its area and add to the total
*/
export function Day2Puzzle1(): number {
  let totalArea = 0;
  input.forEach((value) => {
    const obj = GetObject(value as Dimensions);
    const area1 = obj.height * obj.length;
    const area2 = obj.height * obj.width;
    const area3 = obj.length * obj.width;

    totalArea += 2 * (area1 + area2 + area3) + Math.min(area1, area2, area3);
  });

  return totalArea;
}

export function Day2Puzzle2(): number {
  let totalLength = 0;
  input.forEach((value) => {
    const obj = GetObject(value as Dimensions);
    const perimeter = 2 * Math.min(
      obj.length + obj.width,
      obj.length + obj.height,
      obj.height + obj.width
    );
    const volume = obj.length * obj.height * obj.width;
    totalLength += perimeter + volume;
  });

  return totalLength;
}