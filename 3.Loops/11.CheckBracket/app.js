function checkBracket(str){
    var i = 0;
    countOpen = 0;
    countClose = 0;

    for (i = 0; i <= str.length; i++) {
        if (str[i] == '(') {
            countOpen++;
        }

        if (str[i] == ')') {
            countClose++;
        }
    }

    if (countOpen == countClose) {
        return 'correct';
    }
    else {
        return 'incorrect';
    }

    return 'incorrect';
}


console.log(checkBracket('( ( a + b ) / 5 – d )'));
console.log();

console.log(checkBracket(') ( a + b ) )'));
console.log();

console.log(checkBracket('( b * ( c + d *2 / ( 2 + ( 12 – c / ( a + 3 ) ) ) )'));
console.log();





//    \(.*\)



//var re = /\s/g,
//count = 0;

//while (re.exec(text) !== null) {
//    ++count;
//}

//return count;