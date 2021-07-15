let express = require("express");

//ek naya server bnade but ye sirf create krti use chalu nhi krti
let server = express();

server.get("/movies", function (req, res) {
  res.send("movies data from server");
});

server.get("/genre", function (req, res) {
    res.send("genre data from server");
  });

//ye line server ko shuru krdeti hai
// ek port pr
server.listen(3000);

//  http://localhost:3000/abc
