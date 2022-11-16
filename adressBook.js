function createAdressBook(input) {
  let adressBook = {};

  for (const line of input) {
    let [name, adress] = line.split(":");
    adressBook[name] = adress;
  }
  let newAdreesBook = Object.entries(adressBook);
  newAdreesBook.sort((a, b) => a[0].localeCompare(b[0]));

  for (const line of newAdreesBook) {
    let [name, adress] = line;
    console.log(`${name} -> ${adress}`);
  }
}

createAdressBook([
  "Bob:Huxley Rd",

  "John:Milwaukee Crossing",

  "Peter:Fordem Ave",

  "Bob:Redwing Ave",

  "George:Mesta Crossing",

  "Ted:Gateway Way",

  "Bill:Gateway Way",

  "John:Grover Rd",

  "Peter:Huxley Rd",

  "Jeff:Gateway Way",

  "Jeff:Huxley Rd",
]);
