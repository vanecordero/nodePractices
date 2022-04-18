const express = require("express");
const response = require("../../network/response");
const controller = require("./controller");

const router = express.Router();

router.get("/", function (req, res) {
  controller
    .getUser()
    .then((userList) => {
      response.success(req, res, userList, 200);
    })
    .catch((e) => {
      response.error(req, res, "Unexpected Error", 500, e);
    });
  /* const filterUser = req.query.user || null;
  controller
    .getUser(filterUser)
    .then((userList) => {
      response.success(req, res, userList, 200);
    })
    .catch((e) => {
      response.error(req, res, "Unexpected Error", 500, e);
    });*/
});

router.post("/", function (req, res) {
  controller
    .addUser(req.body.name)
    .then(() => {
      response.success(req, res, "Creado correctamente", 201);
    })
    .catch((e) => {
      response.error(req, res, "Informacion invalida ", 400, e);
    });
});
/*
router.patch("/:id", function (req, res) {
  console.log(req.params.id);
  controller
    .updateMessage(req.params.id, req.body.message)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch((e) => {
      console.log("Error en network");
      response.error(req, res, "Error interno", 500, e);
    });
});

router.delete("/:id", function (req, res) {
  controller
    .deleteMessage(req.params.id)
    .then(() => {
      response.success(req, res, `Usuario ${req.params.id} eliminado`, 200);
    })
    .catch((e) => {
      response.error(req, res, "Error interno", 500, e);
    });
});
*/
module.exports = router;
