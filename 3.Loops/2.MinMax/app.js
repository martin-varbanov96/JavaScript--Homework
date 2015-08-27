function findMinMax(nums) {
    var min = Math.min.apply(null,nums);
    var max = Math.max.apply(null, nums);
    return {
        'Min': min,
        'Max': max,
        'Hable': "HABLE"
    };
}
var input = [1, 2, 1, 15, 20, 31];
console.log("Min ->" + findMinMax(input).Min);
console.log();

input = [1, 2, 1, 15, 20, 31];
console.log("Max ->" + findMinMax(input).Max);
console.log();


input = [2,2,2,2];
console.log("Min ->" + findMinMax(input).Min);
console.log();

input = [2,2,2,2];
console.log("Max ->" + findMinMax(input).Max);
console.log();


input = [2,500,-3,53];
console.log("Min ->" + findMinMax(input).Min);
console.log();

input = [2, 500, -3, 53];
console.log("Max ->" + findMinMax(input).Max);
console.log();