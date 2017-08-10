
let box = document.querySelector("#place");
let numbers = document.querySelectorAll("button");

console.log(numbers);

for (let i = 0; i < numbers.length; i++){
    if (i===15){
    numbers[i].addEventListener("click",function(){
        problemSolve();
        doAMath();
    } );
    

    }else{
        numbers[i].addEventListener("click",function() {
        numClick(numbers[i]);
        
        });   
    }
}

function numClick(arr){
    box.textContent += arr.innerHTML;
    numOp = numOp + arr.innerHTML;
    if(arr.innerHTML==="C"){
        num = [];
        ops = [];
        numOp = "";
        box.textContent = "";

    }
    console.log(numOp);
}





let num = [];
let ops = [];
let numOp = '';

function problemSolve(jumble){
  let frag = ""; 

    for (let i = 0; i < numOp.length; i++){
        if(numOp[i] === "+"  || numOp[i] === "-"  || numOp[i] === "*"  || numOp[i] === "/"){
        ops.push(numOp[i]);
        num.push(parseFloat(frag));
        frag = "";
    
    } else{
        frag += numOp[i];
        
    
        }    
    }
    
        num.push(parseFloat(frag));
        console.log(num);
        console.log(ops);
}

function doAMath(maths){
    let math = 0;
    
    if(ops[0]==="+") {
     math = num[0] + num[1];
    }
        if(ops[0]==="-") {
       math = num[0] - num[1]; 
        }
            if(ops[0]==="*") { 
            math = num[0] * num[1];
            }
                if(ops[0]==="/") {
                math = num[0] / num[1];
                }         
     
                
               
        
   box.textContent=math;   
}       
        
   

