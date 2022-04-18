const Model = require("./model");
const list = [];

function addMessage(message) {
  const myMessage = new Model(message);
  myMessage.save();
}

async function getMessage(filterUSer) {
  return new Promise((resolve, reject) => {
    let filter = {};
    if (filterUSer !== null) {
      filter = {
        user: new RegExp(filterUSer, "i"), //ignorar mayusculas
      };
    }
    Model.find(filter)
      .populate("user")
      .exec((error, populated) => {
        if (error) {
          reject(error);
          return false;
        }
        resolve(populated);
      });
  });
}

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

module.exports = {
  add: addMessage,
  list: getMessage,
  updateText: updateText,
  remove: removeMessage,
};
