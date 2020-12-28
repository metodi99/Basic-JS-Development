var a = 5;
console.log(a);
console.log(typeof(a));

var b = "Lets start with javascript";
console.log(b);
console.log(typeof(b));

var vv = true;
console.log(vv);
console.log(typeof(vv));






var phone = prompt("Enter the price for 1 phone");
var phonePrice = parseInt(phone);
var tax = prompt("Enter the tax for 1 phone");
var tax2 = parseInt(tax);
tax2 = (phonePrice/100) * tax2;
var price = 30*(phonePrice+tax2);

console.log("The price for 30 phones is");
console.log(price);



