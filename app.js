const express = require("express");
const collection = require(__dirname + "/public/mongo.js");
const socket = require("socket.io");
const app = express();
const cors = require("cors");
const port = 8000;
app.use(express.json());
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.use(express.static("public"));
const server = app.listen(8000, () => console.log(`listening at port ${port}`));

const io = socket(server);

io.on("connect", (socket) => {
  // console.log(socket.id)
  socket.on("chat", (data) => {
    // console.log(data)
    io.sockets.emit("chat", data);
  });
  socket.on("typing", (data) => {
    socket.broadcast.emit("typing", data);
  });
});
