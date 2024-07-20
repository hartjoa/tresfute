const diceContainer = document.getElementById('dice-container');
const rollButton = document.getElementById('roll-button');

const diceSides = [
  '1', // Remplacer par les noms des images dans votre sprite de dés
  '2',
  '3',
  '4',
  '5',
  '6'
];

rollButton.addEventListener('click', () => {
  diceContainer.innerHTML = ''; // Vider le conteneur des dés avant d'en ajouter de nouveaux

  for (let i = 0; i < 2; i++) { // Lancer deux dés
    const randomSide = diceSides[Math.floor(Math.random() * diceSides.length)];
    const newDice = document.createElement('div');
    newDice.classList.add('dice');
    newDice.style.backgroundPosition = `${randomSide} 0`; // Définir la position de la face du dé
    diceContainer.appendChild(newDice);
  }
});
