function myFunction(email) {
  var username = "";
  username = {
    "user1@mail.com": "user1",
    "user2@mail.com": "user2",
    "user3@mail.com": "user3",
    "user4@mail.com": "user4",
    "user5@mail.com": "user5",
    "user6@mail.com": "user6",
    "": "undefined"
  };
  username = username[email];
  return username;
}
console.log(myFunction("user1@mail.com"));
console.log(myFunction("user2@mail.com"));
console.log(myFunction("user3@mail.com"));
console.log(myFunction("user4@mail.com"));
console.log(myFunction("user5@mail.com"));
console.log(myFunction("user6@mail.com"));
console.log(myFunction(""));
myFunction("user2@mail.com");
module.exports = myFunction;
