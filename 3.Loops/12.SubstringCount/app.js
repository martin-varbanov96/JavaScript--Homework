function countSubstringOccur(arg) {
    var substr = arg[0];
    var str = arg[1];
    var strToLower = str.toLowerCase();
    
    var re = new RegExp(substr, 'g'); //create a regex to match
    var count = strToLower.match(re);
    
    return count.length;
}

var input = ['in', 'We are living in a yellow submarine. We dont'+ 'thave anything else. Inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.'];
console.log(countSubstringOccur(input));
console.log();


input = ['but', 'But you were living in another world tryin' +'to get your message through.']
console.log(countSubstringOccur(input));
console.log();