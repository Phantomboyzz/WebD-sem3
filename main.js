console.log("start")
for (let i = 0; i < 10; i++) {
    console.log(i);
}
console.log("end")

console.log(" Async start")
setTimeout(() => {
    console.log("Settimeout")
}, 2000);
console.log("Async end")