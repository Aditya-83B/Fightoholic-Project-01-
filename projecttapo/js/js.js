function searchBoxer() {

    let search = document
        .getElementById("searchBox")
        .value
        .toLowerCase()
        .trim();

    if (search === "boxer" || search === "boxers" || search === "boxing") {
        alert("Try searching for a specific boxer like 'Canelo' or 'Tyson Fury'!");
        return; 
    }

    const searchItems = {
        // BOXERS
        "oleksandr usyk": "/html/profiles.html?id=oleksandr-usyk",
        "tyson fury": "/html/profiles.html?id=tyson-fury",
        "nishant dev": "/html/profiles.html?id=nishant-dev",
        "canelo alvarez": "/html/profiles.html?id=canelo-alvarez",
        "canelo": "/html/profiles.html?id=canelo-alvarez",
        "terence crawford": "/html/profiles.html?id=terence-crawford",
        "naoya inoue": "/html/profiles.html?id=naoya-inoue",
        "gervonta davis": "/html/profiles.html?id=gervonta-davis",
        "anthony joshua": "/html/profiles.html?id=anthony-joshua",
        "ankalaev": "/html/profiles.html?id=magomed-ankalaev",
        "kamaru usman": "/html/profiles.html?id=kamaru-usman",
        "ddp": "/html/profiles.html?id=dricus-du-plessis",
        "islam": "/html/profiles.html?id=islam-makhachev",
        "ian garry": "/html/profiles.html?id=ian-machado-garry",
        "guskov": "/html/profiles.html?id=bogdan-guskov",
        // EVENTS
        "fight night usman": "/html/eventpage.html?id=duplessis-usman",
        "fight night": "/html/eventpage.html?id=duplessis-usman",
        "duplessis vs usman": "/html/eventpage.html?id=duplessis-usman",
        "yo" : "/html/eventpage.html?id=yo",
        "fight night ankalaev": "/html/eventpage.html?id=ankalaev-guskov",
        "ankalaev vs guskov": "/html/eventpage.html?id=ankalaev-guskov",
        
        "fight night medic": "/html/eventpage.html?id=medic-rodriguez",
        "medic vs rodriguez": "/html/eventpage.html?id=medic-rodriguez",
        
        "fight night gamrot": "/html/eventpage.html?id=gamrot-salkilld",
        "gamrot vs salkilld": "eventpage.html?id=gamrot-salkilld",
        
        "ufc 330": "/html/eventpage.html?id=ufc-330-makhachev-garry",
        "makhachev vs garry": "/html/eventpage.html?id=ufc-330-makhachev-garry",
        
        "fight night hernandez": "/html/eventpage.html?id=hernandez-rodrigues",
        "hernandez vs rodrigues": "/html/eventpage.html?id=hernandez-rodrigues",

        "joshua vs prenga": "/html/eventpage.html?id=joshua-prenga",
        "joshua event": "/html/eventpage.html?id=joshua-prenga",
        "anthony joshua card": "/html/eventpage.html?id=joshua-prenga",
        
        "spence vs tszyu": "/html/eventpage.html?id=spence-tszyu",
        "spence card": "/html/eventpage.html?id=spence-tszyu",
        "errol spence event": "/html/eventpage.html?id=spence-tszyu",
        
        "canelo vs mbilli": "/html/eventpage.html?id=mbilli-alvarez",
        "canelo card": "/html/eventpage.html?id=mbilli-alvarez",
        "alvarez vs mbilli": "/html/eventpage.html?id=mbilli-alvarez",
        "canelo event": "/html/eventpage.html?id=mbilli-alvarez",

        "roach vs zepeda": "/html/eventpage.html?id=roach-zepeda",
        "zepeda event": "/html/eventpage.html?id=roach-zepeda",
        
        "mckenna vs oliha": "/html/eventpage.html?id=mckenna-oliha",
        "mckenna event": "/html/eventpage.html?id=mckenna-oliha",
        
        "shields vs scott": "/html/eventpage.html?id=shields-scott",
        "shields card": "/html/eventpage.html?id=shields-scott",
        
        "serrano vs manzur": "/html/eventpage.html?id=serrano-manzur",
        "serrano card": "/html/eventpage.html?id=serrano-manzur",
        
        "romero vs lopez": "/html/eventpage.html?id=romero-lopez",
        "teofimo lopez card": "/html/eventpage.html?id=romero-lopez",
        
        "cameron vs mayer": "/html/eventpage.html?id=cameron-mayer",
        "mayer card": "/html/eventpage.html?id=cameron-mayer",
        
        "taylor vs pili": "/html/eventpage.html?id=taylor-pili",
        "katie taylor card": "/html/eventpage.html?id=taylor-pili"
    };

    if (searchItems[search]) {
        window.location.href = searchItems[search];
    } else {
        
        alert("No boxer or event found. Hint: Try searching for 'Canelo'!");
    }
}
