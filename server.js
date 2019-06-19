const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = require("express")();
const mongoose = require("mongoose");
const apiRoute = require("./routes/calcAPI");
const bodyParser = require('body-parser');
const server = require("http").Server(app);
const io = require("socket.io")(server)

// pull in API routes

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.use("/api/calculator", apiRoute);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactcalc");

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

server.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});


io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
  socket.emit('stored_data');
  socket.on('new_data', function() {
    socket.emit('stored_data');
  })
});

// io.on('connection', function (socket) {
//   socket.emit('news', { hello: 'world' });
//   socket.on('my other event', function (data) {
//     console.log(data);
//   });
// });

