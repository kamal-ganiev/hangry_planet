// Menu Lists

const burgersList = [
  {
    name: "The Big Bang",
    price: "$ 13",
    ingredients: "Shredded Beef | Lettuce | Tomato | Onion | Pickle | Cheese",
    isVeg: false,
  },
  {
    name: "Galaxy Beef-burger",
    price: "$ 11",
    ingredients: "Beef patty | Lettuce | Tomato | Onion | Pickle | Cheese",
    isVeg: false,
  },
  {
    name: "Cosmo Chicken",
    price: "$ 10",
    ingredients: "Chicken patty | Lettuce | Tomato | Pickle | Cheese",
    isVeg: false,
  },
  {
    name: "Solar Fish",
    price: "$ 10",
    ingredients: "Fried Fish | Cole Slaw | Pickle | Tartar sauce",
    isVeg: false,
  },
  {
    name: "Pluto-bean",
    price: "$ 10",
    ingredients: "Bean patty | Lettuce | Tomato | Onion | Pickle | Cheese",
    isVeg: true,
  },
  {
    name: "Make it Combo",
    price: "+$ 5",
    ingredients: "Add fries and your choice of drink",
    isVeg: false,
  },
];

const sidesList = [
  {
    name: "French Fries",
    price: "$ 7",
    ingredients: "",
    isVeg: true,
  },
  {
    name: "Loaded fries",
    price: "$ 11",
    ingredients: "Add bacon and cheese to your fries!",
    isVeg: false,
  },
  {
    name: "Chicken Nuggets",
    price: "$ 10",
    ingredients: "",
    isVeg: false,
  },
  {
    name: "Beverages",
    price: "$ 2",
    ingredients: "",
    isVeg: false,
  },
];

const breakfastList = [
  {
    name: "Eggs-plorer",
    price: "$ 11",
    ingredients: "Scrambled eggs | Bacon | Greens | Tomato | Cheese",
    isVeg: false,
  },
  {
    name: "Salmon Way",
    price: "$ 12",
    ingredients: "Smoked Salmon | Tomato | Greens | Cream cheese",
    isVeg: false,
  },
  {
    name: "Coffee",
    price: "$ 2",
    ingredients: "",
    isVeg: false,
  },
];

const listOfEvents = [];

const reviewsArray = [
  {
    author: "Zara",
    review:
      "Top-notch quality! The burgers from this food truck are consistently delicious. The attention to detail in the cooking process and the use of fresh ingredients set it apart from the rest. A Columbus favorite!",
  },
  {
    author: "Maryam B",
    review:
      "Best burgers in town! Stuff is amazing and friendly, food is fresh and tasty.",
  },
];

export { burgersList, sidesList, breakfastList, listOfEvents, reviewsArray };
