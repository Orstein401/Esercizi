"use strict";
function somma(a, b) {
    return a + b;
}
console.log(somma(10, 50));
function chekAge(eta, nome) {
    if (eta < 0) {
        console.error("dato non valido");
    }
    else if (eta > 18) {
        console.log(nome + " è maggiorenne");
    }
    else {
        console.log(nome + " è minorenne");
    }
}
chekAge(33, "mario");
function filterEvenNumbers(array) {
    let pari = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            pari.push(array[i]);
        }
    }
    return pari;
}
console.log(filterEvenNumbers([1, 4, 5, 6, 78, 56, 34]));
function sumArray(array) {
    let somma = 0;
    for (let i = 0; i < array.length; i++) {
        somma = somma + array[i];
    }
    return somma;
}
console.log(sumArray([23, 76]));
function isPerfectNumber(number) {
    let somma = 0;
    for (let i = 0; i <= number / 2; i++) {
        if (number % i == 0) {
            somma = somma + i;
        }
    }
    return number === somma;
}
console.log(isPerfectNumber(12));
