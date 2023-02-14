// console.log(Date.now() + new Date());
function hashcode(userId, password) {
  const obj = {};
  let id = password;
  let id2 = Date.now() + new Date();
  obj[userId] = id2;
  return console.log(obj);
}

hashcode("rahul", "12345Dajc");
// In the terminal write this command: node hashCode.js >> filename