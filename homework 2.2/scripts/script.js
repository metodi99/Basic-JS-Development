var year = prompt("Enter your year of birth:");
var year2 = parseInt(year);
var chineseZodiac = (year2 - 4)%12;

if (chineseZodiac == 0) {
    alert("You are a Rat!");
}
else if (chineseZodiac == 1) {
    alert("You are Ox!");
}
else if (chineseZodiac == 2) {
    alert("You are Tigger!");
}
else if (chineseZodiac == 3) {
    alert("You are Rabbit!");
}
else if (chineseZodiac == 4) {
    alert("You are Dragon!");
}
else if (chineseZodiac == 5) {
    alert("You are Snake!");
}
else if (chineseZodiac == 6) {
    alert("You are Horse!");
}
else if (chineseZodiac == 7) {
    alert("You are Goat!");
}
else if (chineseZodiac == 8) {
    alert("You are Monkey!");
}
else if (chineseZodiac == 9) {
    alert("You are Rooster!");
}
else if (chineseZodiac == 10) {
    alert("You are Dog!");
}
else {
    alert("You are a pig!");
}