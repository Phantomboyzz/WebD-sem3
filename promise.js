const promise = new Promise((resolve, reject) => {
    let success = false ; // Change this to false to simulate a failure
    if (success) {
        resolve({
            username: "JohnDoe",
            location: "USA",
        });
    } else {
        reject(new Error("User Not Fetched"));
    }
});
console.log(promise);