
//Stage Level =3
var pg={
    balance:0,
    lt:0,
   deposite:deposite,
   withdraw:withdraw
};
//var pg1={
//    balance:0,
//    lt:0
//};



function deposite(v){
    pg.balance=pg.balance +v;
    pg.lt=v;
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


function statement(){
    console.log("Your Current is Balance:"+pg.balance);
    console.log("Last Transaction"+pg.lt);
}

pg.deposite(1000);
pg.deposite(500);
pg.withdraw(1000);
statement();
