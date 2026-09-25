import EventEmitter from "node:events";

const emitter = new EventEmitter();

// Event registration
emitter.on("orderPlaced", (orderName, orderPrice) => {
  console.log(`Order ${orderName} , price ${orderPrice} placed successfully `);
});

emitter.on("orderPlaced",()=>{
    console.log("Email send")

})

emitter.on("orderPlaced",()=>{
    console.log("Inventory updated")
    
})
emitter.on("orderPlaced",()=>{
    console.log("Notification send to the user")
    
})

emitter.emit("orderPlaced", "iphone 18", 45646);