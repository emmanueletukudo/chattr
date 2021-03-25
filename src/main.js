/**
 * Author: Emmauel Etukudo
 * Version: 1.0.0
 * Website: http://eetukudo.dev
 * Ensure you run npm install is you have done already.
 */
require("dotenv").config();
const express = require("express");
const socketio = require("socket.io");
const http = require("http");
const chats = require("./routes/chat.routes");

const PORT = process.env.PORT || 5000;
const app = express();
const server = http.createServer(app);
const io = socketio(server);


io.on("connection", (socket) => {
    console.log("New connection established");

    socket.on('join', ({name, room}) => {
        console.log(name, room);
    })

    socket.on("disconnect", () => {
        console.log("User had left");
    })
})
app.use("/api/chats", chats )

server.listen(PORT, () => console.log(`Server started on ${PORT}`));
