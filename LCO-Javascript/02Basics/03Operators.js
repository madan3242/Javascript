var num1 = 7;
var num2 = 6;

console.log(num1+num2);

var result = num1 > num2;
console.log(result);

// Discount = (List price - Sell Price ) / List Price * 100

// a + b * c / d * e

var sellingPrice = 199;
var listingPrice = 799;

var discountPrice = (listingPrice - sellingPrice) / listingPrice * 100;

console.log(`Discount Price = ${discountPrice}`);

displayDiscountPercentage = Math.round(discountPrice);

console.log(displayDiscountPercentage+ " % off");

var result = listingPrice == sellingPrice;
console.log(result);

console.log(typeof result);
