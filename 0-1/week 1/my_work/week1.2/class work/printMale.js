//Write a program that prints all the male people’s first name given a complex object
const users = [
  { firstname: "vishnu", gender: "male" },
  { firstname: "arsha", gender: "male" },
  { firstname: "sneha", gender: "female" },
];

for (i = 0; i < users.length; i++) {
  if (users[i].gender == "male") {
    console.log(` ${users[i].firstname}`);
  }
}
