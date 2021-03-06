// fibonacci sequence
var previous = 1;
var current = 2;
var next = 0;

// tracks the even terms
var even = "";

// tracks the total value, starting with 2
var sum = current;

// Cannot pass 4 million
while (previous + current <= 4000000) {
  // sum of the last two values
  next = previous + current;
  // move up to the old current
  previous = current;
  // move up to the new current
  current = next;

  // if current value is even, add it to the sum and our string
  if (current % 2 === 0) {
    sum += current;
    even += current + ", ";
  }
}

// gets rid of the last comma
even = even.substring(0, even.length - 2);

// prints out our results
console.log("Even values: " + even);
console.log("Sum: " + sum);