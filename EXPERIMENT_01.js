function calculateResult(){
    const n=document.getElementById("subjects").value;
    let total=0;
    let i;
    for(i=0;i<n;i++){
        let x=parseFloat(prompt("Enter the subject number"+(i+1)));
        total+=x;
    }

    let average=total/n;

    let grade;
    if(average>90){
        grade="A+";
    }
    else if(average>75){
        grade="A";
    }
    else if(average>60){
        grade="B";
    }
    else if(average>50){
        grade="C";
    }
    else{
        grade="fail";
    }
    

     let r;
      if(average>40){
        r="pass";     
     }
     else 
        r="fail";

     let result=document.getElementById("result").innerHTML="Total marks"+total+"<br/>"+"Average"+average+"<br>"+"Grade: "+grade+"<br>"+"result: "+r
}