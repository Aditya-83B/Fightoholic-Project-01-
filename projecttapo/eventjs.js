const eventList = document.getElementById("eventList");

const params = new URLSearchParams(window.location.search);
const eventId = params.get("id");

const currentEvent = data.event.find(
    e => e.id === eventId
);

if (!currentEvent) {
    eventList.innerHTML = "<h2>Event not found</h2>";
} else {
    // 1. UPDATE HERO HEADER & METADATA AREA
    document.querySelector(".event-main h1").textContent = currentEvent.event.name;
    document.querySelector(".event-main p").textContent = `${currentEvent.event.name}: ${currentEvent.event.subtitle} takes place at the ${currentEvent.event.venue} in ${currentEvent.event.location}.`;
    
    // Update the Stats Grid metrics
    const statsDivs = document.querySelectorAll(".stat strong");
    if (statsDivs.length >= 4) {
        statsDivs[0].textContent = currentEvent.event.date;
        statsDivs[3].textContent = `${currentEvent.event.totalFights} Bouts`;
    }

    // Update the Header tab subtitle element
    document.querySelector(".table-header span").textContent = `${currentEvent.event.totalFights} Bouts`;

    // 2. UPDATE EVENT PRODUCTION CARD (Bottom Right Section)
    const productionRows = document.querySelectorAll(".production li strong");
    if (productionRows.length >= 4) {
        productionRows[0].textContent = currentEvent.event.date;
        productionRows[2].textContent = currentEvent.event.venue;
        productionRows[3].textContent = currentEvent.event.location;
    }

    // 3. UPDATE THE PREDICTIONS CHART DYNAMICALLY
    const predictionContainer = document.querySelector(".prediction");
    if (predictionContainer && currentEvent.predictions) {
        predictionContainer.innerHTML = ""; // Clear out old static HTML contents
        currentEvent.predictions.forEach(pred => {
            const shortName = pred.fighter.split(' ').pop(); // Extracts last name for neat UI layout
            predictionContainer.innerHTML += `
                <div class="prediction-row">
                    <div class="prediction-name">${shortName}</div>
                    <div class="prediction-bar">
                        <div class="prediction-fill" style="width:${pred.percentage}%;"></div>
                    </div>
                    <div class="prediction-percent">${pred.percentage}%</div>
                </div>
            `;
        });
    }

    // 4. UPDATE QUICK CARD SIDEBAR
    const quickCardContainer = document.querySelector(".quick-card");
    if (quickCardContainer) {
        quickCardContainer.innerHTML = "";
        currentEvent.fights.forEach(fight => {
            quickCardContainer.innerHTML += `
                <li><strong>${fight.fighter1.name} vs. ${fight.fighter2.name}</strong>${fight.weightClass}</li>
            `;
        });
    }

    // 5. RENDER THE MAIN FIGHT CARD (Your Existing Logic)
    currentEvent.fights.forEach(fight => {
        const card = document.createElement("article");
        card.className = "fight";

        if (fight.status === "cancelled") {
            card.classList.add("cancelled");
        }

        card.innerHTML = `
        <div class="fighter">
            <img src="${fight.fighter1.image}" alt="${fight.fighter1.name}" class="avatar">
            <div>
                <h3>${fight.fighter1.name}</h3>
                <div class="fighter-meta">${fight.fighter1.record}</div>
                <span class="rank">${fight.fighter1.rank || ""}</span>
                ${fight.status === "active" ? `<button class="pick-btn" data-fight="${fight.id}" data-fighter="${fight.fighter1.name}" onclick="pickFighter(this)">Pick</button>` : ""}
            </div>
        </div>

        <div class="bout-center">
            <strong>${fight.boutType}</strong>
            <div class="weight">${fight.weightClass}</div>
            <span>${fight.rounds}</span>
            ${fight.status === "active" ? `<div class="cancel-tag">ACTIVE</div>` : `<div class="cancel-tag" style="background:red;">CANCELLED: ${fight.cancelReason || 'Scratched'}</div>`}
        </div>

        <div class="fighter right">
            <div>
                <h3>${fight.fighter2.name}</h3>
                <div class="fighter-meta">${fight.fighter2.record}</div>
                <span class="rank">${fight.fighter2.rank || ""}</span>
                ${fight.status === "active" ? `<button class="pick-btn" data-fight="${fight.id}" data-fighter="${fight.fighter2.name}" onclick="pickFighter(this)">Pick</button>` : ""}
            </div>
            <img src="${fight.fighter2.image}" alt="${fight.fighter2.name}" class="avatar">
        </div>
        `;
        eventList.appendChild(card);
    });
}