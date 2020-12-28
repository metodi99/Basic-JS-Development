var a = prompt("Enter number1:");
var a1 = parseInt(a);

var b = prompt("Enter number2:");
var b1 = parseInt(b);

var c = prompt("Enter number3:");
var c1 = parseInt(c);

var d = prompt("Enter number4:");
var d1 = parseInt(d);

var e = prompt("Enter number5:");
var e1 = parseInt(e);

if (a1 > b1 && a1 > c1 && a1 > d1 && a1 > e1 ) {
    alert(a1);
    console.log("The max number is:");
}
else if (b1 > a1 &&  b1 > c1 &&  b1 > d1 &&  b1 > e1) {
    alert(b1);
    console.log("The max number is:");
}
else if (c1 > a1 &&  c1 > b1 &&  c1 > d1 &&  c1 > e1) {
    alert(c1);
    console.log("The max number is:");
}
else if (d1 > a1 &&  d1 > b1 &&  d1 > c1 &&  d1 > e1) {
    alert(d1);
    console.log("The max number is:");
}
else  {
    alert(e1);
   }


