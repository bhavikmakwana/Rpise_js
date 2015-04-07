/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//lecture :07 as on 17/02/2015
//var f2=function()//alternative syntax for creating function 
////its called lambda=function litral
//{
//    console.log("enetring f2");
//    var c=3;
//    var d=4;
//    console.log("c:"+c);
//    console.log("d:"+d);
//    console.log("Leaving f2");
//};
//f1();
function f1()
{

    console.log("Entering F1");
    f2();
    var a = 1;
    var b = 2;
    console.log("a:" + a);
    console.log("b:" + b);



    function f2()
    {
        //nested function
        console.log("enetring f2");
        var c = 3;
        var d = 4;
        console.log("c:" + c);
        console.log("d:" + d);
        console.log("Leaving f2");
    }
    //f2();

    console.log("leaving F1");


}
;


f1();



//function f2() {
//    console.log("enetring f2");
//    var c = 3;
//    var d = 4;
//    console.log("c:" + c);
//    console.log("d:" + d);
//    console.log("Leaving f2");
//}

//f2();
//var f2=function()//alternative syntax for creating function 
////its called lambda=function litral
//{
//    console.log("enetring f2");
//    var c=3;
//    var d=4;
//    console.log("c:"+c);
//    console.log("d:"+d);
//    console.log("Leaving f2");
//};