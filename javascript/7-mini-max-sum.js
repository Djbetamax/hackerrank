/**
 * * Complete the 'miniMaxSum' function below.
 * 
 * Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. 
 * Then print the respective minimum and maximum values as a single line of two space-separated long integers.
 *
 * @param arr INTEGER_ARRAY
 */

function miniMaxSum(arr) {
	// Write your code here
	let maxSum = 0;
	let minSum = 0;
	let maxVal = arr.at(0);
	let minVal = arr.at(0);

	// * Mini
	for (let i = 0; i < arr.length; i++) {
		// Se o número a partir do index da Array for maior que Valor Máximo...
		if (arr.at(i) > maxVal) {
			// ...Valor Máximo será o número a partir do index da Array
			maxVal = arr.at(i);
		}
		// Se não Resultado Final Minimo será somado ou igual a partir do index da Array
		minSum += arr.at(i);
	}
	// Após o laço pega o Resultado Final Mínimo e subtrai com o Valor Máximo descoberto.
	minSum -=maxVal;

	// * Max
	for (let i = 0; i < arr.length; i++) {
		// Se o número a partir do index da Array for menor que Valor Mínimo...
		if (arr.at(i) < minVal) {
			// ...Valor Mínimo será o número a partir do index da Array
			minVal = arr.at(i);
		}
		// Se não Resulsado Final Máximo será somado ou igual a partir do index da Array
		maxSum += arr.at(i);
	}
	// Após o laço pega o resultado Final Máximo e subtrai com o Valor Mínimo descoberto.
	maxSum -= minVal;

	console.log(minSum + " " + maxSum);
}
miniMaxSum([1, 2, 3, 4, 5]);