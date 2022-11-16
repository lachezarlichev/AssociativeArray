function makeTracjer(input) {
  let target = input.shift().split(" ");
  let targetone = "";

  let wordTracker = {};

  for (const arr of target) {
    targetone = arr;
    for (const line of input) {
      if (line == targetone) {
        if (!wordTracker[line]) {
          wordTracker[line] = 0;
        }
        wordTracker[line]++;
      }
    }
  }
  let entres = Object.entries(wordTracker).sort((a,b)=> b[1] - a[1])
for (const [name,num] of entres) {
    console.log(`${name} - ${num}`)
}

}

makeTracjer([
  "this sentence",

  "In",
  "this",
  "sentence",
  "you",
  "have",

  "to",
  "count",
  "the",
  "occurrences",
  "of",

  "the",
  "words",
  "this",
  "and",
  "sentence",

  "because",
  "this",
  "is",
  "your",
  "task",
]);
