/* 
Lecture10 as on 24/02/2015.
Stack (LIFO,FILO)
Bounded
 */

var stk=new Array(10);
//console.log(stk.length);//array of size 10
var st=10;
console.log(st);

function push(v){
    
    if(st==0){
        console.log("Stack overflow");
    }else{
        st=st-1;
        stk[st]=v;
    }
    
    
}


function print(){
    for (var i=st;i<10;i++){
        console.log(stk[i]);
    }
}



function pop(){
    //console.log("Enetring Pop");
    var temp;
    if(st==="10"){
        console.log("Stack underflow");
    }else{
        temp=stk[st];
        stk[st]=undefined;
        st=st+1;
         
    }
    return temp;
    console.log("Leaving pop");
}

push(30);
push(29);
push(28);
push(27);
push(26);
push(25);
push(24);
push(23);
push(22);
push(21);
//push(20);//-->here stack overflow

print();
console.log("Stack Position:"+st);
pop(21);
pop(22);
pop(23);
pop(24);
pop(25);
pop(26);
pop(27);
pop(28);
pop(29);
pop(30);//-->stack underflow
var z=pop();
print();
console.log("z:"+z);
