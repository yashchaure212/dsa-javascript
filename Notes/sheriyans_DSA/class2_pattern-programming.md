# JavaScript Pattern Programs

```javascript
let prompt = require("prompt-sync")();

let n = Number(prompt("Enter a number"));

// 5 × 5 Full Square
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    process.stdout.write("* ");
  }
  console.log("");
}

// Right Angle Triangle
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write("* ");
  }
  console.log("");
}

// Inverted Right Angle Triangle
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i + 1; j++) {
    process.stdout.write("* ");
  }
  console.log("");
}

// Number Triangle
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write(j + " ");
  }
  console.log("");
}

// Repeated Number Triangle
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write(i + " ");
  }
  console.log("");
}

// Continuous Number Triangle
let val = 1;

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write(val + " ");
    val++;
  }
  console.log("");
}
```