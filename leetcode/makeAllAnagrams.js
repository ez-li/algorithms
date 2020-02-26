/* Make all anagrams or permutations of given string */


var allAnagrams = function(str) {
	var letters = str.split('');
	var output = [];

	var recurseLetters = function(curr, letters) {
		if (curr.length === str.length) {
			output.push(curr);
		} else {
			for (var i = 0; i < letters.length; i ++) {
				var newLetters = letters.slice(0, i).concat(letters.slice((i + 1)));
				recurseLetters((curr + letters[i]), newLetters);
			}
		}
	}

	recurseLetters('', letters);

	return output;
}



var anagrams = allAnagrams('abc');
console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' 



