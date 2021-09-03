//phone button handler
const phoneMinusBtn = document.getElementById('phone-minus-btn');
const phonePlusBtn = document.getElementById('phone-plus-btn');
phonePlusBtn.addEventListener('click', () => plusBtnHandler('phone-count', 'phone-price'));
phoneMinusBtn.addEventListener('click', () => minusBtnHandler('phone-count', 'phone-price'));

function plusBtnHandler(countId, priceId) {
    const count = document.getElementById(countId);
    let countNum = parseInt(count.value);
    countNum++
    document.getElementById(countId).value = countNum;
    priceCalculator(priceId, countNum);
}

function minusBtnHandler(countId, priceId) {
    const count = document.getElementById(countId);
    let countNum = parseInt(count.value);
    if (countNum < 1) {
        alert('Please select atleast 1 item!')
    }
    else {
        countNum--;
    }
    document.getElementById(countId).value = countNum;
    priceCalculator(priceId, countNum);
}

function priceCalculator(priceId, count) {
    let unitPrice;
    if (priceId = 'phone-price') {
        unitPrice = 1219;
    } else {
        unitPrice = 59;
    }
    price = count * unitPrice;
    document.getElementById(priceId).innerText = price;
    grandPriceCalculator();
}

function grandPriceCalculator() {
    const phonePrice = document.getElementById('phone-price');
    const phonePriceNum = parseInt(phonePrice.innerText);
    const casePrice = document.getElementById('case-price');
    const casePriceNum = parseInt(casePrice.innerText);
    let subtotal = phonePriceNum + casePriceNum;
    let tax = subtotal * 0.15;
    let taxRound = Math.round(tax);
    let grandTotal = taxRound + subtotal;
    document.getElementById('subtotal').innerText = subtotal;
    document.getElementById('tax').innerText = taxRound;
    document.getElementById('total').innerText = grandTotal;
}

grandPriceCalculator();