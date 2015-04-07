

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

var arr = new Array();
//array is a function ,it can use as constructor.
var count = 0;

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
    arr[count] = f2;
    count++;

    console.log("leaving F1");


}
;


f1();
//f1();
//f1();

console.log(arr[0]);
console.log(arr[1]);
//console.log(arr[2]);
arr[0]();
//arr[1]();
//arr[2]();



