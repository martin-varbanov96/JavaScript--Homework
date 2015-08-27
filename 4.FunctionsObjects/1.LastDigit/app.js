function lastDigitAsText(number) {
    var digit = number % 10;
    
    if (digit < 0) {
        digit = digit * (-1);
    }

    switch (digit) {
        case 1:
            return 'one';
            break;
        case 2:
            return 'two';
            break;
        case 3:
            return 'three';
            break;
        case 4:
            return 'four';
            break;
        case 5:
            return 'five';
            break;
        case 6:
            return 'six';
            break;
        case 7:
            return 'seven';
            break;
        case 8:
            return 'eight';
            break;
        case 9:
            return 'nine';
            break;
        case 0:
            return 'zero';
            break;
        default:
            return 'Error';
            break;
    }

}

console.log(lastDigitAsText(6));
console.log();

console.log(lastDigitAsText(-55));
console.log();

console.log(lastDigitAsText(133));
console.log();

console.log(lastDigitAsText(14587));
console.log();

console.log(-55%10);