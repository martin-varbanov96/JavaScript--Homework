function getLoop(value){
    var i;
    var br = 0;
    for (i = 1; i <= value; i++) {
        if (i%5!=0 && i%4!=0) {
            console.log(i);
            br++;
        }
      
    }
    if (br == 0) {
        console.log("No");
    }
}

getLoop(20);
console.log();

getLoop(-5);
console.log();

getLoop(13);
console.log();