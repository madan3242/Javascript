const a = new Array(4);
for (let i = 0; i < 4; i++) {
  a[i] = new Array(4);
  for (let j = 0; j < 4; j++) {
    a[i][j] = `[${i}, ${j}]`;
    console.log(a[i][j]);
  }
}

// Row 0: [0, 0] [0, 1] [0, 2] [0, 3]
// Row 1: [1, 0] [1, 1] [1, 2] [1, 3]
// Row 2: [2, 0] [2, 1] [2, 2] [2, 3]
// Row 3: [3, 0] [3, 1] [3, 2] [3, 3]

