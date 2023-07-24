

var quote_area = document.getElementById('quote_area');

var myWords = [
  'first quote',
  'second quote',
  'third quote',
  'forth quote',
  'fivth quote',
];


function changeQuote() {
  var integerNum = Math.floor(Math.random() * myWords.length); // if *10 return 9
  quote_area.innerHTML = myWords[integerNum];
}

