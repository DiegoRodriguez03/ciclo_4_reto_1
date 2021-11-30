const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

/* routes */
const user_route = require("./routes/user.js");

/* configuracion del puerto de ejecucion del proyecto */
const app = express();
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("listening por el puerto", port);
});

app.get("/", (request, response) => {
  response.send("Bienvenido a la semana II ciclo IV");
});

/* metodo de conexion con la base de datos */
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Conectados a mongoDB atlas"))
  .catch((error) => console.log(error));

/* middleware: URI de conexion ara probar los request GET - POST - DELETE - PUT */
app.use(express.json());

/* localhost:3000/api/users */
app.use("/api", user_route);
