const store = require("./store");

function addChat(users) {
  return new Promise((resolve, reject) => {
    if (!users) {
      console.error("[Message controller] invelid user list");
      return reject("Invalid users list");
    }
    const user = {
      users: users,
    };
    store.add(user);
    resolve(user);
  });
}

function listChat(userId) {
  return store.list(userId);
}

module.exports = {
  addChat,
  listChat,
};
