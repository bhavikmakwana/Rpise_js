var obj1 = {
    x:10,
    y:20,
    z:30
};

var obj2 = {
    p:100,
    q:200,
    r:300
};

var obj3 = {
    e:true,
    g:'cat'
};
//Object Association 
obj1.k = obj2;
obj2.s = obj1;
obj2.t = obj3;
obj3.f = obj1;


//printing objects 
console.log(obj1);
//circular
//console.log(obj2);
//console.log(obj3);


//Finding 'r' from object 2 in many ways
console.log(obj2.r);
console.log(obj1.k.r);
console.log(obj3.f.k.r);
console.log(obj2.t.f.k.r);
console.log(obj2.s.k.s.k.s.k.r);


