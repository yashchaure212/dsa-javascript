# JavaScript Fundamentals - Variables & Operators

## 📌 Question 1: Swap Two Variables - Swapping means exchanging the values of two variables.

**Example:**

Before swapping:
```
a = 10
b = 20
```
After swapping:
```
a = 20
b = 10
```
---
## Method 1: Using a Third Variable
```javascript
let a = 10;
let b = 20;
let temp;

temp = a;
a = b;
b = temp;

console.log(a, b); // 20 10
```
### Advantages
- Easy to understand
- Beginner-friendly

### Disadvantages
- Uses one extra variable.

---
## Method 2: Using Arithmetic Operators
```javascript
let a = 10;
let b = 20;

a = a + b;
b = a - b;
a = a - b;

console.log(a, b); // 20 10
```
### Advantages
- Doesn't require an extra variable.

### Disadvantages
- Harder to read.
- Can overflow with very large numbers.
- Rarely used in modern JavaScript.

---
## Method 3: Using Destructuring Assignment (Recommended)

### Code
```javascript
let a = 10;
let b = 20;

[a, b] = [b, a];

console.log(a, b); // 20 10
```

### Explanation
JavaScript creates a temporary array and swaps the values automatically.

### Advantages
- Clean
- Readable
- Modern JavaScript
- Most commonly used

---
# 📌 Question 2: Increment & Decrement Operators

JavaScript has two increment operators.
| Operator | Name | Behavior |
|----------|------|----------|
| `i++` | Post Increment | Returns current value, then increments |
| `++i` | Pre Increment | Increments first, then returns |

---

## Example 1
```javascript
let i = 11;
i = i++ + ++i;
console.log(i); // 24
```

### Explanation
Initial value
```text
i = 11
```
`i++`

- Returns **11**
- Then `i` becomes **12**

`++i`

- First increments to **13**
- Returns **13**

Calculation

```text
11 + 13 = 24
```

Final value

```text
i = 24
```

> **Interview Note:** Avoid writing expressions like this in production code. They reduce readability and are easy to misunderstand.

---

## Example 2

```javascript
let value = true;

value++;

console.log(value); // 2
```

### Explanation

JavaScript converts `true` into the number `1`.

```text
true → 1
```

Then increments it.

```text
1 + 1 = 2
```

---

## Example 3

```javascript
let b = 10++;
```

### Result

```text
SyntaxError
```

### Why?

Increment (`++`) can only be applied to **variables**, not literal values.

Incorrect

```javascript
10++;
```

Correct

```javascript
let b = 10;

b++;
```

---

## Example 4

```javascript
let c = 10;

let b = ++(c++);
```

### Result
```text
SyntaxError
```

Applying another increment to that returned value is not allowed because it is **not a variable**.

---
# 📝 Summary

---

# 💡 Interview Tips

- Prefer **destructuring assignment** for swapping variables.
- Understand the difference between **pre-increment** and **post-increment**.

---
# 🔥 Revision Questions
1. What is the difference between `i++` and `++i`?
2. Which swapping method is most commonly used in modern JavaScript?
3. Why does `10++` produce an error?
4. What happens when `true++` is executed?
5. Why is `++(c++)` invalid?
