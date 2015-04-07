//prototypal inheritance in javascript
var pg1={
    balance:0,
    lt:0
};

var pg2={
      balance:0,
    lt:0   
};

var base={
      deposit:deposit,
    withdrawn:withdrawn,
    statement:statements
};

pg1.__proto__=base;
pg2.__proto__=base;

function deposit(v){
    this.balance+=v;
    this.lt=v;   
}

function withdrawn(v){
    if(this.balance>=v){
        this.balance=this.balance-v;
        this.lt=-v;
    }else{
         console.log("Ypu dont have enough balance..pls deposite sufficient money!");
     }
}
function statements(){
    console.log("Balanace="+this.balance);
    console.log("LT="+this.lt);
}


pg1.deposit(1000);
pg1.statement();