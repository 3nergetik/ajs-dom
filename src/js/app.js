/* eslint-disable no-plusplus */
import GameState from './GameState';

function runGoblin() {
  let nextPosition = -1;
  while (nextPosition === GameState.currentPosition || nextPosition === -1) {
    nextPosition = Math.round(Math.random() * 15);
  }
  const gamePad = document.getElementById('gamePad');
  const goblin = document.getElementById('goblin');
  const newPlace = gamePad.childNodes[nextPosition];
  newPlace.appendChild(goblin);
  goblin.classList.remove('invisible');
  GameState.currentPosition = nextPosition;
}

document.addEventListener('DOMContentLoaded', () => {
  const AutoAddChild = (node, typ) => {
    const newElement = document.createElement(typ);
    node.appendChild(newElement);
    return newElement;
  };
  const goblin = AutoAddChild(document.getElementById('workdiv'), 'div');
  goblin.id = 'goblin';
  goblin.classList.add('goblin');
  goblin.classList.add('invisible');
  // const goblinPic = AutoAddChild(goblin, 'img');
  // goblinPic.src = './img/goblin.png';
  const gamePad = document.getElementById('gamePad');
  let htmlVar = '';
  for (let y = 0; y < 16; y++) {
    htmlVar += '<div class="myCell"></div>';
  }
  gamePad.innerHTML = htmlVar;
  GameState.currentPosition = -1;
  setInterval(() => { runGoblin(); }, 1000);
  // eslint-disable-next-line no-console
  console.log('it works!');
});