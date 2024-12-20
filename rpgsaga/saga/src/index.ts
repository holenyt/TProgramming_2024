import { Employee } from './Employee';

const func = (x: number, a: number = 4.1, b: number = 2.7): number =>
  (b * Math.sqrt(x) - a * log(x, 5)) / log(Math.abs(x - 1), 10);

const log = (x: number, j: number): number => Math.log(x) / Math.log(j);

const taskA = (xStart: number, xEnd: number, xDelta: number): number[] => {
  if (xStart > xEnd || xDelta < 0) {
    throw new Error('You have passed incorrect arguments.');
  }
  const aResult: number[] = [];
  for (let i: number = xStart; i <= xEnd; i += xDelta) {
    aResult.push(func(i));
  }
  return aResult;
};

const taskB = (xs: number[]): number[] => {
  const bResult: number[] = [];
  for (const i of xs) {
    bResult.push(func(i));
  }
  return bResult;
};

export { func, log, taskA, taskB };

const a: Employee = new Employee('Ivan', 17);
const b: Employee = new Employee('Vlad', 18);
const c: Employee = new Employee('Mikhail', 17, 20000);

console.log(a);
console.log(b);
console.log(c);
b.age = 10;
console.log(b);

try {
  c.age = -10;
} catch (e) {
  console.log(e.message);
}

console.log(taskA(1.2, 5.2, 0.8));
console.log(taskB([1.9, 2.15, 2.34, 2.73, 3.16]));
