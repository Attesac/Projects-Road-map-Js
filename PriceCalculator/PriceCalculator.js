function calculateDiscount(price, discountPercentage){
    return price * (discountPercentage / 100);
}

function calculateTax(priceAfterDiscount, taxPercentage){
    return priceAfterDiscount * (taxPercentage / 100);
}

function calculateFinalPrice(price, discountPercentage, taxPercentage){
    const discount = calculateDiscount(price, discountPercentage);
    const priceAfterDiscount = price - discount;
    const tax = calculateTax(priceAfterDiscount, taxPercentage);
    return priceAfterDiscount + tax;
}

function createPriceSummary(price, discountPercentage, taxPercentage){
    const discount = calculateDiscount(price, discountPercentage);
    const priceAfterDiscount = price - discount;
    const tax = calculateTax(priceAfterDiscount, taxPercentage);
    const finalPrice = priceAfterDiscount + tax;

    return {
        originalPrice: price,
        discount: discount,
        priceAfterDiscount: priceAfterDiscount,
        tax: tax,
        finalPrice: finalPrice
    };
}


console.log(createPriceSummary(100, 10, 10)); // Example usage
