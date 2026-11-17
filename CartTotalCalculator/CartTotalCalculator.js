const cartItems = [
  { name: 'Notebook', price: 10, quantity: 2 },
];

function calculateSubTotal(items) {
    return items.reduce((total, item) => total + item.price * item.quantity, 0); 
}

function calculateDiscount(subTotal, discountPercent) {
    return subTotal * (discountPercent / 100);
}

function calculateTax(amountAfterDiscount, taxPercent) {
    return amountAfterDiscount * (taxPercent / 100);
}

function createCartSummary(items, discountPercent, taxPercent){
    const subTotal = calculateSubTotal(items);
    const discount = calculateDiscount(subTotal, discountPercent);
    const amountAfterDiscount = subTotal - discount;
    const tax = calculateTax(amountAfterDiscount, taxPercent);
    const total = amountAfterDiscount + tax;

    return {
        subTotal: subTotal,
        discount: discount,
        amountAfterDiscount: amountAfterDiscount,
        tax: tax,
        total: total
    };
}

console.log(createCartSummary(cartItems, 10, 5));