import EventEmitter from "events";

class Server extends EventEmitter {
  start() {
    console.log("Server starting...");
    this.emit("ready");
  }
}

const server = new Server();

server.once("ready", () => console.log("Server ready to listen to Client!"));

server.start();
