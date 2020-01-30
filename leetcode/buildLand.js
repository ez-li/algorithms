/*
Given input array of integers, build land string
Input: [3,0,2]
Output: '+
		 + +
		 + +'
*/

var buildLand = function(array) {
	var output = [];
	var buildRow = function(array) {
		var row = '';
		for (var i = 0; i < array.length; i += 1) {
			if (array[i] > 0) {
				row += '+';
				array[i] = array[i] - 1;
			} else {
				row += ' ';
			}
		}
		output.unshift(row);
	}
	while (array.reduce(function(a, b) { return a + b}, 0) !== 0) {
		buildRow(array);
	}
	return output;
}