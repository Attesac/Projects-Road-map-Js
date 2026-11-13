function isPositiveInteger(value) {
    return Number.isInteger(value) && value > 0;
}

function isNegativeInteger(value) {
    return Number.isInteger(value) && value < 0;
}

function isZero(value) {
    return value === 0;
}

function isEven(value) {
    return Number.isInteger(value) && value % 2 === 0;
}

function isOdd(value) {
    return Number.isInteger(value) && value % 2 !== 0;
}

function formatNumber(value) {
    return {
        positive: isPositiveInteger(value),
        negative: isNegativeInteger(value),
        zero: isZero(value),
        even: isEven(value),
        odd: isOdd(value)
    };
}

console.log(formatNumber(5));   // {positive: true, negative: false, zero: false, even: false, odd: true}
