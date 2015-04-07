
//Stage Level =2
var pg={
    balance:0,
    lt:0
};
var pg1={
    balance:0,
    lt:0
};



function deposite(v){
    pg.balance=pg.balance +v;
    pg.lt=v;
}
function deposite1(v){
    pg1.balance=pg1.balance +v;
    pg1.lt=v;
}


function withdraw(v){
    if(pg.balance >=v){
        pg.balance=pg.balance-v;
        
    }
    else{
        console.log("You have inefficeint balance");
    }
    pg.lt=-v;
}
function withdraw1(v){
    if(pg1.balance >=v){
        pg1.balance=pg1.balance-v;
        
    }
    else{
        console.log("You have inefficeint balance");
    }
    pg1.lt=-v;
}

function statement(){
    console.log("Your Current is Balance:"+pg.balance);
    console.log("Last Transaction"+pg.lt);
}
function statement1(){
    console.log("Your Current is Balance:"+pg1.balance);
    console.log("Last Transaction"+pg1.lt);
}



deposite(1000);
deposite1(500);
withdraw(1000);
statement();
statement1();
