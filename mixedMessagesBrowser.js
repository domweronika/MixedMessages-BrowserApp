//Browser app
// Array of random quotes from supernatural
const quotes = [
  'My people skills are rusty. - Castiel',
  "I guess if you're gonna have faith, you cant just have it when the miracles happen. - Bobby Singer",
  "We're all going to hell Dean. Might aswell enjoy the ride. - Bella Talbot",
  'Saving people, hunting things. The family business. - Dean Winchester',
  'Getting my ass kicked by those Juggalos was therapeutic. - Sam Winchester',
  'You mind doing a little bit of thinking with your upstairs brain, Dean?. - Sam Winchester',
  'No drinking, no gambling, no premarital sex. Dean, they basically just outlawed 90% of your personality. - Sam Winchester',
  'Rebel a little bit… in a healthy, non-satanic way. - Sam Winchester',
  'Are we going to fight or make out, cause I’m getting some real mixed signals here. - Dean Winchester',
  'Details are everything! You don’t want to go fighting ghosts without any health insurance. - Dean Winchester',
];

// function that generates a random quote from the above array
let generateQuote = () => {
  // Chooses random index from quotes array
  const randomIndex = Math.floor(Math.random() * quotes.length);
  // Gets the quote from that particular index
  const randomQuote = quotes[randomIndex];
  // Finds the HTML element with the ID quoteDisplay and sets its text to the random quote
  document.getElementById('quoteDisplay').textContent = randomQuote;
};

// function call
//generateQuote();
