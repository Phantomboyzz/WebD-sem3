import fs from 'fs';
console.log("Synchronous Task")
setTimeout(()=>{ 
    console.log("SetTimeout");  
})
setInterval(()=>{
    console.log("SetInterval");   
},2000)

// Microtask Queue
// nextTick Queue

fs.writeFile("notes.txt", "Hello ELCE-B", function(err) {
    if(err){
        console.log("err");   
        return
    }
    console.log("File Written Successfully");
})
setTimeout(()=>{
    console.log("setTimeout Inside fs write method");   
}, 0)
setImmediate(()=>{
    console.log("setImmediate Inside fs write method");
});

console.log("Another Synchronous Task")  

// timer phase 
// pending phase
// ideal, prepare phase
// call phase 
// check phase
// close phase 

Promise.resolve().then(()=>{
    console.log("Promise Resolved");   
})

process.nextTick(()=>{
    console.log("Next Tick");   
})
