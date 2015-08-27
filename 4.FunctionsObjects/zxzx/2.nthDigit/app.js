function findNthDigit(arr) {

    var index = arr[1].toString().replace(/\D+/, '');
    var count = arr[0];

    if (index[index.length - count] == undefined) {
        return "Out of digits";
    }
    else {
        return index[index.length - count];
    }



}



var a = [1, 6];

console.log(findNthDigit(a));
console.log();

a = [2, -55];
console.log(findNthDigit(a));
console.log();

a = [6, 923456];
console.log(findNthDigit(a));
console.log();

a = [3, 1451.78];
console.log(findNthDigit(a));
console.log();


a = [6, 888.88];
console.log(findNthDigit(a));
console.log();




