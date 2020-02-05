const planets = [
  "mercury",
  "venus",
  "earth",
  "mars",
  "jupiter",
  "saturn",
  "uranus",
  "neptune"
];

const planetEl = document.getElementById("planets");
const upperCasePlanet = document.getElementById("UpperPlanet");
const ePlanet = document.getElementById("ePlanets");
/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/
planets.forEach(planet => (planetEl.innerHTML += `<br>${planet + " "}`));
/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/
const planetsUpperCase = planets.map(
  planets => planets.charAt(0).toUpperCase() + planets.slice(1)
);

planetsUpperCase.forEach(
  planetUpper => (upperCasePlanet.innerHTML += `<br>${planetUpper + " "}`)
);

/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/

const planetsWithLetterE = planets.filter(
    ePlanet => ePlanet.includes('e'));

planetsWithLetterE.forEach(
  ePlanet => (ePlanets.innerHTML += `<br>${ePlanet + " "}`)
);

