import FootballStandings from "./footballStandings.js";
const table = document.querySelector('.table');

const teams = [
    {
      id: Date.now(),
      teamName: "Ukraininan",
      games: 0,
      score: 0,
      difference: 0,
      winnings: 0,
      loses: 0,
      draws: 0,
      goals: 0,
      misses: 0,
    },
  ];

const extandeFootballTable = new FootballStandings().createTable(teams, true);
table.appendChild(extandeFootballTable);

