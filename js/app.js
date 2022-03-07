function getInputValue(FiledId) {
    const inputFiled = document.getElementById(FiledId);
    const valueInText = inputFiled.value;
    const value = parseFloat(valueInText);
    inputFiled.value = '';
    return value;
}
function updateTotal(FiledId, ammount) {
    const previousTotal = getInnerTextValue(FiledId);
    const newTotal = previousTotal + ammount;
    document.getElementById(FiledId).innerText = newTotal;
}
function getInnerTextValue(FiledId) {
    const fieldTag = document.getElementById(FiledId);
    const fieldValueInText = fieldTag.innerText;
    const value = parseFloat(fieldValueInText);
    return value;
}
function updateBalance(ammmount, isAdding) {
    const previousBalance = getInnerTextValue('blance-total');
    let newBalance;
    if (isAdding == true) {
        newBalance = previousBalance + ammmount;
    }
    else {
        newBalance = previousBalance - ammmount;
    }
    document.getElementById('blance-total').innerText = newBalance;
}
document.getElementById('deposit-button').addEventListener('click', function () {
    const ammount = getInputValue('deposite-input');
    if (ammount > 0) {
        updateTotal('deposit-total', ammount);
        updateBalance(ammount, true);
    }
});
document.getElementById('widthraw-button').addEventListener('click', function () {
    const ammount = getInputValue('widthraw-input');
    balance = getInnerTextValue('blance-total');
    if (ammount > 0 && balance >= ammount) {
        updateTotal('widthraw-total', ammount);
        updateBalance(ammount, false);
    }
})