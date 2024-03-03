// Menu Lists

const burgersList = [
  {
    name: "The Big Bang",
    price: "$ 13",
    ingredients: "Pulled Beef | Lettuce | Tomato | Onion | Pickle | Cheese",
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
    name: "Eggs-plorer",
    price: "$ 11",
    ingredients: "Scrambled Egg | Bacon | Lettuce | Cheese",
    isVeg: false,
  },
  {
    name: "Pluto-bean",
    price: "$ 10",
    ingredients: "Bean patty | Lettuce | Tomato | Onion | Pickle | Cheese",
    isVeg: true,
  },
];

const sidesList = [
  {
    name: "French Fries",
    price: "$ 7",
    ingredients: "Made with Potatoes from K-245L, aka Idaho!",
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
    ingredients: "Does it fly? Does it shine?",
    isVeg: false,
  },
  {
    name: "Beverages",
    price: "$ 2",
    ingredients: "There is no fish in the cans, I promise...",
    isVeg: false,
  },
];

const breakfastList = [
  {
    name: "Eggs-plorer",
    price: "$ 11",
    ingredients: "Scrambled egg | Bacon | Lettuce | Cheese",
    isVeg: false,
  },
  {
    name: "Salmon Way",
    price: "$ 12",
    ingredients: "Smoked Salmon | Tomato | Arugula | Cream cheese",
    isVeg: false,
  },
  {
    name: "Coffee",
    price: "$ 2",
    ingredients: "Energy that can turn back on the Sun",
    isVeg: false,
  },
];

const listOfEvents = [
  {
    id: 1,
    month: "Jan",
    data: [
      {
        eventDate: "2024-01-10",
        eventAddress: "123 Main Street",
        eventName: "Winter Festival",
      },
      {
        eventDate: "2024-01-20",
        eventAddress: "456 Elm Street",
        eventName: "Art Exhibition",
      },
    ],
  },
  {
    id: 2,
    month: "Feb",
    data: [
      {
        eventDate: "2024-02-05",
        eventAddress: "789 Oak Street",
        eventName: "Valentine's Ball",
      },
      {
        eventDate: "2024-02-15",
        eventAddress: "101 Pine Street",
        eventName: "Science Fair",
      },
      {
        eventDate: "2024-02-28",
        eventAddress: "202 Maple Street",
        eventName: "Film Festival",
      },
    ],
  },
  {
    id: 3,
    month: "Mar",
    data: [
      {
        eventDate: "2024-03-08",
        eventAddress: "303 Cedar Street",
        eventName: "Food Truck Rally",
      },
      {
        eventDate: "2024-03-18",
        eventAddress: "404 Birch Street",
        eventName: "St. Patrick's Day Parade",
      },
    ],
  },
  {
    id: 4,
    month: "Apr",
    data: [
      {
        eventDate: "2024-04-07",
        eventAddress: "505 Walnut Street",
        eventName: "Spring Garden Show",
      },
      {
        eventDate: "2024-04-22",
        eventAddress: "606 Chestnut Street",
        eventName: "Earth Day Celebration",
      },
      {
        eventDate: "2024-04-30",
        eventAddress: "707 Sycamore Street",
        eventName: "Music Festival",
      },
    ],
  },
  {
    id: 5,
    month: "May",
    data: [
      {
        eventDate: "2024-05-12",
        eventAddress: "808 Spruce Street",
        eventName: "Mother's Day Brunch",
      },
      {
        eventDate: "2024-05-25",
        eventAddress: "909 Pine Street",
        eventName: "Memorial Day Parade",
      },
    ],
  },
  {
    id: 6,
    month: "Jun",
    data: [
      {
        eventDate: "2024-06-08",
        eventAddress: "1010 Cedar Street",
        eventName: "Summer Concert Series",
      },
      {
        eventDate: "2024-06-20",
        eventAddress: "1111 Birch Street",
        eventName: "Father's Day BBQ",
      },
      {
        eventDate: "2024-06-28",
        eventAddress: "1212 Maple Street",
        eventName: "Outdoor Movie Night",
      },
    ],
  },
  {
    id: 7,
    month: "Jul",
    data: [
      {
        eventDate: "2024-07-04",
        eventAddress: "1313 Oak Street",
        eventName: "Independence Day Fireworks",
      },
      {
        eventDate: "2024-07-15",
        eventAddress: "1414 Elm Street",
        eventName: "Food and Wine Festival",
      },
      {
        eventDate: "2024-07-28",
        eventAddress: "1515 Main Street",
        eventName: "Summer Block Party",
      },
    ],
  },
  {
    id: 8,
    month: "Aug",
    data: [
      {
        eventDate: "2024-08-10",
        eventAddress: "1616 Walnut Street",
        eventName: "Back to School Fair",
      },
      {
        eventDate: "2024-08-22",
        eventAddress: "1717 Sycamore Street",
        eventName: "Community Picnic",
      },
    ],
  },
  {
    id: 9,
    month: "Sep",
    data: [
      {
        eventDate: "2024-09-05",
        eventAddress: "1818 Spruce Street",
        eventName: "Labor Day Parade",
      },
      {
        eventDate: "2024-09-18",
        eventAddress: "1919 Pine Street",
        eventName: "Autumn Harvest Festival",
      },
    ],
  },
  {
    id: 10,
    month: "Oct",
    data: [
      {
        eventDate: "2024-10-10",
        eventAddress: "2020 Cedar Street",
        eventName: "Haunted House Tour",
      },
      {
        eventDate: "2024-10-15",
        eventAddress: "2424 Elm Street",
        eventName: "Thanksgiving Parade",
      },
      {
        eventDate: "2024-10-24",
        eventAddress: "2121 Birch Street",
        eventName: "Pumpkin Carving Contest",
      },
      {
        eventDate: "2024-10-31",
        eventAddress: "2222 Maple Street",
        eventName: "Halloween Costume Party",
      },
    ],
  },
  {
    id: 11,
    month: "Nov",
    data: [],
  },
  {
    id: 12,
    month: "Dec",
    data: [
      {
        eventDate: "2024-12-08",
        eventAddress: "2525 Walnut Street",
        eventName: "Holiday Market",
      },
      {
        eventDate: "2024-12-20",
        eventAddress: "2626 Sycamore Street",
        eventName: "Winter Wonderland Festival",
      },
      {
        eventDate: "2024-12-26",
        eventAddress: "2323 Oak Street",
        eventName: "Veterans Day Ceremony",
      },
      {
        eventDate: "2024-12-31",
        eventAddress: "2727 Spruce Street",
        eventName: "New Year's Eve Ball",
      },
    ],
  },
];

const reviewsArray = [
  {
    author: "Amy Johnson",
    review:
      "Delicious burgers! The food truck offers a great variety of mouthwatering burgers. The patties are juicy, and the toppings are fresh. A must-try for burger enthusiasts!",
  },
  {
    author: "Chris Martinez",
    review:
      "Fantastic food truck experience! The burgers are cooked to perfection, and the flavors are amazing. Quick service and friendly staff make it a top choice for a quick and satisfying meal in Columbus.",
  },
  {
    author: "David Anderson",
    review:
      "Best burgers in town! The food truck's commitment to quality ingredients shines through in every bite. The menu is creative, and the staff is always welcoming. I'll definitely be back for more.",
  },
  {
    author: "Emily Turner",
    review:
      "Impressive variety! Whether you're a meat lover or a vegetarian, this food truck has a burger for you. The diverse menu and the excellent taste make it a standout in the Columbus food scene.",
  },
  {
    author: "Greg Mitchell",
    review:
      "A hidden gem on wheels! The burger options are not only tasty but also reasonably priced. The food truck's mobility makes it convenient to catch wherever you are in Columbus. Highly recommended!",
  },
  {
    author: "Isabella Lopez",
    review:
      "Satisfying every craving! The food truck's burgers are a perfect balance of flavors. The buns are soft, and the toppings are generous. It's become my go-to spot for a delicious and quick meal.",
  },
  {
    author: "Kevin Thompson",
    review:
      "Exceptional service and flavor! The staff at this burger food truck are friendly and efficient. The burgers are consistently delicious, making it a reliable choice for a tasty meal on the go in Columbus.",
  },
  {
    author: "Megan Patel",
    review:
      "Incredible taste, affordable prices! The food truck delivers big on flavor without breaking the bank. I appreciate the attention to detail in each burger. A definite must-try for anyone in Columbus.",
  },
  {
    author: "Nathan Clark",
    review:
      "Burger perfection! This food truck has mastered the art of burger-making. The combination of quality ingredients and skilled preparation results in a delightful culinary experience. I can't get enough of their burgers!",
  },
  {
    author: "Olivia Taylor",
    review:
      "Top-notch quality! The burgers from this food truck are consistently delicious. The attention to detail in the cooking process and the use of fresh ingredients set it apart from the rest. A Columbus favorite!",
  },
  {
    author: "Katty Powell",
    review:
      "Best burgers in town! Stuff is amazing and friendly, food is fresh and tasty.",
  },
];

export { burgersList, sidesList, breakfastList, listOfEvents, reviewsArray };
