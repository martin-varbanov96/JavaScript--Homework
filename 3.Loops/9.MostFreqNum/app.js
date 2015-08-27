function freqNum(arr){
    var i;
    var k;
    var count = 0;
    var finalCount = 0;
    var index;

    for (i = 0; i < arr.length; i++) {
        for (k = 0; i < arr.length; i++) {
            if (arr[i] == arr[k]) {
                count++;
            }
            else {
                if (finalCount < count) {
                    
                    finalCount = count;
                    index = arr[i];
                
                }
            }

        }
    }
    return index + ' (' + count + ' times)'; 
}

var arr = [4, 1, 1, 1, 3, 3, 4];
console.log(freqNum(arr));
console.log();


arr = [2, 1, 1, 5, 7, 1, 2, 5, 7, 3, 87, 2, 12, 634, 123, 51, 1];
console.log(freqNum(arr));
console.log();

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
console.log(freqNum(arr));
console.log();


