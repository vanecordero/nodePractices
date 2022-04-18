const Model = require("./model");

function addUser(user) {
  const myUser = new Model(user);
  myUser.save();
}

async function getUsers() {
  return Model.find();
}
/*
async function updateText(id, message) {
  console.log("updateText");
  const foundMessage = await Model.findOne({
    id: id,
  });
  foundMessage.message = message;
  const newMessage = await foundMessage.save();
  return newMessage;
}

function removeMessage(id) {
  return Model.deleteOne({
    _id: id,
  });
}
*/
module.exports = {
  add: addUser,
  list: getUsers,
  //updateUser: updateUser,
  //remove: removeUser,
};
