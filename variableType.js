/*
Variable : 
    var :- function scope / global scope [accessible outside the block]
    let :- block scope [can't use outside the block and can't redeclared]
    const :- [can't reassigned / redeclared]
*/

{
    var a = 10;
}
console.log(a);

{
    let b = 20;
    console.log(b);
}
//console.log(b);

const week = 7;
//week=5;
console.log(week);
