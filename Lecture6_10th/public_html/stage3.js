//Stage 3 PG Bank

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
    this.balance+=v;
    this.lt=v;   
}

function withdrawn1(v){
    if(this.balance>=v){
        this.balance=this.balance-v;
        this.lt=-v;
    }else{
         console.log("Ypu dont have enough balance..pls deposite sufficient money!");
     }
}
function statements1(){
    console.log("Balanace="+this.balance);
    console.log("LT="+this.lt);
}
function  deposit2(v){
    this.balance+=v;
    this.lt=v;
};
 function withdrawn2(v){
     if(this.balance>=v){
         this.balance=this.balance-v;
         this.lt=-v;
     } else{
         console.log("Ypu dont have enough balance..pls deposite sufficient money!");
     }
 }
 function statements2(){
     console.log("Balance:"+this.balance);
     console.log("LT:"+this.lt);
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
pg2.statement();/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


