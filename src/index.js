import './style.css';

const scoreList = [
  {
    id: '1',
    name: 'Name',
    score: '100',
  },
  {
    id: '2',
    name: 'Name',
    score: '20',
  },
  {
    id: '3',
    name: 'Name',
    score: '50',
  },
  {
    id: '4',
    name: 'Name',
    score: '78',
  },
  {
    id: '5',
    name: 'Name',
    score: '125',
  },
];

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