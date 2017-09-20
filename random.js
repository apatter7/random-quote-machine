$(document).ready(function(){
  var randomQuote, randomNum, author;
  getQuote();
  function getQuote(){
   var newQuotes=["\"Maybe ever’body in the whole damn world is scared of each other.\"","\"The house smelled musty and damp, and a little sweet, as if it were haunted by the ghosts of long-dead cookies.\"", "\"It was a bright cold day in April, and the clocks were striking thirteen.\"", "\"We were the people who were not in the papers. We lived in the blank white spaces at the edges of print. It gave us more freedom. We lived in the gaps between the stories.\"", "\"It sounds plausible enough tonight, but wait until tomorrow. Wait for the common sense of the morning.\"", "\"Finally, from so little sleeping and so much reading, his brain dried up and he went completely out of his mind.\"","\"It is sometimes an appropriate response to reality to go insane.\"","\"Anyone who ever gave you confidence, you owe them a lot.\"","\"Clocks slay time... time is dead as long as it is being clicked off by little wheels; only when the clock stops does time come to life.\"","\"I believe that life is a game, that life is a cruel joke, and that life is what happens when you're alive and that you might as well lie back and enjoy it.\""];
    
   var bookTitle=["-Of Mice and Men","-American Gods", "-1984","-Handmaiden's Tale", "-The Time Machine", "-Don Quixote", "-Valis","-Breakfast at Tiffany's","-The Sound and the Fury","-American Gods"];
   
    
    randomNum= Math.floor(Math.random() * newQuotes.length);
    randomQuote=newQuotes[randomNum];
    author= bookTitle[randomNum];
   
   $('#quote-text').text(randomQuote);
   $('#author').text(author); 
  }
  
  $('#new-quote').on("click", function(){
    getQuote();
  });
  
  $('#tweet').on("click", function(){
    window.open('https://twitter.com/intent/tweet?text='+ randomQuote + " " + author);
  })
  
});