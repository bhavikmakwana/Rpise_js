//var pg1={
//    balance:0,
//    lt:0
//};
//var pg2={
//    balance:0,
//    lt:0
//};

function deposit(v){
    this.balance=this.balance+v;
    this.lt=v;
}
function withdrawn(v){
    if(this.balance >=v){
        this.balance-=v;
        this.lt=-v;
    }
    else{
        console.log("Insufficient balance to withdrawn ,Deposit money and Try Again!");
    }
}

function statement(){
    console.log("Available Balance in Your Account:"+this.balance);
    console.log("Last Transansaction From Your Account"+this.lt);
}

var base={
    'deposit':deposit,
    'withdrawn':withdrawn,
    'statement':statement
};

//constructor in javascript
//function is use as constrictor
//proper constructor
function PiggyBank(){
    this.balance=0;
    this.lt=0;
};
    PiggyBank.prototype={
    'deposit':deposit,
    'withdrawn':withdrawn,
    'statement':statement};
////var pg2=PiggyBank();
 
//pg1.__proto__=base;
//pg2.__proto__=base;



//function can use like this
var pg1=new PiggyBank();
pg1.deposit(1000);
pg1.statement();

console.log(typeof(pg1)); 
console.log(pg1 instanceof PiggyBank);
PiggyBank.prototype.constructor;
//console.log(pg1);
//console.log(PiggyBank.prototype.constructor);
//console.log(PiggyBank.prototype);
//console.log(pg1.base.constructor);
console.log(PiggyBank);
console.log(pg1.__proto__.__proto__.prototype.constructor);
console.log()

function f1()
{
    console.log(this);
}



