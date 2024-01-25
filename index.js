/** This example is by no means a robust or production ready piece of code. 
* I combines my love of the sport Squash with coding, I would encourage people to think of 
* meaningful examples when creating projects that are designed to assist with learning.The meaning is
* relevant then to the programmer, wether you're a scientist, love knitting, collecting stuff, you can make your code meaningful
* by making it relevant.
* The intention is to cover the usage of two array functions:- map and reduce 
* We start with a standard array and use map to iterate through the array. Then we look at taking an object, converting that into an array and iterating through that.
* The challenge there is that often arrays contain objects that also need to be converted. Finally you are invited to complete the exercise by using map to 
* create arrays of the different countries that ther players represent.
**/



// Here is our data stored in an array.
const squashPlayers = [
  "Ali Farag: Egypt",
  "Nour ElSherbini: Egypt",
  "Diego Elias: Peru",
  "Hania El Hammamy: Egypt",
  "Nouran Gohar: Egypt",
  "Mostafa Asal: Egypt",
  "Nele Gilis: Belgium",
  "Mohamed ElShorbagy: England",
  "Amanda Sobhy: Egypt",
];

// console.log(typeof squashObject);
// Simple mapping using an array of strings

squashPlayers.map((player) => {
  console.log("Mapped from an array -> Player", player);
});



squashPlayers.map((item) => {
  const simple = document.querySelector("#simple");
  const listItem = document.createElement("li");
  listItem.textContent = item;
  simple.appendChild(listItem);
  console.log(item);
});

//  Now lets look at a 'real world example' using an object. Objects are typically used when storing data online.

const squashObject = {
  player1: {
    name: "Ali Farag",
    ranking: 1,
    country: "Egypt",
  },
  player2: {
    name: "Nour ElSherbini",
    ranking: 1,
    country: "Egypt",
  },
  player3: {
    name: "Diego Elias",
    ranking: 2,
    country: "Peru",
  },
  player4: {
    name: "Hania El Hammamy",
    ranking: 2,
    country: "Egypt",
  },
  player5: {
    name: "Paul Coll",
    ranking: 3,
    country: "NZ",
  },
  player6: {
    name: "Nouran Gohar",
    ranking: 3,
    country: "Egypt",
  },
  player7: {
    name: "Mostafa Asal",
    ranking: 4,
    country: "Egypt",
  },
  player8: {
    name: "Nele Gilis",
    ranking: 4,
    country: "Belgium",
  },
  player9: {
    name: "Mohamed ElShorbagy",
    ranking: 5,
    country: "England",
  },
  player10: {
    name: "Amanda Sobhy",
    ranking: 5,
    country: "USA",
  },
};

//  Pulling data from a service possibly held in an object on a server
// Create an array from our object, we are interested in the values
const squashArrayValues = Object.values(squashObject);
// create an array of our objects
console.log("Here is our Array of Objects", squashArrayValues);

const listel = document.querySelector("#lists");

squashArrayValues.map((item) => {
  const name = `${item.name}`;
  const ranking = `${item.ranking}`;
  const country = `${item.country}`;
  const listItem = document.createElement("li");
  listItem.textContent =
    name + " from " + country + " world ranking " + ranking;
  listel.appendChild(listItem);
});

// Reduce function... lets find how many  players from each country

const countries = squashArrayValues.reduce((accumulator, player) => {
  const country = player.country;
  if (!accumulator[country]) {
    accumulator[country] = [];
  }
  accumulator[country].push(player.name);
  return accumulator;
}, {});

console.log(countries);

const lands = document.querySelector("#countries");
const listItem = document.createElement("li");

listItem.textContent = countries.Egypt;
lands.appendChild(listItem);
// Now as an exercise you can create an array out of the object and map through it and get the values for the different countries
