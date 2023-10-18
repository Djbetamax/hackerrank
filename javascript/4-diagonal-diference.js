/**
 * * Complete the 'diagonalDifference' function below.
 *
 * @param arr => 2D_INTEGER_ARRAY arr
 * @returns => INTEGER
 * 
 * @author HackerRank
 */

function diagonalDifference(arr) {
	// Write your code here
	// * Solution by Stack Overflown
	// ! It works on HackerRank

	/**
	 * Create two @var
	 * @var diff => INTEGER => receives the difference between the diagonals
	 * @var length => INTEGER
	 */
	let diff = 0
	const length = arr.length - 1

	/**
	 * Create a for loop that gets an index and 'equipare' to @param arr length
     * Inside it gets the @var diff += the @param arr (diagonal 1 of the 2D array) - the @param arr (diagonal 2 of the 2D array)
	 */
    for (let i = 0; i < arr.length; i++) {
		diff += arr[i][i] - arr[i][length - i]
	}
	/** Return the absolute value of the difference (@param diff)*/
	return Math.abs(diff)
}
console.log(diagonalDifference([11, 2, 4, 4, 5, 6, 10, 8, -12]))