let mainDiv = document.querySelector("div");
let paragraph = document.querySelector('p');

let numbers = [10, 54, 9];

function printSum(input) {
    let sum = 0;
    for (let i of input) {
        if (!isNaN(i)) {
            mainDiv.innerHTML += `<li> ${input[0]} </li>`;
            mainDiv.innerHTML += `<li> ${input[1]} </li>`;
            mainDiv.innerHTML += `<li> ${input[2]} </li>`;
            sum = input[0] + input[1] + input[2];
        }

        paragraph.innerHTML = `The sum is: ${sum}`;
        return sum;
    }


}
printSum(numbers)