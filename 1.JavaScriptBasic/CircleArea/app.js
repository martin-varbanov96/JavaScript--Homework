﻿ function calcCircleArea(r) {
    var output;
    
    if (isNaN(r) || r == "") {
        output = "Must enter number";
    }
    else {
        var area = r * r * Math.PI;
        output = "r = " + r + "; area = " + area;
    }
    
    printResult(output);
};

function printResult(output) {
    var p = document.createElement('p');
    var inputField = document.getElementById('input');
    
    p.innerHTML = output;
    document.getElementById('results').appendChild(p);
    
    inputField.value = "";
    inputField.focus();
};