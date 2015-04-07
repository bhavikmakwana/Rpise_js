//CallBack Architecture

//functional programming
//switch case
//customization
//refactorng
//pass a function into function as parameter.
//Function Pointrer

function ccClient1(){
     console.log("Server Doing Task 2 According to Client1");
}
function ccClient2(){
     console.log("Server Doing Task 2 According to Client2");
}
function ccClient3(){
     console.log("Server Doing Task 2 According to Client3");
}



function server(f) {
    console.log("Enetrring Server");
    console.log("Server Doing task 1");
    f();
    console.log("Server Doing task 3");
    console.log("Leaving Server");
}

//server();

function Client1(){
    console.log("=====================Entering Client1==============");
    console.log("Task1 of  Client1");
    server(ccClient1);
    console.log("Task2 of  Client1");
    console.log("==============Leaving Client1=====================");
    
}
Client1();


function Client2(){
    console.log("======================Entering Client2=====================");
    console.log("Task1 of Client2");
    server(ccClient2);
    console.log("Task2 of Client2");
    console.log("=====================Leaving Client2=======================");
    
}

Client2();


function Client3(){
    console.log("====================Entering Client3=====================");
    console.log("Task1 of Client3");
    server(ccClient3);
    console.log("Task2 of Client3");
    console.log("===================Leaving Client3========================");
    
}

Client3();

