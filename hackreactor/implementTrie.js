/*

Some Context About Tries (just fyi)
Although less common than data structures like array and hashmap, the trie data structure is nonetheless fairly common. You are unlikely to fail a technical interview because you were not terribly familiar with tries, but it is frequently useful for impressively optimizing algorithms that involve searching through large sets of strings or words. A common application of a trie is storing a predictive text or autocomplete dictionary, such as found on a mobile phone. Tries are also well suited for implementing approximate matching algorithms, including those used in spell checking and hyphenation software.

Description

Implement a trie with insert, search, and startsWith methods.

Example:

Trie trie = new Trie();
trie.insert("apple");
trie.search("apple");   // returns true
trie.search("app");     // returns false
trie.startsWith("app"); // returns true
trie.insert("app");   
trie.search("app");     // returns true


Note:
You may assume that all inputs are consist of lowercase letters a-z.
All inputs are guaranteed to be non-empty strings.

*/