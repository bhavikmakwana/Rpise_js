
//complete closure.
var arr=new Array();
//array is a function ,it can use as constructor.
var count=0;

 function f1(a,b)
{
    
    console.log("Entering F1");
    console.log("a:" + a);
    console.log("b:" + b);



    function f2()
    {
        //nested function
    console.log("enetring f2");
    var c = 3;
    var d = 4;
    console.log("c+a:" + c+a);
    console.log("d+b:" + d+b);
    console.log("Leaving f2");
}
    f2();
     arr[count]=f2;
    count++;
    function f3()
    {
        //nested function
    console.log("enetring f2");
    var c = 3;
    var d = 4;
    console.log("c+a:" + c+a);
    console.log("d+b:" + d+b);
    console.log("Leaving f2");
}
 arr[count]=f3;
    count++;
    f3();
    function f4()
    {
        //nested function
    console.log("enetring f2");
    var c = 3;
    var d = 4;
    console.log("c+a:" + c+a);
    console.log("d+b:" + d+b);
    console.log("Leaving f2");
}
    f4();
    arr[count]=f4;
    count++;

    console.log("leaving F1");


};


f1(1,2);
arr[0]();




