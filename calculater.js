let calculator={
    add:(a,b)=>a+b,
    multiple:(a,b)=>a*b,
    divide:(a,b)=> b===0  ? 0 : a/b,
    Substract:(a,b)=> a-b,
}

function calculate(operation){
    let a=Number(document.getElementById('input1').value);
    let b=Number(document.getElementById('input2').value);
    document.getElementById('output').innerHTML= calculator[operation](a,b);
   
}

// person comparison 


 function campare(oprt){
    let nm1=String(document.getElementById('input3').value);
    let nm2=String(document.getElementById('input4').value);
   
       
        if(nm1==nm2 /*&& prsn1.age==prsn2.age*/){
        
            rtn="person is same";
            
        }else{
            rtn="person not is same";
        }
 document.getElementById('output2').innerHTML=rtn;

 }

// on console
// prsn1={
//     Name:"gaurav",
//     age:23,
// }
// prsn2={
//     Name:"sohit",
//     age:21,
// }
// if(prsn1.Name==prsn2.Name && prsn1.age==prsn2.age){

//     console.log("person is same");
    
// }else{
//     console.log("person not is same");
// }