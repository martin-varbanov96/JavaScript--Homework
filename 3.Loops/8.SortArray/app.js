function sortArray(arr){
    var i;
    var k;
    var temp = 0;
    
    for (i = 0; i < arr.length; i++) {
        for (k = 0; i < arr.length; i++) {
            if (arr[i] >= arr[i + 1]) {
                temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }

        }
    }

    return arr;
}

var harr = [1, 3, 2, 5, 3];
console.log(sortArray(harr));