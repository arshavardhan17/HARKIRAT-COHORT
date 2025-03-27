//Write a program that greets a person based on their gender

const users = [
  { firstname: "vishnu", gender: "male" },
  { firstname: "arsha", gender: "male" },
  { firstname: "sneha", gender: "female" },
];

for (i = 0; i < users.length; i++) {
  if (users[i].gender == "male") {
    console.log(`Hello Mr. ${users[i].firstname}`);
  } else {
    console.log(`Hello Ms. ${users[i].firstname}`);
  }
}
