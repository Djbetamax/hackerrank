/**
 * * Complete the 'simpleArraySum' function below.
 *
 * @param arr => INTEGER_ARRAY
 * @returns INTERGER
 */

function simpleArraySum(arr) {
	/**
	 * Takes the Array (@param arr) and reduce passing 2 params.
	 * The @param prevValue represents the previously number on the array and the @param accValue represents the actual value accumulated on the array.
	 * So in the end of the sum will apear as result.
	 * */
	return arr.reduce((prevValue, accValue) => (accValue += prevValue))
}

console.log(simpleArraySum([1, 5, 9, 2, 10, 6, 3, 8, 7]))