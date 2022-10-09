//2.1 et 2.2
console.log("Exercice 2.1 et 2.2");

function type(x) {console.log(typeof(x));}
x = 'blabla';
type(x);
x = "blabla";
type(x);
x =`blabla ${x}`;
type(x);
x = 9;
type(x);
x = 2.5;
type(x);
x =true;
type(x);
x =undefined;
type(x);
x =null;
type(x);
x =[1,2,3];
type(x);
x =new Array();
type(x);
x ={};
type(x);
x ={"promo":"lpwmce", "nb":25};
type(x);
x =new Date();
type(x);
x =function() {alert('toto');}
type(x);
x =42n;
type(x);
var x;

//2.3
console.log(" ");
console.log("Exercice 2.3");

let num = 24;
console.log(typeof(num));
console.log(typeof(num.toString()));

console.log(" ");
let str = "Test"
console.log(typeof(str));
console.log(typeof(parseInt(str)));
console.log(typeof(Number.parseInt(str)));

console.log(" ");
console.log(typeof(str));
console.log(typeof(parseFloat(str)));
console.log(typeof(Number.parseFloat(str)));
console.log(typeof(Number(str)));

//2.4
console.log(" ");
console.log("Exercice 2.4");

let b=false;
let n=0;
let s='0';
let tab = [];
let o = {};

if(b==n){console.log("Vrai");}else{console.log("Faux");}
if(b==s){console.log("Vrai");}else{console.log("Faux");}
if(b==tab){console.log("Vrai");}else{console.log("Faux");}
if(b==o){console.log("Vrai");}else{console.log("Faux");}
if(n==s){console.log("Vrai");}else{console.log("Faux");}
if(n==tab){console.log("Vrai");}else{console.log("Faux");}
if(n==o){console.log("Vrai");}else{console.log("Faux");}
if(s==tab){console.log("Vrai");}else{console.log("Faux");}
if(s==o){console.log("Vrai");}else{console.log("Faux");}
if(tab==o){console.log("Vrai");}else{console.log("Faux");}
console.log(" ");
if(b===n){console.log("Vrai");}else{console.log("Faux");}
if(b===s){console.log("Vrai");}else{console.log("Faux");}
if(b===tab){console.log("Vrai");}else{console.log("Faux");}
if(b===o){console.log("Vrai");}else{console.log("Faux");}
if(n===s){console.log("Vrai");}else{console.log("Faux");}
if(n===tab){console.log("Vrai");}else{console.log("Faux");}
if(n===o){console.log("Vrai");}else{console.log("Faux");}
if(s===tab){console.log("Vrai");}else{console.log("Faux");}
if(s===o){console.log("Vrai");}else{console.log("Faux");}
if(tab===o){console.log("Vrai");}else{console.log("Faux");}
console.log(" ");

