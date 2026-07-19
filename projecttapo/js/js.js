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
        "oleksandr usyk": "profiles.html?id=oleksandr-usyk",
        "tyson fury": "profiles.html?id=tyson-fury",
        "nishant dev": "profiles.html?id=nishant-dev",
        "canelo alvarez": "profiles.html?id=canelo-alvarez",
        "canelo": "profiles.html?id=canelo-alvarez",
        "terence crawford": "profiles.html?id=terence-crawford",
        "naoya inoue": "profiles.html?id=naoya-inoue",
        "gervonta davis": "profiles.html?id=gervonta-davis",
        "anthony joshua": "profiles.html?id=anthony-joshua",
        "ankalaev": "profiles.html?id=magomed-ankalaev",
        "kamaru usman": "profiles.html?id=kamaru-usman",
        "ddp": "profiles.html?id=dricus-du-plessis",
        "islam": "profiles.html?id=islam-makhachev",
        "ian garry": "profiles.html?id=ian-machado-garry",
        "guskov": "profiles.html?id=bogdan-guskov",
        // EVENTS
        "fight night usman": "eventpage.html?id=duplessis-usman",
        "fight night": "eventpage.html?id=duplessis-usman",
        "duplessis vs usman": "eventpage.html?id=duplessis-usman",
        "yo" : "eventpage.html?id=yo",
        "fight night ankalaev": "eventpage.html?id=ankalaev-guskov",
        "ankalaev vs guskov": "eventpage.html?id=ankalaev-guskov",
        
        "fight night medic": "eventpage.html?id=medic-rodriguez",
        "medic vs rodriguez": "eventpage.html?id=medic-rodriguez",
        
        "fight night gamrot": "eventpage.html?id=gamrot-salkilld",
        "gamrot vs salkilld": "eventpage.html?id=gamrot-salkilld",
        
        "ufc 330": "eventpage.html?id=ufc-330-makhachev-garry",
        "makhachev vs garry": "eventpage.html?id=ufc-330-makhachev-garry",
        
        "fight night hernandez": "eventpage.html?id=hernandez-rodrigues",
        "hernandez vs rodrigues": "eventpage.html?id=hernandez-rodrigues",

        "joshua vs prenga": "eventpage.html?id=joshua-prenga",
        "joshua event": "eventpage.html?id=joshua-prenga",
        "anthony joshua card": "eventpage.html?id=joshua-prenga",
        
        "spence vs tszyu": "eventpage.html?id=spence-tszyu",
        "spence card": "eventpage.html?id=spence-tszyu",
        "errol spence event": "eventpage.html?id=spence-tszyu",
        
        "canelo vs mbilli": "eventpage.html?id=mbilli-alvarez",
        "canelo card": "eventpage.html?id=mbilli-alvarez",
        "alvarez vs mbilli": "eventpage.html?id=mbilli-alvarez",
        "canelo event": "eventpage.html?id=mbilli-alvarez",

        "roach vs zepeda": "eventpage.html?id=roach-zepeda",
        "zepeda event": "eventpage.html?id=roach-zepeda",
        
        "mckenna vs oliha": "eventpage.html?id=mckenna-oliha",
        "mckenna event": "eventpage.html?id=mckenna-oliha",
        
        "shields vs scott": "eventpage.html?id=shields-scott",
        "shields card": "eventpage.html?id=shields-scott",
        
        "serrano vs manzur": "eventpage.html?id=serrano-manzur",
        "serrano card": "eventpage.html?id=serrano-manzur",
        
        "romero vs lopez": "eventpage.html?id=romero-lopez",
        "teofimo lopez card": "eventpage.html?id=romero-lopez",
        
        "cameron vs mayer": "eventpage.html?id=cameron-mayer",
        "mayer card": "eventpage.html?id=cameron-mayer",
        
        "taylor vs pili": "eventpage.html?id=taylor-pili",
        "katie taylor card": "eventpage.html?id=taylor-pili"
    };

    if (searchItems[search]) {
        window.location.href = searchItems[search];
    } else {
        
        alert("No boxer or event found. Hint: Try searching for 'Canelo'!");
    }
}