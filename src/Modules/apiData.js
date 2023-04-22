class scoreBoard {
  constructor(user, score) {
    this.user = user;
    this.score = score;
  }
  scorArray = [];
  apiURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/2mThWAsbxwLTvxawmcEU/scores';
  scores = () => {
    const sList = document.getElementById('List');
    sList.innerHTML = this.scorArray.map((item) => `
    <li>${item.user} : ${item.score}</li>`).join('');
  };

  fScor = async () => {
    try {
      const data = await fetch(this.apiURL);
      const response = await data.json();
      this.scorArray = [];
      response.result.map((item) => this.scorArray.push(item));
      return this.scores();
    } catch (error) { return error; }
  };

  // Add a new Score
  newScore = async ({ user, score }) => {
    try {
      const config = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user, score }),
      };

      const data = await fetch(this.apiURL, config);
      const response = await data.json();
      this.scorArray.push(response);
      return this.fScor();
    } catch (error) { return error; }
  };
}

export default scoreBoard
