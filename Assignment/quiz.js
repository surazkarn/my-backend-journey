console.log(Boolean("false"));
console.log(Boolean(NaN));
console.log(Boolean(null));
console.log(Boolean(""));
console.log(Boolean("r"));


console.log("2nd");
console.log(2&&0||1||null&&0);
//The logical-AND operator ( && ) has higher precedence than the logical-OR operator ( || ), so q && r is grouped as an operand.
console.log(2&&0)
console.log(0||1);
console.log(1||null);
console.log(1&&0);

console.log("3rd");

let a=0;
for(a;a<5;a++);
console.log(a);

console.log("try");
for(let b=0;b<5;b++){
console.log(b)}

console.log("4th");
let x;
console.log(x);
console.log(typeof(x));

console.log("5th");
console.log(typeof(NaN));
//NaN is a type of number which cannot be represented as
//a number but it belongs to the Numbers typein js