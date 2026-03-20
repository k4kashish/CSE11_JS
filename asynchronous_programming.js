let promise=new Promise((resolve,reject)=>{
    let success=false;
    if(success)
        resolve("Data Loaded");
    else
        reject("Error Occurred");
});
promise.then(result=>console.log(result)).catch(error=>console.log(error));

async function getData(){
    let response=await
    fetch("https://jsonplaceholder.typicode.com/users");
    let data =await response.json();
    console.log(data);
    
}
getData();
fetch("https://jsonplaceholder.typicode.com/users")
.then(response=>response.json())
.then(data=>console.log(data))
.then(error=>console.log(error));


localStorage.setItem("name","Jeet");

var name1=localStorage.getItem("name");
console.log(name1);

localStorage.removeItem("name");

var user={name:"Jeet",age:50};
localStorage.stItem("user",JSON.stringify(user));
console.log(data.name,data.age);
