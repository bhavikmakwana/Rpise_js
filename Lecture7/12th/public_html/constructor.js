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
function PiggyBank(){
    this.balance=0;
    this.lt=0;
    this.__proto__=base;  
}

//function can use like this
var pg1=new PiggyBank();
//var pg2=PiggyBank();
 
//pg1.__proto__=base;
//pg2.__proto__=base;

pg1.deposit(1000);
pg1.withdrawn(500);
pg1.statement();
//pg2.deposit(100);
//pg2.statement();
//pg2.withdrawn(99);
//pg2.statement();