import './style.css';
import Scoreboard from './Modules/apiGame.js';

const pScore = new Scoreboard();
const adScor = document.querySelector('.addForm');

adScor.addEventListener('submit', (e) => {
  e.preventDefault();
  const user = adScor.name.value;
  const score = adScor.score.value;
  pScore.newScore({ user, score });
  adScor.reset();
});

const refBtn = document.getElementById('refresh');
refBtn.addEventListener('click', pScore.fScor);
document.addEventListener('DOMContentLoaded', pScore.scores);