function ATM() {
    let current = 18000;
    alert(`Your current ammount is: ${current}`);
    confirm("Would you like to withdraw money:");
    let cash = prompt("Please enter the ammount:");
    let leftCash = current - cash;
    if (cash > 18000) {
        alert("Not enough money");
    }
    else if (cash <= 0) {
        alert("Error");
    }
    else {
        alert("Please take your card and money");
        alert(`You have ${leftCash} left`);
        alert("Thank you for choosing this company!");
    }

}
ATM()