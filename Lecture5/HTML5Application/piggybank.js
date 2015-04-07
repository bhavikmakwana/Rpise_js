
//Stage Level =1
var pg={
    balance:0,
    lt:0
};


function deposite(v){
    pg.balance=pg.balance +v;
    pg.lt=v;
}

function withdraw(v){
    if(pg.balance >=v){
        pg.balance=pg.balance-v;
        
    }
    else{
        console.log("Ypu have inefficeint balance");
    }
    pg.lt=-v;
}

function statement(){
    console.log("Your Current is Balance:"+pg.balance);
    console.log("Last Transaction"+pg.lt);
}


deposite(100);
deposite(200);
withdraw(400);
statement();
