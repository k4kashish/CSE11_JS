//selecting with id
const result=document.getElementById("para");
result.innerHTML="my self";
document.write(result);
result.title="myname";

//selecting with class
const result1=document.getElementsByClassName("p1");
console.log("result1");
result1[0].innerHTML="Kashish";
result1[1].innerHTML="Choudhary";

//using tag name
const result2=document.getElementsByTagName("p");
result2[2].innerHTML="this is a pet";
result2[1].style.color="lavender";
result2[0].innerText="my paragraph";

//using querySelector
const test=document.querySelector("ul li:nth Child(3)");
test.style.backgroundColor="blue";
test.style.padding="10px";

//using querySelectorall
const test2=document.querySelectorAll("ul li");
for(x in test2){
    test2[x].style.backgroundColor="blue";
    test2[x].style.margin="10px";
    test2[x].style.color="blue"
}
