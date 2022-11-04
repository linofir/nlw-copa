let delay = -0.4
function crateCard(xdata, xdia, xgames) {
  delay = delay + 0.4
  let date = xdata
  let day = xdia
  return `
  <div class="card" style="animation-delay: ${delay}s">
          <h2>${date} <span>${day}</span></h2>
          <ul>${xgames}</ul>
  </div>
  `
}

function createGame(xplayer1, xhour, xplayer2) {
  let hour = xhour
  let player1 = xplayer1
  let player2 = xplayer2
  return `
  <li>
    <img src="./assats/icon-${player1}.svg" alt="flag-1" />
    <strong>${hour}</strong>
    <img src="./assats/icon-${player2}.svg" alt="flag-2" />
  </li>
  `
}

document.querySelector("#cards").innerHTML =
  crateCard("24/11", "Quinta", createGame("brazil", "7:00", "serbia")) +
  crateCard(
    "28/11",
    "Segunda",
    createGame("brazil", "10:00", "serbia") +
      createGame("serbia", "20:00", "brazil")
  ) +
  crateCard("02/12", "Sexta", createGame("brazil", "11:00", "serbia"))
