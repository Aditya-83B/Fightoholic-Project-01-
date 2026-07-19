const fighterId =
new URLSearchParams(window.location.search).get("id");
console.log("URL:", fighterId);
const fighter =
fighters.find(f => f.id === fighterId);
console.log(fighters);
console.log("fighterId =", fighterId);
console.log("found fighter =", fighter);
document.getElementById("name").textContent =
fighter.profile.name;

document.getElementById("image").src =
fighter.profile.image;

document.getElementById("subtitle").textContent =
`${fighter.profile.division} | ${fighter.profile.stance} | ${fighter.profile.country}`;

document.getElementById("wins").textContent =
fighter.record.wins;

document.getElementById("losses").textContent =
fighter.record.losses;

document.getElementById("kos").textContent =
fighter.record.knockouts;

document.getElementById("fighterid").textContent =
fighter.details.fighterId;

document.getElementById("age").textContent =
fighter.details.age;

document.getElementById("height").textContent =
fighter.details.height;

document.getElementById("reach").textContent =
fighter.details.reach;

document.getElementById("career").textContent =
fighter.details.career;

document.getElementById("ranking").textContent =
fighter.profile.ranking;

document.getElementById("bio").textContent =
fighter.profile.bio;

document.getElementById("badge").textContent =
fighter.profile.badge;

document.getElementById("bouts").textContent =
fighter.careerStats.bouts;

document.getElementById("rounds").textContent =
fighter.careerStats.rounds;

document.getElementById("koRate").textContent =
fighter.careerStats.koRate;

document.getElementById("followers").textContent =
fighter.careerStats.followers;


const table = document.getElementById("fightTable");
fighter.recentFights.forEach(fight => {
  table.innerHTML += `
    <tr>
      <td>${fight.date}</td>
      <td>${fight.opponent}</td>
      <td>${fight.opponentRecord}</td>
      <td>${fight.venue}</td>
      <td>${fight.result}</td>
      <td>${fight.note}</td>
    </tr>
  `;
});
