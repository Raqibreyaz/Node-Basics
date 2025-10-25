import EventEmitter from "events";

const emitter = new EventEmitter();

// register 'start' event
emitter.on("start", () => console.log("started!"));

// register 'login' event but will run only once
emitter.once("login", () => console.log("user logged in"));

// a second listener on the same 'login' event
emitter.once("login", () => console.log("redirecting to home page"));

emitter.emit("start");
emitter.emit("login");
emitter.emit("login");

/*
started!
user logged in
redirecting to home page
*/