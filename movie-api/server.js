let express = require("express");

let data = require("./data.json")


//ek naya server bnade but ye sirf create krti use chalu nhi krti
let server = express();



server.get("/movies", function (req, res) {
  res.json(data)
});

server.get("/genre", function (req, res) {


    res.send("genre data from server");
  });

//ye line server ko shuru krdeti hai
// ek port pr
server.listen(4000);

// //  http://localhost:3000/movies
