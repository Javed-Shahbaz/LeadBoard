import './style.css';
import scoreBoard from './Modules/apiData.js';

const scor = new scoreBoard();
const adScore = document.querySelector('.addForm');

adScore.addEventListener('submit', (e) => {
  e.preventDefault();
  const player = adScore.name.value;
  const score = adScore.score.value;
  currentScore.newScore({ player, score });
  adScore.reset();
});

const refBtn = document.getElementById('refresh');
refBtn.addEventListener('click', currentScore.fetchScores);
document.addEventListener('DOMContentLoaded', currentScore.showScores);