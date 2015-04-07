/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//object graph
var obj1={
   x:1,
   y:2
};
//console.log(obj1);

function f1(){
    console.log("Entering f1");
    //every function of JS is (this) pointer
    //function invoked via some object
    console.log(this.x);
    console.log(this.y);
    console.log(this.z=4);
    console.log("Leaving f1");
}
var i=10;
var j=20;
f1();
//console.log(i);
//console.log(j);
//console.log(obj1);

//obj1.f=f1;
//console.log(obj1);
//console.log(f1.z);
//obj1.f();
//f1();cls





