//Format Numbers as Currency String
const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'INR'
});

formatter.format(2599);

console.log(formatter.format(2599));

//  Format Numbers as Currency String Using concatenation

const num = 1234.7889;

const result = '₹ '+num.toFixed(2);

console.log(result);

// Format Numbers as Currency String Using toLocaleString()

const result2 = (2655).toLocaleString('en-US', {
    style: 'currency',
    currency: 'INR'
});

console.log(result2);