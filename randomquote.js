let quotes = [
    "Success is not the key to happiness. Happiness is the key to success.",
    "Life is what happens when you're busy making other plans.",
    "Don't watch the clock; do what it does. Keep going. ",
    "The only way to do great work is to love what you do. ",
    "Success usually comes to those who are too busy to be looking for it. ",
    "Believe you can and you're halfway there.",
    "The future belongs to those who believe in the beauty of their dreams. ",
    "It does not matter how slowly you go as long as you do not stop. ",
    "You miss 100% of the shots you don't take. ",
    "The journey of a thousand miles begins with one step."
  ];
  let pick=document.querySelector("#quoto");
  function random(){
    let singlequote=Math.floor(Math.random()*quotes.length);
    pick.textContent=quotes[singlequote];
  }

