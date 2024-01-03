const ex2 = () => {

    // Deklarera en typ för Pizza
    type Pizza = {
        name: string;
        slices: number;
        toppings: string[];
        price: number;
        vegan?: boolean;
    }

    const pizza: Pizza = {
      name: "Vesuvio",
      slices: 8,
      toppings: ["cheese", "tomato", "ham"],
      price: 80,
    }

    const veganPizza: Pizza= {
      name: "Vesuvio",
      slices: 8,
      toppings: ["cheese", "tomato", "squash"],
      price: 70,
      vegan: true
    }


    const getPizzaInfo = (pizza: Pizza): void => {
        console.log(pizza.name)
        console.log(pizza.slices)
        pizza.toppings.forEach((topping: string) => { console.log(topping) })
        console.log(pizza.price)
        if(pizza.vegan) {
            console.log("This pizza is vegan")
        }
    }

    getPizzaInfo(pizza);
    getPizzaInfo(veganPizza);
}

ex2();