//BigInt addition
const a = 1n + 2n; //3n

// Division with BigInts round towards zero

const b = 1n / 2n; //0n

// Bitwise operations with BigInts do not truncate either side
const c = 40000000000000000n >> 2n; // 10000000000000000n

const d = 8n >>> 2n; // TypeError: BigInts have no unsigned right shift, use >> instead

const a1 = Number(1n) + 2; // 3
const b2 = 1n + BigInt(2); // 3n

a1 = 1n > 2; // false
b1 = 3 > 2n; // true