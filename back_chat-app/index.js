require("dotenv").config();
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const router = require("./app/routers/index");

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

app.use(cors());
app.use(express.static("./public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);

const PORT = process.env.PORT || 3310;
server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});

io.on("connection", (socket) => {
  console.log("User connected");

  // Rejoindre une room spécifique
  socket.on("join_room", (roomId) => {
    socket.join(roomId);
    console.log(`User joined room: ${roomId}`);
  });

  // Envoyer le message à la room
  socket.on("send_message", (data) => {
    io.to(data.room_id).emit("receive_message", data);
  });

  // Déconnexion
  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

module.exports = io;
