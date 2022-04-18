const store = require("./store");

function addUser(name) {
  return new Promise((resolve, reject) => {
    if (!name) {
      console.error("[Message controller] no hay usuario o mensaje");
      return reject("Datos incorrectos");
    }
    const user = {
      name,
    };
    store.add(user);
    resolve(user);
  });
}
function getUser() {
  return store.list();
}
/*
function getUser(filterUSer) {
  return new Promise((resolve, reject) => {
    resolve(store.list(filterUSer));
  });
}*/
/*
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
*/
module.exports = {
  addUser,
  getUser,
  // updateMessage,
  // deleteMessage,
};
