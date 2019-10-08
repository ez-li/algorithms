/*
There are a total of n courses you have to take, labeled from 0 to n-1.
Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]
Given the total number of courses and a list of prerequisite pairs, is it possible for you to finish all courses?
Example 1:
Input: 3, [[1, 0], [2, 1]]

Output: true

Explanation: There are 3 courses to take. You must take course 0 to take course 1, and you must take course 1 to take course 2, so it’s possible.

Example 2:
Input: 2, [[1, 0], [0, 1]]

Output: false

Explanation: There are 2 courses to take. You must take course 0 to take course 1, but you must take course 1 to take course 0. This is not possible

Notes:
The input prerequisites is a graph represented by a list of edges, not adjacency matrices.
You may assume that there are no duplicate edges in the input prerequisites.

*/