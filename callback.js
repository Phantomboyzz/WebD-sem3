function greet(username,callback){
    console.log("Hello");
    if (typeof callback === "function") {
        callback(username);
    }
}

greet("John", (username) => {
    console.log("Welcome, " + username);
});
getProfile(user, (profile) => {
    if(error) {
        console.log("Error fetching profile:", error);
        return;
    }
    console.log("User profile:", profile);
});