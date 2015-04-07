var pg1={
    balance:0,
    lt:0,
    deposit:deposit1,
    withdrawn:withdrawn1,
    statement:statements1
};

var pg2={
    balance:0,
    lt:0,
    deposit:deposit2,
    withdrawn:withdrawn2,
    statement:statements2
};

function deposit1(v){
    pg1.balance+=v;
    pg1.lt=v;   
}

function withdrawn1(v){
    if(pg1.balance>=v){
        pg1.balance=pg1.balance-v;
        pg1.lt=-v;
    }else{
         console.log("Ypu dont have enough balance..pls deposite sufficient money!");
     }
}
function statements1(){
    console.log("Balanace="+pg1.balance);
    console.log("LT="+pg1.lt);
}
function  deposit2(v){
    pg2.balance+=v;
    pg2.lt=v;
};
 function withdrawn2(v){
     if(pg2.balance>=v){
         pg2.balance=pg2.balance-v;
         pg2.lt=-v;
     } else{
         console.log("Ypu dont have enough balance..pls deposite sufficient money!");
     }
 }
 function statements2(){
     console.log("Balance:"+pg2.balance);
     console.log("LT:"+pg2.lt);
 }
 pg1.deposit(1000);
 pg1.withdrawn(500);
 pg1.statement();
 //deposit(1000);
 //withdrawn(5000);
// deposit(50);
// withdrawn(20);
// statements();
// 
// statements2();
pg2.deposit(500);
pg2.withdrawn(600);
pg2.statement();