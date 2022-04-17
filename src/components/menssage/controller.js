const store = require("./store");

function addMessage(user, msg) {
  return new Promise((resolve, reject) => {
    if (!user || !msg) {
      console.error("[Message controller] no hay usuario o mensaje");
      return reject("Datos incorrectos");
    }
    const fullMessage = {
      user: user,
      message: msg,
      date: new Date(),
    };
    store.add(fullMessage);
    resolve(fullMessage);
  });
}

function getMessage(filterUSer) {
  return new Promise((resolve, reject) => {
    resolve(store.list(filterUSer));
  });
}

function updateMessage(id, message) {
  return new Promise(async (resolve, reject) => {
    if (!id || !message) {
      reject("Invalid data");
      return false;
    }
    const result = await store.updateText(id, message);
    resolve(result);
  });
}

function deleteMessage(id) {
  return new Promise((resolve, reject) => {
    if (!id) {
      reject("Id invalido");
      return false;
    }

    store
      .remove(id)
      .then(() => {
        resolve();
      })
      .catch((e) => {
        reject(e);
      });
  });
}

module.exports = {
  addMessage,
  getMessage,
  updateMessage,
  deleteMessage,
};
