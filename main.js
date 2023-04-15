let dice1 = 0;
let dice2 = 0;

document.getElementById('myButton1').onclick = function() {
    dice1 = Math.floor(Math.random() * 6) + 1;
    updateDice("dice1", dice1);
    updateTotal();
}

document.getElementById('myButton2').onclick = function() {
    dice2 = Math.floor(Math.random() * 6) + 1;
    updateDice("dice2", dice2);
    updateTotal();
}

function updateDice(id, value) {
    document.getElementById(id).innerHTML = value;
}

function updateTotal() {
    
    let sum = dice1 + dice2;
    document.getElementById('total').innerHTML = "Total score: " + sum;
    
    if (dice1 !== 0 && dice2 !== 0) {
        dice1 = 0;
        dice2 = 0;
    }
}