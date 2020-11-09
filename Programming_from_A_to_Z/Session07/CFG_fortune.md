# Context Free Fortune Teller

In [this week's class](https://github.com/shiffman/A2Z-F20/tree/main/07-cfg) with Dan, we learned about context free grammars.

After going through Dan's tutorials, I was thinking about how tarot card readings are like context free grammar stories. There are a limited number of variables, and they connect to tell a story. So I decided to pull from a Tarot card JSON (via Allison Parrish's contribution to corpora [here](https://github.com/dariusk/corpora/blob/master/data/divination/tarot_interpretations.json)). The sketch draws a card at random from the 78 possible Tarot cards, picking an interpretation of the card. Then, it uses [Tracery](https://github.com/galaxykate/tracery) to link the data together and tell you your fortune!

## Try out the interactive version [here](https://editor.p5js.org/lynneyun/present/ayqQdUOoy) on the p5.js web editor!

### Welcome to the magical ball...

![Intro Screen](img/cfg_1.png)

Upon connecting, you'll see a friendly magical oracle ball, waiting to tell you your fortune for the day.

## Get your fortune read!

![Intro Screen](img/cfg_2.png)

If you click on 'tell me my fortune', it will tell you your fortune!