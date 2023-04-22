import './style.css';
import scoreBoard from './Modules/apiData.js';

const pScore = new scoreBoard();
const addScore = document.querySelector('.addForm');

addScore.addEventListener('submit', (e) => {
  e.preventDefault();
  const user = addScore.name.value;
  const score = addScore.score.value;
  pScore.newScore({ user, score });
  addScore.reset();
});

const refreshBtn = document.getElementById('refresh');
refreshBtn.addEventListener('click', pScore.fetchScores);
document.addEventListener('DOMContentLoaded', pScore.showScores);