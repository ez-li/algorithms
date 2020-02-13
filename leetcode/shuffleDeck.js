/* shuffle deck */

var shuffle = function(array) {
	
	for (var i = 0; i < array.length; i += 1) {
		var randIndex = Math.floor(Math.random()*(array.length-1));
		var temp = array[i];
		array[i] = array[randIndex];
		array[randIndex] = temp;
	}
	return array;

}