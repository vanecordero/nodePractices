const db = require("mongoose");
const Model = require("./model");
require("dotenv").config();

console.log(process.env.DB_USER);

const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.z6fjq.mongodb.net/${process.env.DB_USER}?retryWrites=true&w=majority`;

db.Promise = global.Promise;

db.connect(url, {
  useNewUrlParser: true,
});
console.log("[db] Conectada con exito");

const list = [];

function addMessage(message) {
  const myMessage = new Model(message);
  myMessage.save();
}

async function getMessage(filterUSer) {
  let filter = {};
  if (filterUSer !== null) {
    filter = {
      user: new RegExp(filterUSer, "i"), //ignorar mayusculas
    };
  }
  const message = await Model.find(filter);
  return message;
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
