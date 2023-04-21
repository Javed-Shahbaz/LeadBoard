import './style.css';
import scoreBoard from './Modules/apiData.js';

const scor = new scoreBoard();
const adScore = document.querySelector('.addForm');

adScore.addEventListener('submit', (e) => {
  e.preventDefault();
  const player = adScore.name.value;
  const score = adScore.score.value;
  scor.newScor({ player, score });
  adScore.reset();
});

const refBtn = document.getElementById('refresh');
refBtn.addEventListener('click', scor.fScor);
document.addEventListener('DOMContentLoaded', scor.scorList);