const express = require("express");
const user_schema = require("../models/user.js");
const router = express.Router();

/* crud */
/* crear un usuario */
router.post("/users", (request, response) => {
  const user = user_schema(request.body);
  user
    .save()
    .then((data) => response.json(data))
    .catch((error) => response.json({ message: error }));
});

/* lista todos los usuarios existentes de la base de datos */
router.get("/users", (request, response) => {
  user_schema
    .find()
    .then((data) => response.json(data))
    .catch((error) => response.json({ message: error }));
});

/* consulta la informacion de un recurso especifico por el id */
router.get("/users/:id", (request, response) => {
  const { id } = request.params;
  user_schema
    .findById(id)
    .then((data) => response.json(data))
    .catch((error) => response.json({ message: error }));
});

/* eliminar un recurso especifico por el id */
router.delete("/users/:id", (request, response) => {
  const { id } = request.params;
  user_schema
    .remove({ _id: id })
    .then((data) => response.json(data))
    .catch((error) => response.json({ message: error }));
});

/* actualizar un recurso especifico por el id  */
router.put("/users/:id", (request, response) => {
  const { id } = request.params;
  const {
    document_type,
    identification_document,
    names,
    surnames,
    direction,
    email,
    landline,
    cell_phone,
    link_to_website,
    profile_description,
  } = request.body;
  user_schema
    .updateOne(
      { _id: id },
      {
        $set: {
          document_type,
          identification_document,
          names,
          surnames,
          direction,
          email,
          landline,
          cell_phone,
          link_to_website,
          profile_description,
        },
      }
    )
    .then((data) => response.json(data))
    .catch((error) => response.json({ message: error }));
});

module.exports = router;
