import { getFormatDate } from "./helpers/index.js";

class FootballStandings {
  createTable(teams, isExtended = false) {
    const table = document.createElement("table");
    let rows = "";

    teams.forEach((team, index) => {
      rows += this.createTableRow(team, index + 1, isExtended);
    });

    table.innerHTML = this.createTableHeader(isExtended) + rows;

    return table;
  }

  createTableRow(params, number, isExtended) {
    const {
      teamName,
      games,
      score,
      difference,
      winnings,
      loses,
      draws,
      goals,
      misses,
    } = params;
    const addition = `
      <td>${winnings}</td>
      <td>${draws}</td>
      <td>${loses}</td>
      <td>${goals}</td>
      <td>${misses}</td>
      <td>${difference}</td>`;

    return `
        <tr>
            <td>${number}</td>
            <td>${teamName}</td>
            <td>${games}</td>
            ${isExtended ? addition : ''}
            <td>${score}</td>
        </tr>`;
  }

  createTableHeader(isExtended) {
    const addition = `
      <th>в</th>
      <th>н</th>
      <th>п</th>
      <th>заб</th>
      <th>про</th>
      <th>різ</th>
    `;

    return `
        <tr>
            <th>№</th>
            <th>${getFormatDate()}</th>
            <th>і</th>
            ${isExtended ? addition : ''}
            <th>о</th>
        </tr>`;
  }
}

export default FootballStandings;
