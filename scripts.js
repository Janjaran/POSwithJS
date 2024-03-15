document.getElementById('addFoodBtn').addEventListener('click', function() {
    var count = document.querySelectorAll('.choice').length + 1;

    var choiceDiv = document.createElement('div');
    choiceDiv.classList.add('input-group');

    var choiceLabel = document.createElement('label');
    choiceLabel.setAttribute('for', 'choice' + count);
    choiceLabel.textContent = 'Choice:';
    choiceDiv.appendChild(choiceLabel);

    var choiceSelect = document.createElement('select');
    choiceSelect.setAttribute('id', 'choice' + count);
    choiceSelect.classList.add('choice');
    var options = ['Burger', 'Fries', 'Fishbol', 'Kikiam'];
    options.forEach(function(option) {
        var optionElem = document.createElement('option');
        optionElem.setAttribute('value', option);
        optionElem.textContent = option;
        choiceSelect.appendChild(optionElem);
    });
    choiceDiv.appendChild(choiceSelect);

    var quantityDiv = document.createElement('div');
    quantityDiv.classList.add('input-group');

    var quantityLabel = document.createElement('label');
    quantityLabel.setAttribute('for', 'quantity' + count);
    quantityLabel.textContent = 'Quantity:';
    quantityDiv.appendChild(quantityLabel);

    var quantityInput = document.createElement('input');
    quantityInput.setAttribute('type', 'number');
    quantityInput.setAttribute('id', 'quantity' + count);
    quantityInput.classList.add('quantity');
    quantityInput.setAttribute('min', '1');
    quantityInput.setAttribute('value', '1');
    quantityDiv.appendChild(quantityInput);

    document.getElementById('foodForms').appendChild(choiceDiv);
    document.getElementById('foodForms').appendChild(quantityDiv);
});
document.getElementById('payBtn').addEventListener('click', function() {
    // Retrieve cash
    var cash = parseInt(document.getElementById('cash').value);

    // Calculate total cost
    var totalCost = 0;
    document.querySelectorAll('.choice').forEach(function(choice) {
        var selectedChoice = choice.value;
        var quantity = parseInt(document.getElementById('quantity' + choice.id.slice(-1)).value);
        var price = getPrice(selectedChoice);
        totalCost += price * quantity;
    });

    // Calculate change
    var change = cash - totalCost;

    // Display change
    document.getElementById('change').textContent = change >= 0 ? 'PHP ' + change : 'Insufficient funds!';
    document.getElementById('changeDisplay').style.display = 'block';
});

function getPrice(choice) {
    switch(choice) {
        case 'Burger':
            return 60;
        case 'Fries':
            return 50;
        case 'Fishbol':
            return 20;
        case 'Kikiam':
            return 25;
        default:
            return 0;
    }
}
