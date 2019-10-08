/*
Description
	You are asked to cut off trees in a forest for a golf event. The forest is represented as a non-negative 2D map, in this map:
0 represents the obstacle can't be reached.
1 represents the ground can be walked through.
The place with number bigger than 1 represents a tree can be walked through, and this positive number represents the tree's height.
You are asked to cut off all the trees in this forest in the order of tree's height - always cut off the tree with lowest height first. And after cutting, the original place has the tree will become a grass (value 1).
You will start from the point (0, 0) and you should output the minimum steps you need to walk to cut off all the trees. If you can't cut off all the trees, output -1 in that situation.
You are guaranteed that no two trees have the same height and there is at least one tree needs to be cut off.



123
004
765
Output: 6


123
000
765
Output: -1

234
005
876
Output: 6



*/