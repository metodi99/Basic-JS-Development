let firstHeader = document.getElementById("myTitle");
let secondHeader = document.getElementsByTagName("h1")[1];
let thirdHeader = document.querySelector("h3");
let firstParagraph = document.getElementsByClassName("paragraph")[0];
let secondParagraph = document.getElementsByClassName("paragraph")[1];



firstHeader.innerText = "Hi! This is the new text!";
firstParagraph.innerHTML = "Wow! I can't believe how easy this is!!!";

secondParagraph.innerText = "I love my dog so much.";

secondHeader.innerText = "I have no idea what to write next.";

thirdHeader.innerText = "Thank God this is the last thing to change, bye see ya!"
