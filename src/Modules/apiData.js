class scoreBoard {
  constructor(nam, scor) {
    this.nam = nam;
    this.scor = scor;
  }

  //  stores data in array
  scores = [];

  Api = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/yMzG8blKxFRkRArKy24E/scores/';

  scorList = () => {
    const list = document.getElementById('List');
    list.innerHTML = this.scoresData.map((item) => `
    <li>${item.nam} : ${item.score}</li>`).join('');
  };

  // fetching data from API
  fScor = async () => {
    try {
      const sData = await fetch(this.Api);
      const response = await sData.json();
      this.scoresData = [];
      response.result.map((item) => this.scoresData.push(item));
      return this.scorList();
    } catch (error) { return error; }
  };

  // Add a new Score
  newScor = async ({ nam, score }) => {
    try {
      const confg = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nam, score }),
      };

      const sData = await fetch(this.Api, confg);
      const respons = await sData.json();
      this.scoresData.push(respons);
      return this.fScor();
    } catch (error) { return error; }
  };

}
export default scoreBoard