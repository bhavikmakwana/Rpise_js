var a = [10, 20, 30, 40, 50];
//inside the is called elemement*
console.log(a);
console.log(typeof (a));
console.log(a[0]);//to accdess an element
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
//console.log(a[5]);



//to find a length of array
console.log(a.length);


console.log("using for loop");
for (var i = 0; i < a.length; i++) {
    console.log(a[i]);

}


console.log("using for loop when value changes");
a[2]=99;
a[7]=77;
for (var i = 0; i < a.length; i++) {
    console.log(a[i]);

}

console.log(a.length);
console.log(a[6]);

var b={
    //name-value pair
    moti:10,
    rahul:20,
    sarthak:30,
    lee:40,
    devil:50,
    ganpat:60,
    babu:70
};


//console.log(b);
//console.log(b.length);//not working bcoz of string 
//console.log(b.rahul);
//console.log(b.babu);
//console.log(b.ganpat);
//console.log(b.lee);
//console.log(b.moti);
console.log(b['moti']);//data inside variable
console.log(b['banana']);
console.log(typeof(b));

b["apple"]=99;

b.moti=11;//property /varibale inside a big varibale /
console.log(b.moti);

console.log(b.apple);

b[10]=88;
console.log(b[10]);
b[10];

console.log(b);