"use strict";
// Ersätt alla : any med passande typ
// Avkommentera funktionerna längst ner i koden för att testa de olika funktionerna
// Se mer detaljerade instruktioner i koden
const ex1 = () => {
    const name = "Sandra";
    const age = 25;
    const isBirthday = false;
    const greet = (name, age, isBirthday) => {
        console.log(`Hey ya! ${name}, age ${age}, do you have a birthday today? ${isBirthday}`);
    };
    greet(name, age, isBirthday);
    const sum = (num1, num2) => num1 + num2;
    sum(1, 2);
    const names = ["Sandra", "Stina", "Torsten"];
    names.forEach(name => {
        console.log(`Hi you one of all ${name}`);
    });
};
ex1();
