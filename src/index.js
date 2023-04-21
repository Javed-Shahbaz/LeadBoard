import './style.css';

const lisItem = document.getElementById('List');

scoreList.map((item) => {
  if (item.id % 2 === 0) {
    lisItem.innerHTML += `
    <li class= 'bakground'>${item.name}:     <span>${item.score}</span></li>`;
  } else {
    lisItem.innerHTML += `<li>${item.name}:     <span>${item.score}</span></li>`;
  }
  return ('');
});