/**
 * Complete the 'aVeryBigSum' function below.
 *
 * @param arr => LONG_INTEGER_ARRAY
 * @returns LONG_INTEGER.
 */

// * JEITO ENTREGUE NO SITE
// function aVeryBigSum(arr) {
// 	// Write your code here
//    let currentValue = 0;
//    arr.forEach(e => {
//      currentValue = currentValue + e;
//    })
//    return currentValue;
// }

function aVeryBigSum(arr) {
	return arr.reduce((prevValue, accValue) => accValue += prevValue)
}

console.log(aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]));