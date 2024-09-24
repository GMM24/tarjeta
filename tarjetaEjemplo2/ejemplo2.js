const cardPaymentBtn = document.getElementById('cardPayment');
const cardPaymentForm = document.getElementById('cardPaymentForm');
const creditCardForm = document.getElementById('creditCardForm');
const cardNumberInput = document.getElementById('cardNumberInput');
const cardNameInput = document.getElementById('cardNameInput');
const cardExpiryInput = document.getElementById('cardExpiryInput');
const cardCVVInput = document.getElementById('cardCVVInput');
const cardNumber = document.getElementById('cardNumber');
const cardName = document.getElementById('cardName');
const cardExpiry = document.getElementById('cardExpiry');
const cardCVV = document.getElementById('cardCVV');
const creditCard = document.querySelector('.credit-card');

cardPaymentBtn.addEventListener('click', () => {
cardPaymentForm.style.display = 'block';
cashPaymentForm.style.display = 'none';
});

cardNumberInput.addEventListener('input', (e) => {
let value = e.target.value.replace(/\s/g, '');
let formattedValue = '';
for (let i = 0; i < value.length; i++) {
if (i > 0 && i % 4 === 0) {
formattedValue += ' ';
}
formattedValue += value[i];
}
e.target.value = formattedValue;
cardNumber.textContent = formattedValue || '**** **** **** ****';

if (value.startsWith('4')) {
cardNumber.textContent = 'Visa ' + cardNumber.textContent;
} else if (value.startsWith('5')) {
cardNumber.textContent = 'MasterCard ' + cardNumber.textContent;
} else if (value.startsWith('3')) {
cardNumber.textContent = 'American Express ' + cardNumber.textContent;
}else if (value.startsWith('6')) {
cardNumber.textContent = 'Discover ' + cardNumber.textContent;
}
});

cardNameInput.addEventListener('input', (e) => {
cardName.textContent = e.target.value.toUpperCase() || 'NOMBRE DEL TITULAR';
});

cardExpiryInput.addEventListener('input', (e) => {
let value = e.target.value.replace(/[^\d]/g, '');
if (value.length > 2) {
value = value.slice(0, 2) + '/' + value.slice(2);
}
e.target.value = value;
cardExpiry.textContent = value || 'MM/AA';
});

cardCVVInput.addEventListener('focus', () => {
creditCard.classList.add('flipped');
});

cardCVVInput.addEventListener('blur', () => {
creditCard.classList.remove('flipped');
});

cardCVVInput.addEventListener('input', (e) => {
cardCVV.textContent = e.target.value || '***';
});

// Cash payment functionality
const cashPaymentBtn = document.getElementById('cashPayment');
const cashPaymentForm = document.getElementById('cashPaymentForm');
const exactPaymentBtn = document.getElementById('exactPayment');
const changePaymentBtn = document.getElementById('changePayment');
const changeAmount = document.getElementById('changeAmount');
const confirmCashPaymentBtn = document.getElementById('confirmCashPayment');

cashPaymentBtn.addEventListener('click', () => {
cashPaymentForm.style.display = 'block';
cardPaymentForm.style.display = 'none';
});

exactPaymentBtn.addEventListener('click', () => {
changeAmount.style.display = 'none';
confirmCashPaymentBtn.style.display = 'block';
});

changePayment.addEventListener('click', () => {
changeAmount.style.display = 'block';
confirmCashPaymentBtn.style.display = 'block';

});

// Success modal functionality
const successModal = document.getElementById('successModal');
const closeBtns = document.getElementsByClassName('close');

function showSuccessModal() {
successModal.style.display = 'block';
setTimeout(() => {
successModal.style.display = 'none';
showDeliveryModal();
}, 3000);
}

// Delivery options modal functionality
const deliveryModal = document.getElementById('deliveryModal');
const pickupButton = document.getElementById('pickupButton');
const deliveryButton = document.getElementById('deliveryButton');

function showDeliveryModal() {
deliveryModal.style.display = 'block';
}

pickupButton.addEventListener('click', () => {
deliveryModal.style.display = 'none';
mapModal.style.display = 'block';
});

deliveryButton.addEventListener('click', () => {

deliveryModal.style.display = 'none';
deliveryFormModal.style.display = 'block';
});

// Map modal functionality
const mapModal = document.getElementById('mapModal');
const confirmStoreBtn = document.getElementById('confirmStore');

confirmStoreBtn.addEventListener('click', () => {
mapModal.style.display = 'none';
alert('Tienda seleccionada. ¡Te esperamos!');
window.location.href = '/'; // Redirect to home page
});

// Delivery form modal functionality
const deliveryFormModal = document.getElementById('deliveryFormModal');
const deliveryForm = document.getElementById('deliveryForm');
const paymentMethodSpan = document.getElementById('paymentMethod');

deliveryForm.addEventListener('submit', (e) => {
e.preventDefault();
deliveryFormModal.style.display = 'none';
alert('¡Envío exitoso! Tu pedido llegará en 20-30 minutos.');
window.location.href = '/'; // Redirect to home page
});

// Close button functionality for all modals
for (let i = 0; i < closeBtns.length; i++) {
closeBtns[i].addEventListener('click', function() {

this.parentElement.parentElement.style.display = 'none';
});
}

// Form submission handlers
creditCardForm.addEventListener('submit', (e) => {
e.preventDefault();
showSuccessModal();
paymentMethodSpan.textContent = 'Tarjeta';
});

confirmCashPaymentBtn.addEventListener('click', () => {
showSuccessModal();
paymentMethodSpan.textContent = 'Efectivo';
});

// Simple map functionality (replace with actual map implementation)
function initMap() {
// This function would normally initialize a map
console.log('Map initialized');
}

window.onload = initMap;