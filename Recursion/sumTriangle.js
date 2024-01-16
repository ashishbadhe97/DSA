/**
 * Sum triangle from array
 *
 * https://www.geeksforgeeks.org/sum-triangle-from-array/
 *
 **/

const sumTriangle = (arr, n) => {
  let newArr = [];

  for (let i = 0; i < arr.length - 1; i++) {
    let sum = arr[i] + arr[i + 1];

    newArr.push(sum);
  }

  console.log(newArr.toString());
  if (arr.length === 1) {
    return;
  }

   sumTriangle(newArr, n + 1);
};

sumTriangle([1, 2, 3, 4, 5], 1);
