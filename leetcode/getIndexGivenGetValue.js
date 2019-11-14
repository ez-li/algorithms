/*
Given a function get_value(i) --> a value in an list at index i if i is less than the length of the list, otherwise the function will return null/None.
You can't access this list -- the list is sorted.

[1, 2, 3, 4, 5]
get_value(0) --> 1
get_value(6) --> null

get_index(val) --> you need to find val in the list --> return the index if you can find it, and return null/None if you can't find it. 

get_index(2) --> 1
get_index(6) --> null
*/ 


get_index = function(val) {
  var i = 1;
  var listLength;
  while (get_value(i) !== null) {
    i *= 2;
    listLength = i;
  }
  
  var bSearch = function(val, start, end) {
    
    var mid = (end - start)/2;
    
    if (get_value(mid) === val) {
      return mid;
    }
    if (start === end) {
      return null;
    }
    if (get_value(mid) < val) {
      return bSearch(val, start, mid);
    }
    if (get_value(i) > val) {
      return bSearch(val, mid, end);
    }
  }
  
  return bSearch(val, 0, listLength);
  
}

/*
  var i = 0;
  while (get_value(i) !== null) {
    if (get_value(i) === val) {
      return i;
    }
    if (get_value(i) > val) {
      return null;
    }
    i += 1;
  } 
  return null;
*/