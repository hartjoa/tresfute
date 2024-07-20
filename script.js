const diceContainer = document.getElementById('dice-container');
const rollButton = document.getElementById('roll-button');

const diceSides = [
  '1-blue.png', '1-white.png', '1-red.png', '1-black.png', '1-green.png', '1-orange.png',
  '2-blue.png', '2-white.png', '2-red.png', '2-black.png', '2-green.png', '2-orange.png',
  '3-blue.png', '3-white.png', '3-red.png', '3-black.png', '3-green.png', '3-orange.png',
  '4-blue.png', '4-white.png', '4-red.png', '4-black.png', '4-green.png', '4-orange.png',
  '5-blue.png', '5-white.png', '5-red.png', '5-black.png', '5-green.png', '5-orange.png',
  '6-blue.png', '6-white.png', '6-red.png', '6-black.png', '6-green.png', '6-orange.png'
];

rollButton.addEventListener('click', () => {
  diceContainer.innerHTML = ''; // Vider le conteneur des dés avant d'en ajouter de nouveaux
  console.log(diceContainer.innerHTML);

  for (let i = 0; i < 2; i++) { // Lancer deux dés
    const randomSide = diceSides[Math.floor(Math.random() * diceSides.length)];
    const newDice = document.createElement('div');
    newDice.classList.add('dice');
    newDice.style.backgroundPosition = `${randomSide} 0`; // Définir la position de la face du dé
    diceContainer.appendChild(newDice);
  }
});
