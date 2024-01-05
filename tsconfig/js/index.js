"use strict";
function identifyType(value) {
    if (typeof value === 'string') {
        console.log('Hej, detta är en sträng');
    }
    else if (typeof value === 'number') {
        console.log('Detta är en siffra');
    }
    else {
        console.log('OKÄND JÄVEL');
    }
}
function num(value) {
    if (typeof value === 'number') {
        return value * 2;
    }
    else if (typeof value === 'string') {
        return value.length;
    }
    else {
        console.log('funkar inte');
    }
}
num(5);
num('Hello');

identifyType(20);
identifyType('hejhej')

