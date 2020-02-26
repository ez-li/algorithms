/*
Find anagrams in list and print separately by group
*/

var words = ['monk', 'konm', 'nkom', 'dell', 'edll', 'cbb', 'bbc'];

var sortWord = function(str) {
    return str.split('').sort(caseInsensitiveSort).join('');
}

var findAnagrams = function(arr) {
    var anagrams = {};
    var ouput = [];

    for (var i in arr) {
        var word = arr[i];
        var sorted = sortWord(word);

        if (!anagrams[sorted]) {
            anagrams[sorted] = [word];
        } else {
            anagram[sorted].push(word);
        }
    }

    for (var key in anagrams) {
        var words = anagrams[key].join(' ,');
        output.push(words);
    }
    
    return output.join('\n');

}
