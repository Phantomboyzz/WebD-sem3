function getUser(){
return new Promise((resolve,reject)=>{
    let user = true
    if(!user){
        reject(new Error("User not exists."))
    }else{
        resolve({
            username:"Aryan Jha",
            role:"Robertics engineer"
        });
    }
});
}

const response=await getUser()
console.log(response);
console.log("hello");