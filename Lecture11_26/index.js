/* 
 Lecture10 as on 24/02/2015.
 Stack (LIFO,FILO)
 Bounded
 */

var stk = new Array(10);
//console.log(stk.length);//array of size 10
var st = stk.length;
console.log(st);
function push(v) {

    if (st == 0) {
        console.log("Stack overflow");
    } else {
        st = st - 1;
        stk[st] = v;
    }


}


function print() {
    var m = "";
    for (var i = st; i < stk.length; i++) {
//        console.log(stk[i]);
        m += stk[i] + "\n";
    }
    return m;
}


function pop() {
//console.log("Enetring Pop");
    var temp;
    if (st === stk.length) {
        console.log("Stack underflow");
    } else {
        temp = stk[st];
        stk[st] = undefined;
        st = st + 1;
    }
    return temp;
    console.log("Leaving pop");
}




function user_push() {
//        alert("Push invoked");
    var ta1 = document.getElementById("text1");
    var ta2 = document.getElementById("text2");
    if (ta2.value != "") {
        if (isNaN(ta2.value)) {

            alert("Pls enter a input");
        }
        else
        {
            push(ta2.value);
            var content = print();
            ta1.value = content;
            ta2.value = "";
        }
    }
    else
    {
        alert("please enter something");
    }
    ta2.value = "";
}

function user_pop() {

    var ta1 = document.getElementById("text1");
    var ta2 = document.getElementById("text2");
//        ta1.value = ta2.value + "\n" + ta1.value;
    pop();
    var content = print();
    ta1.value = content;
    ta2.value = "";
}