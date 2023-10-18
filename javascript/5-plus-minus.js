/**
 * * Complete the 'plusMinus' function below.
 *
 * @param arr =>  INTEGER_ARRAY
 *
 * Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. 
 * @returns Print the decimal value of each fraction on a new line with  places after the decimal.
 */

function plusMinus(arr) {
	// Write your code here
	let positiveArr = arr.filter(el => el > 0);
	let positiveLength = positiveArr.length;
	
	let negativeArr = arr.filter(el => el < 0);
	let negativeLength = negativeArr.length;
	
	let zerosArr = arr.filter(el => el == 0);
	let zerosLength = zerosArr.length;
	
	let arrL = arr.length;

	let resArr = [
		positiveLength / arrL,
		negativeLength / arrL,
		zerosLength / arrL,
	]
	for (let i = 0; i < resArr.length; i++) {
		console.log((resArr[i]));
	}
}

plusMinus([1,1,0,-1,-1]);