"use strict";
const ex2 = () => {
    const pizza = {
        name: "Vesuvio",
        slices: 8,
        toppings: ["cheese", "tomato", "ham"],
        price: 80,
    };
    const veganPizza = {
        name: "Vesuvio",
        slices: 8,
        toppings: ["cheese", "tomato", "squash"],
        price: 70,
        vegan: true
    };
    const getPizzaInfo = (pizza) => {
        console.log(pizza.name);
        console.log(pizza.slices);
        pizza.toppings.forEach((topping) => { console.log(topping); });
        console.log(pizza.price);
        if (pizza.vegan) {
            console.log("This pizza is vegan");
        }
    };
    getPizzaInfo(pizza);
    getPizzaInfo(veganPizza);
};
ex2();
