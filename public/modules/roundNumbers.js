export function roundNearestTenth(number) {
    const tenNum = number * 10; // This multiplies the original number by 10
    const roundTenNum = Math.round(tenNum); // This rounds the tenNum to the nearest whole number

    return roundTenNum / 10; // This number divides the rounded tenNum by 10 to get to the rounded number

}

export function roundNearestHundredth(number) {
    const hundredNum = number * 100; // This multiplies the original number by 10
    const roundHundredNum = Math.round(hundredNum); // This rounds the tenNum to the nearest whole number

    return roundHundredNum / 100; // This number divides the rounded tenNum by 100 to get to the rounded number

}

export function roundNearestThousandth(number) {
    const thousandNum = number * 1000;
    const roundThousandNum = Math.round(thousandNum);

    return roundThousandNum / 1000;
}

function roundNearestDecimal(number, decimalPlaces) {
    // This tells us what place value are we rounding to.
    const tenPower = Math.pow(10, decimalPlaces);

    // This code multiplies the number by baseTenValue.
    const numberTenPower = number * tenPower;
    
    // This line rounds the numberTenPower variable to the nearest whole number.
    const roundNumberTenPower = Math.round(numberTenPower);
   
    // This line makes the number back to its decimal form and returns the rounded result.
    return roundNumberTenPower / tenPower;
    
}

// roundNearestTenth
console.log(roundNearestDecimal(2.49, 1));
console.log(roundNearestDecimal(2.44, 1));
console.log(roundNearestDecimal(24.44, 1));
console.log(roundNearestDecimal(24.48, 1));
console.log(roundNearestDecimal(24.487, 2));