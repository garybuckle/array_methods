/**
 * This example is by no means a robust or production ready piece of code.
 * I combines my love of the sport Squash with coding, I would encourage people to think of
 * meaningful examples when creating projects that are designed to assist with learning.The meaning is
 * relevant then to the programmer, wether you're a scientist, love knitting, collecting stuff, you can make your code meaningful
 * by making it relevant.
 * The intention is to cover the usage of two array functions:- map and reduce
 * We start with a standard array and use map to iterate through the array. Then we look at taking an object, converting that into an array and iterating through that.
 * The challenge there is that often arrays contain objects that also need to be converted. Finally you are invited to complete the exercise by using map to
 * create arrays of the different countries that their players represent.
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

// Remove the comment below to see the nature of our data
// console.log(typeof squashObject);

// Simple mapping using an array of strings
squashPlayers.map((player) => {
  // Uncomment to list out the array
  // console.log("Mapped from an array -> Player", player);
});

// This mapping is used to create elements in the html file. Purely for demo purposes since we don't cover interacting with the DOM.
squashPlayers.map((item) => {
  const simple = document.querySelector("#simple");
  const listItem = document.createElement("li");
  listItem.textContent = item;
  simple.appendChild(listItem);
  // uncomment to see the iterator item
  // console.log(item);
});

/**
 * Now lets look at a 'real world example' using an object. Objects are typically used when storing data online.
 * Below is an object that could have theoretically have been pulled down from an an online service
 */
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

/**
 *  Create an array from our object, we are interested in the values, again this is purely to get an object for our map.
 *    Dont worry aboput the Object.values method, it merely create our squashValuesArray
 **/
const squashArrayValues = Object.values(squashObject);
// Here we can log out the nature of our array and see what it looks like

// QUESTION: WHAT TYPE OF DATA DOES THE ARRAY HOLD?. uncomment out the log to reveal the answer
// console.log("Here is our Array", squashArrayValues);

// This just links our code here with the html so that we can insert the data into our html page.
const listel = document.querySelector("#lists");

/**
 *   Here we go! again we are using map to iterate through the array
 *   Try not to get too involved whats going inside the arrow function (item)=> it illustrates that we can do
 *   lots of interesring stuff to our data. The important bit here is the mapping with the map method.
 **/
squashArrayValues.map((item) => {
  // remove comments to see the item that is mapped
  // console.log("The player", item);
  const name = `${item.name}`;
  const ranking = `${item.ranking}`;
  const country = `${item.country}`;
  const listItem = document.createElement("li");
  listItem.textContent =
    name + " from " + country + " world ranking " + ranking;
  listel.appendChild(listItem);
});

/**
 * Reduce function... lets find how many players from each country
 **/
const countries = squashArrayValues.reduce((accumulator, player) => {
  //  Remove the comment to reveal the accumulator
  // console.log("accum", accumulator);
  // console.log("player", player);
  const country = player.country;
  // console.log("country", country);

  // first pass through the iteration the accumulator is set to empty
  if (!accumulator[country]) {
    accumulator[country] = [];
  }
  /**
   *subsequent iterations push the object with the next name key on to the accumulator, incrementing the accumulator
   * according to player.country. So the first pass shows accumulator as an empty object.
   * second pass the player.country is Egypt so the object key is set to egypt and its value 1
   * third pass is also Egypt so the egypt key value is set to 2.
   * However the third pass has the country as Peru so  a Peru key with a value of 1
   * is pushed on to the accumulator.
   * Finally everything is reduced down to ONE object containing the representation values of players per country
   * and as it seems to be in squash Egypt is the winner.
   **/
  accumulator[country].push(player.name);
  return accumulator;
}, {});

// remove the comment to reveal the result of the reduce method.
// console.log("The Countries", countries);

// This just prints out the results on the html page
const lands = document.querySelector("#countries");
const listItem = document.createElement("li");
listItem.textContent = countries.Egypt;
lands.appendChild(listItem);

/**
 *  Now as an exercise you can create an array out of the object and map through it and get the values for the different * * *  countries. HINT: const myArray = Object.values(myObject); will give you an array from an object OR you can access the * *   arrays
 */
