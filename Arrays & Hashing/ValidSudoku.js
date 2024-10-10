/*

Input: board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]


Output: true

*/

/*

TC: O(n ^ m);
SC: O(1) Each cell stores 3 string (row,col,box) hence total string 3 * 81 = 243. O(243) = O(1);

Since there are only 9 elements complexity will remain constant
*/

var isValidSudoku = function (board) {
  for (i = 0; i < board.length; i++) {
    let set = new Set();
    for (let j = 0; j < board[i].length; j++) {
      if (set.has(board[i][j])) {
        return false;
      }

      if (board[i][j] !== ".") {
        set.add(board[i][j]);
      }
    }
  }

  for (i = 0; i < board.length; i++) {
    let set = new Set();
    for (let j = 0; j < board[i].length; j++) {
      if (set.has(board[j][i])) {
        return false;
      }

      if (board[j][i] !== ".") {
        set.add(board[j][i]);
      }
    }
  }

  let start = [
    [0, 0],
    [0, 3],
    [0, 6],
    [3, 0],
    [3, 3],
    [3, 6],
    [6, 0],
    [6, 3],
    [6, 6],
  ];

  for (let [i, j] of start) {
    let set = new Set();
    for (let row = i; row < i + 3; row++) {
      for (let col = j; col < j + 3; col++) {
        if (set.has(board[row][col])) {
          return false;
        }

        if (board[row][col] !== ".") {
          set.add(board[row][col]);
        }
      }
    }
  }

  return true;
};

let board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

/*
Using a single set. We will store the elements as strings in set.

TC: O(n ^ m) in this case n and m both are 9 hence constant time complexity
SC: O()
*/

var isValidSudokuOp = function (board) {
  let set = new Set();

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] !== ".") {
        let rowStr = `${board[i][j]} in row ${i}`;
        let colStr = `${board[i][j]} in col ${j}`;
        let boxStr = `${board[i][j]} in box ${Math.trunc(i / 3)},${Math.trunc(j / 3)}`;

        if (set.has(rowStr) || set.has(colStr) || set.has(boxStr)) {
          return false;
        }

        set.add(rowStr).add(colStr).add(boxStr);
      }
    }
  }

  return true;
};

console.log(isValidSudoku(board));
