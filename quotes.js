const potatoQuotes = [
  "🥔 You're a hot potato!",
  "🥔 Even mashed, you're amazing!",
  "🥔 Stay calm and potato on.",
  "🥔 You're baked to perfection!",
  "🥔 Hash-tag you're awesome!",
  "🥔 Don't be a couch potato... unless it's comfy.",
  "🥔 Sweet or not, you're still a potato legend!"
];

function motivateWithPotatoes() {
  setInterval(() => {
    const randomQuote = potatoQuotes[Math.floor(Math.random() * potatoQuotes.length)];
    console.log(randomQuote);
  }, 2000);
} 

motivateWithPotatoes();
