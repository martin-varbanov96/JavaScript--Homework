function biggerThanNeighbors(index, arr){
    
    if (index >= arr.length) {
        return "invalid index";
    
    }
    else if (arr[index] == 1 || arr[index+1] == arr.length) {
        return "only one neighbor";
    }

    else if (arr[index] > arr[index - 1] && arr[index] > arr[index + 1]) {
        return "Bigger";
    }
    else {
        return "not bigger";
    }
}

console.log(biggerThanNeighbors(2, [1, 2, 3, 3, 5]));
console.log();

console.log(biggerThanNeighbors(2, [1, 2, 5, 3, 4]));
console.log();

console.log(biggerThanNeighbors(5, [1, 2, 5, 3, 4]));
console.log();

console.log(biggerThanNeighbors(0, [1, 2, 5, 3, 4]));
console.log();




