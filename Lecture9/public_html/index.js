/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//functional programming
function server() {
    console.log("Enetrring Server");
    console.log("Server Doing task 1");
    console.log("Server Doing task 2");
    console.log("Server Doing task 3");
    console.log("Leaving Server");
}

//server();

function Client1(){
    console.log("Entering Client1");
    console.log("Task1 of  Client1");
    server();
    console.log("Task2 of  Client1");
    console.log("Leaving Client1");
    
}
Client1();


function Client2(){
    console.log("Entering Client2");
    console.log("Task1 of Client2");
    server();
    console.log("Task2 of Client2");
    console.log("Leaving Client2");
    
}

Client2();