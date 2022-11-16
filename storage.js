function createStorage(input) {
  let strorage = {};
  let demoStorege = [];
  for (const line of input) {
    let [product, quality] = line.split(" ");
    quality = Number(quality);
    if (!demoStorege.includes(product)) {
      demoStorege.push(product, quality);
      strorage[product] = quality;
    } else if (demoStorege.includes(product)) {
      strorage[product] += quality;
    }
  }
  for (const key in strorage) {
    console.log(`${key} -> ${strorage[key]} `);
  }
}

createStorage(["tomatoes 10", "coffee 5", "olives 100", "coffee 40"]);
