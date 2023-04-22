class Scoreboard {
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
      const respons = await data.json();
      this.scorArray = [];
      respons.result.map((item) => this.scorArray.push(item));
      return this.scores();
    } catch (error) { return error; }
  };

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

      const sData = await fetch(this.apiURL, config);
      const respons = await sData.json();
      this.scorArray.push(respons);
      return this.fScor();
    } catch (error) { return error; }
  };
}
export default Scoreboard;