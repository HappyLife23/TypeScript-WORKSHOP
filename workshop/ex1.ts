// Ersätt alla : any med passande typ
// Avkommentera funktionerna längst ner i koden för att testa de olika funktionerna
// Se mer detaljerade instruktioner i koden


  const ex1 = () => {

    const name: string = "Sandra";
    const age: number = 25;
    const isBirthday: boolean = false;

    const greet = (name: string, age :number, isBirthday: boolean): void => {

      console.log(`Hey ya! ${name}, age ${age}, do you have a birthday today? ${isBirthday}`);

    };

    greet(name, age, isBirthday);


    const sum = (num1: number, num2: number): number => num1 + num2;

    sum(1, 2);


    const names: string[] = ["Sandra", "Stina", "Torsten"];

    names.forEach(name => {
        console.log(`Hi you one of all ${name}`);
    });
   



  };
ex1();