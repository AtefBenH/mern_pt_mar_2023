// Bringing something named express
const express = require("express");
//- import axios from "axios"
// console.log(express);

// Invoke the function express and storing the return inside a variable called app
const app = express();
// console.log(app);
const port = 8000;

// req is short for request
// res is short for response
// ! Routing
// * clientRequest
//*  app.get("sting("Route")",(CallbackFunction (Request Object,Response Object)))

app.get("/api", (req, res) => {
  res.json({ message: "Hello World",status:"OK 😁 !!!!!!" });
});

// this needs to be below the other code blocks
app.listen( port, () => console.log(`SERVER Listening on port: ${port} §§§§§§§§§§§§§§§§§§`) );