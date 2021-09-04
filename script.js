document.addEventListener('DOMContentLoaded', function () {
    grandPriceCalculator();
})

//phone button handler
const phoneMinusBtn = document.getElementById('phone-minus-btn');
const phonePlusBtn = document.getElementById('phone-plus-btn');
phonePlusBtn.addEventListener('click', () => plusBtnHandler('phone-count', 'phone-price'));
phoneMinusBtn.addEventListener('click', () => minusBtnHandler('phone-count', 'phone-price'));


//case button handler
const caseMinusBtn = document.getElementById('case-minus-btn');
const casePlusBtn = document.getElementById('case-plus-btn');
casePlusBtn.addEventListener('click', () => plusBtnHandler('case-count', 'case-price'));
caseMinusBtn.addEventListener('click', () => minusBtnHandler('case-count', 'case-price'));

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
    if (priceId === 'phone-price') {
        unitPrice = 1219;
    }
    else if (priceId === 'case-price') {
        unitPrice = 59;
    }
    price = count * unitPrice;
    document.getElementById(priceId).innerText = price;
    grandPriceCalculator();
}

function grandPriceCalculator() {
    let phonePrice = spanToNumber('phone-price');
    let casePrice = spanToNumber('case-price');
    let subtotal = phonePrice + casePrice;
    if (!phonePrice) {
        phonePrice = 0;
        subtotal = casePrice;
    }
    else if (!casePrice) {
        casePrice = 0;
        subtotal = phonePrice;
    }
    if (!phonePrice && !casePrice) {
        subtotal = 0;
    }
    let tax = subtotal * 0.15;
    let taxRound = Math.round(tax);
    let grandTotal = taxRound + subtotal;
    document.getElementById('subtotal').innerText = subtotal;
    document.getElementById('tax').innerText = taxRound;
    document.getElementById('total').innerText = grandTotal;
}

//remove item
const removeBtns = document.getElementsByClassName('remove-item');
for (let i = 0; i < removeBtns.length; i++) {
    const removeBtn = removeBtns[i];
    removeBtn.addEventListener('click', function () {
        this.parentNode.parentNode.parentNode.remove();
        grandPriceCalculator();
    })
}

//number converter
function spanToNumber(id) {
    const price = document.getElementById(id);
    if (price) {
        const priceNum = parseInt(price.innerText);
        return priceNum;
    }
}

//check out button handler
const cart = document.getElementById('cart');
const checkoutMessage = document.getElementById('checkout-message');
const chekoutBtn = document.getElementById('check-out-btn');

chekoutBtn.addEventListener('click', function () {
    const total = spanToNumber('total');
    if (total === 0) {
        alert('Please add any item to cart!')
    } else {
        checkoutMessage.style.display = 'block';
        cart.style.display = 'none';
    }
})