let kg = parseInt(prompt("Enter weight in kg:"));
let text = document.querySelector("h3");

function weightInChickens(input) {
    let weightInChickens = 0;
    if (isNaN(input)) {
        text.innerHTML = "Please enter numbers!"
    }
    else {
        weightInChickens = input * 2;
        text.innerHTML = "Your weight in chickens is: " + weightInChickens;
    }
    return weightInChickens;
}
weightInChickens(kg)