// Import dependencies
const Filter = require("bad-words");

// Make a new filter
const filter = new Filter();


// Add extra words to the bad words list
const words = require("./extra-words.json");
filter.addWords(...words);
filter.addWords("nigger");
filter.addWords("nigga");
filter.addWords("cunt");
