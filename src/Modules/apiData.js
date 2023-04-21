class scoreBoard {
  constructor(nam, score) {
    this.nam = nam;
    this.score = score;
  }

  //  stores data in array
  scores = [];

  apiLink = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/2mThWAsbxwLTvxawmcEU/scores';

  scorList = () => {
    const list = document.getElementById('List');
    list.innerHTML = this.scores.map((item) => `
    <li>${item.nam} : ${item.score}</li>`).join('');
  };

  // fetching data from API
  fScor = async () => {
    try {
      const sData = await fetch(this.apiLink);
      const response = await sData.json();
      this.scores = [];
      response.result.map((item) => this.scores.push(item));
      return this.scorList();
    } catch (error) { return error; }
  };

  // Add a new Score
  newScor = async ({ nam, score }) => {
    try {
      const config = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nam, score }),
      };

      const sData = await fetch(this.apiLink, config);
      const respons = await sData.json();
      this.scores.push(respons);
      return this.fScor();
    } catch (error) { return error; }
  };

}
export default scoreBoard