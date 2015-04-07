//Stage 3 PG Bank

var pg1={
    balance:0,
    lt:0,
    deposit:deposit,
    withdrawn:withdrawn,
    statement:statements
};

var pg2={
    balance:0,
    lt:0,
    deposit:deposit,
    withdrawn:withdrawn,
    statement:statements
};
var pg3={
    balance:0,
    lt:0,
    deposit:deposit,
    withdrawn:withdrawn,
    statement:statements
};

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
 pg1.withdrawn(500);
 pg1.statement();

pg2.deposit(500);
pg2.withdrawn(600);
pg2.statement();

pg3.deposit(500);
pg3.withdrawn(500);
pg3.statement();


