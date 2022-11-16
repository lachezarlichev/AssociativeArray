function createMeeting(input) {
  let meeting = {};
  let demo = [];
  for (const line of input) {
    let [day, name] = line.split(" ");

    if (!demo.includes(day)) {
      demo.push(day);
      meeting[day] = name;
      console.log(`Scheduled for ${day}`);
    } else {
      console.log(`Conflict on ${day}!`);
    }
  }
  for (const key in meeting) {
    console.log(`${key} -> ${meeting[key]}`);
  }
}

createMeeting(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);
