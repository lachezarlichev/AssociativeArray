function createAPhoneBook(input) {
  let phoneBook = {};
  for (const line of input) {
    let [name, number] = line.split(" ");
    phoneBook[name] = number;
  }
  for (const key in phoneBook) {
    console.log(`${key} -> ${phoneBook[key]}`);
  }
}

createAPhoneBook([
  "Tim 0834212554",

  "Peter 0877547887",

  "Bill 0896543112",

  "Tim 0876566344",
]);
