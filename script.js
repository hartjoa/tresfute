const diceContainer = document.getElementById('dice-container');
const rollButton = document.getElementById('roll-button');

const diceSides = [
  'dice-1-blue', 'dice-1-white', 'dice-1-red', 'dice-1-black', 'dice-1-green', 'dice-1-orange',
  'dice-2-blue', 'dice-2-white', 'dice-2-red', 'dice-2-black', 'dice-2-green', 'dice-2-orange',
  'dice-3-blue', 'dice-3-white', 'dice-3-red', 'dice-3-black', 'dice-3-green', 'dice-3-orange',
  'dice-4-blue', 'dice-4-white', 'dice-4-red', 'dice-4-black', 'dice-4-green', 'dice-4-orange',
  'dice-5-blue', 'dice-5-white', 'dice-5-red', 'dice-5-black', 'dice-5-green', 'dice-5-orange',
  'dice-6-blue', 'dice-6-white', 'dice-6-red', 'dice-6-black', 'dice-6-green', 'dice-6-orange'
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
