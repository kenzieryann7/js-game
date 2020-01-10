const capBase = 100;

function getCharacterLevel(amount) {
    console.log("Calling getCharacterLevel");

    let level = 1;
    let cap = capBase;

    while (amount >= cap) {
        level++;
        amount -= cap;
        cap = newCap(cap);
    }
    console.log("Level:", level);

    return level;
      
}

function getCap(amount) {
    console.log("Calling getCharacterLevel");
    let cap = capBase;

    while (amount >= cap) {
        amount -= cap;
        cap = newCap(cap);
    }

    return cap;
      
}

function getCapFloor(level) { //log
    console.log("Calling getCharacterLevel");
    let cap = capBase;

    if(level == 0 ) {
        cap = 0;
    }

    for(let i = 1; i < level; i += 1 ) {
        cap += newCap(cap);
    }
    
    return cap;
      
}

function newCap(cap) {
    cap = Math.pow(cap, 1.16);
    cap = Math.round(cap);
    return cap;
}

function increaseExperience(amount) {
    experience.amount += amount;

    renderExperience();
}

function renderExperience() {

    console.log("Called renderExperience");
    const level = getCharacterLevel(experience.amount);
    console.log("XP:", experience.amount);
    console.log("XP cap:", experience.cap);

    
    let current = experience.amount - getCapFloor(level - 1);


    experience.characterLevelElement.innerHTML = level;
    experience.currentElement.innerHTML = current;
    experience.capElement.innerHTML = getCap(experience.amount);
    
}