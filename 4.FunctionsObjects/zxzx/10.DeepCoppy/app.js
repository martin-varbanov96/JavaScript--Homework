function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

function compareObjects(obj, objCopy) {
    return obj == objCopy;
}

var a = { name: 'Pesho', age: 21 };

var b = clone(a);
console.log('a == b --> ' + compareObjects(a, b));

var c = a;
console.log('a == c --> ' + compareObjects(a, c));

console.dir(a);
console.log();

console.dir(b);
console.log();

console.dir(c);
console.log();