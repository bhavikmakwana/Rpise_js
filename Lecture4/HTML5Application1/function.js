
//creating function
//function is a object in JS 
function f1(){
    console.log("Entering  function");
    console.log("Leavinf Function");
}

//apply/invocation operator "()"
f1();

var f2=f1;
console.log(typeof(f2));
console.log(typeof(f1));
f2();
