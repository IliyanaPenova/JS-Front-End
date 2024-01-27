function coffeeMaker(input) {
  let coffees = [];

  function findBaristaByName(name) {
    return coffees.find((barista) => barista.name === name);
  }

  function prepareCoffee(barista, shift, coffeeType) {
    if (
      barista &&
      barista.shift === shift &&
      barista.skills.includes(coffeeType)
    ) {
      console.log(`${barista.name} has prepared a ${coffeeType} for you!`);
    } else {
      console.log(
        `${barista.name} is not available to prepare a ${coffeeType}.`
      );
    }
  }

  function changeShift(barista, newShift) {
    barista.shift = newShift;
    console.log(`${barista.name} has updated his shift to: ${newShift}`);
  }

  function learnCoffeeType(barista, newCoffeeType) {
    if (barista.skills.includes(newCoffeeType)) {
      console.log(`${barista.name} knows how to make ${newCoffeeType}.`);
    } else {
      barista.skills.push(newCoffeeType);
      console.log(
        `${barista.name} has learned a new coffee type: ${newCoffeeType}.`
      );
    }
  }

  const n = parseInt(input[0]);
  for (let i = 1; i <= n; i++) {
    const [name, shift, drinks] = input[i].split(" ");
    const barista = { name, shift, skills: drinks.split(",") };
    coffees.push(barista);
  }

  for (let i = n + 1; i < input.length; i++) {
    const [action, name, param1, param2] = input[i].split(" / ");

    const barista = findBaristaByName(name);

    switch (action) {
      case "Prepare":
        prepareCoffee(barista, param1, param2);
        break;
      case "Change Shift":
        changeShift(barista, param1);
        break;
      case "Learn":
        learnCoffeeType(barista, param1);
        break;
    }
  }

  for (const barista of coffees) {
    console.log(
      `Barista: ${barista.name}, Shift: ${
        barista.shift
      }, Drinks: ${barista.skills.join(", ")}`
    );
  }
}

// Example usage
const input = [
  "3",
  "Alice day Espresso,Cappuccino",
  "Bob night Latte,Mocha",
  "Carol day Americano,Mocha",
  "Prepare / Alice / day / Espresso",
  "Change Shift / Bob / night",
  "Learn / Carol / Latte",
  "Learn / Bob / Latte",
  "Prepare / Bob / night / Latte",
  "Closed",
];

manageCafeteria(input);
