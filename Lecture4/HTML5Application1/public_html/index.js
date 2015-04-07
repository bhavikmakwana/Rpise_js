// Object Composition 1: obj1 properties are owner/container
var obj1={
    x:10,
    y:20,
    z:30
};

console.log("This is a object");
console.log(obj1);
console.log(obj1.x);
console.log(obj1.y);
console.log(obj1.z);
console.log(typeof(obj1));

// Object Composition 2: obj2 properties are owned/componenent

var obj2 = {
    p:100,
    q:200,
    r:300
};
console.log(obj2);
console.log(obj2.p);
console.log(obj2.q);
console.log(obj2.r);

obj1.k = obj2;
console.log(obj1.k);

console.log(obj1.k.p);