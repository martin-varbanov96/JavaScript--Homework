function comapareChar(arr1, arr2){
    var i;
    var count = 0;

    if (arr1.length == arr2.length) {
        for (i = 0; i <= arr1.length; i++) {
            if (arr1[i] != arr2[i]) {
                count++;
            }
        }
    }

    if (count > 0) {
        return "Not Equal";
    }

    else {
        return "Equal"
    }

    return "tc Equal";

}
var charOne= ['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q'];
var charTwo = ['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q'];
console.log(comapareChar(charOne, charTwo));
console.log();

charOne = ['3', '5', 'g', 'd'];
var charTwo = ['5', '3', 'g', 'd'];
console.log(comapareChar(charOne, charTwo));
console.log();



charOne = ['6', 'f', 'w', 'q', ':', '”', 'd', '}', ']', 's', 'r'];
charTwo = ['q', 'g', 'q', 'h', 'a', 'k', 'u', '8', '}', 'q', '.', 'h', '|', ';'];
console.log(comapareChar(charOne, charTwo));
console.log();