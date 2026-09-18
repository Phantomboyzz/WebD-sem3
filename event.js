import EvenEmitter from "node:events";

const emitter = new EvenEmitter()

// Register Event
emitter.on("OrderPlaced", (orderName, value)=>{
console.log('Order $(orderName') with $(value) has been placed successfully');
})
emitter.on("OrderPlaced",()=>{
console.log('Notification has been send successfully');
})
emitter.on("OrderPlaced",()=>{


console.log('Inventory Updated');
})

// trigger the event 
emitter.emit("OrderPlaced"), "iPhone 18", 159000
emitter.listenerCount("OrderPlaced")