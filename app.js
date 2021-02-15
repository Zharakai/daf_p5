// Subjects, verbs, complements
let generator = [
    {
      type: "Reflet d'Acide",
      subjects: ['Wrandrall', 'Zehirmahnn ', 'Zarakaï', 'Enoriel', 'Trichelieu', 'Guertrude'],
      verbs: ['se bat avec une épée rouillée', 'chante Pom... Pom pom', 'se bat avec une énorme hache', 'boit une pinte de bière bien fraîche'],
      complements: ['au bar.', 'avec sa fiancée.', 'avec ses compagnons.'],
    },
    {
      type: 'Le petit chaperon rouge',
      subjects: ['Le petit chaperon rouge', 'Le chasseur', 'Le loup'],
      verbs: ['part visiter sa Grand mère', 'doit traverser le village en passant par la forêt', 'a déjà dévoré la grand-mère et a pris sa place dans son lit', 'tire la chevillette'],
      complements: ['avec une galette et un petit pot de beurre.', 'et se fait dévorer.', 'et la bobinette cherra.'],
    }
];

// Get a random number between 0 and max
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

let divForQuotes = document.getElementsByClassName('displayQuotes');
let quotesList = document.getElementById('quotesList');
let blockquote = [];
let chosenValue;

function createBlockQuote(text) {
    let blockQuote = document.createElement('blockquote');
    blockQuote.textContent = text;
    return blockQuote;
}

function appendChildren(parent, children) {
    children.forEach(function(child) {
        parent.appendChild(child);
    });
}

document.getElementById('button_1').addEventListener('click', function() {
    blockquote = [];
    console.log(blockquote);
    quotesList.innerHTML = '';
    chosenValue = document.getElementById('numberChoice').value;

    for (let i = 0; i < chosenValue; i++) {
        blockquote.push(createBlockQuote(`
        ${generator[0].subjects[getRandomInt(generator[0].subjects.length)]} 
        ${generator[0].verbs[getRandomInt(generator[0].verbs.length)]} 
        ${generator[0].complements[getRandomInt(generator[0].complements.length)]}
        `));
    }
    appendChildren(quotesList, blockquote);
});

document.getElementById('button_2').addEventListener('click', function() {
    blockquote = [];
    quotesList.innerHTML = '';
    chosenValue = document.getElementById('numberChoice').value;

    for (let i = 0; i < chosenValue; i++) {
        blockquote.push(createBlockQuote(`
        ${generator[1].subjects[getRandomInt(generator[1].subjects.length)]} 
        ${generator[1].verbs[getRandomInt(generator[1].verbs.length)]} 
        ${generator[1].complements[getRandomInt(generator[1].complements.length)]}
        `));
    }
    appendChildren(quotesList, blockquote);
});
