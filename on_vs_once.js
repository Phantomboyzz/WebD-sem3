import EventEmitter from "node:events";

const Emitter = new EventEmitter()

Emitter.on("login", ()=>{
    console.log("User logged in using on() method");
})

Emitter.once("login", ()=>{
    console.log("User logged in using once() method")
})

function signup() {
    console.log("User signed up successfully");
}

Emitter.on("signup", signup)



// console.log("First Login");
// Emitter.emit("login")
console.log("Signup");
Emitter.emit("signup")
// console.log("second login");
// Emitter.emit("login")
// console.log("third login");
// Emitter.emit("login")