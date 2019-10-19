function boxCheck(num, row, col, matrix) {
  return false;
}

function colCreate(j, matrix) {
  let col = [];
  for (let i = 0; i < 9; i++) {
    col.push(matrix[i][j]);
  }
  return col;
}

module.exports = function solveSudoku(matrix) {
  //let ans = [[]];
  let r_i = 0;
  let zeros = [[]];
  for (let row of matrix) {
    if (!row.every(x => x > 0)) {
      var idx = row.indexOf(0);
      while (idx != -1) {
        zeros[r_i].push(idx);
        idx = row.indexOf(0, idx + 1);
      }
      for (let current of zeros[r_i]) {
       c_i = 0; let num = 1;
        for (; num < 10; num++) {
          //if (!ans[r_i].includes(num)) {
            if (!row.includes(num)) {
              let col = colCreate(current, matrix);
              if (!col.includes(num)) {
                if (!boxCheck(num, r_i, current, matrix))
                  matrix[r_i][current]=num;
                break;
              }
            }
         // }
        }
        if (num > 9) {
         // ans[r_i].pop();
          if (!current) {
            r_i -= 1;
          } else {
            c_i -= 1;
          }
          c_i++;
        }
      }
    }
    r_i++;
  }
  return matrix;
}