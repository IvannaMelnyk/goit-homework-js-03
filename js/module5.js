function checkForSpam(str) {
    'use strict';
    // Write code under this line
    const string = str.toLowerCase();
    const checkedString =
        string.includes('spam') || string.includes('sale') ? true : false;

    return checkedString;
}

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true