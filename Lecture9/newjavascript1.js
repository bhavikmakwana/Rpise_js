/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//functional programming
//switch case
//customization
//refactorng

function ccClient1(){
     console.log("Task 2 According to Client1");
}
function ccClient2(){
     console.log("Task 2 According to Client2");
}
function ccClient3(){
     console.log("Task 2 According to Client3");
}



function server(v) {
    console.log("Enetrring Server");
    console.log("Server Doing task 1");
    switch (v){
        case 1:ccClient1();
            break;
        case 2:
            ccClient2();
            break;
        case 3:
            ccClient3();
            break;
    }
    console.log("Server Doing task 3");
    console.log("Leaving Server");
}

//server();

function Client1(){
    console.log("Entering Client1");
    console.log("Task1 of  Client1");
    server(1);
    console.log("Task2 of  Client1");
    console.log("Leaving Client1");
    
}
Client1();


function Client2(){
    console.log("Entering Client2");
    console.log("Task1 of Client2");
    server(2);
    console.log("Task2 of Client2");
    console.log("Leaving Client2");
    
}

Client2();


function Client3(){
    console.log("Entering Client");
    console.log("Task1 of Client3");
    server(3);
    console.log("Task2 of Client3");
    console.log("Leaving Client3");
    
}

Client3();/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


