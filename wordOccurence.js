function wordOccurence(input) {
  let counter = {};

  for (const line of input) {
    if (!counter[line]) {
      counter[line] = 0;
    }
    counter[line]++;
  }
  let sortedInput = Object.entries(counter).sort((a, b) => b[1] - a[1]);
  for (const [name, value] of sortedInput) {
    console.log(`${name} -> ${value} times`);
  }
}

wordOccurence([
  "Here",
  "is",
  "the",
  "first",
  "sentence",

  "Here",
  "is",
  "another",
  "sentence",
  "And",

  "finally",
  "the",
  "third",
  "sentence",
]);
