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

function getCap(amount) { //byXP
    console.log("Calling getCap");
    let cap = capBase;

    while (amount >= cap) {
        amount -= cap;
        cap = newCap(cap);
    }
    console.log("XP Cap:", cap);
    return cap;
      
}

function getCapByLevel(level) { //log
    console.log("Calling getCapByLevel");

    let runningCapTotal = 0;

    let cap = capBase;

    if(level == 0 ) {
       return 0;
    }

    runningCapTotal = cap;

    for(let i = 1; i < level; i += 1 ) {
        cap = newCap(cap);
        runningCapTotal += cap;
    }
    
    return runningCapTotal;
      
}

function newCap(_cap) {

    let cap = Math.pow(_cap, 1.16); 
    cap = Math.round(cap);
    console.log("Cap: " + _cap + " > " + cap);
    return cap;
}

function increaseExperience(amount) {
    experience.amount += amount;

    renderExperience();
}

function renderExperience() {

    //console.log("Called renderExperience");
    const level = getCharacterLevel(experience.amount);
    //console.log("XP:", experience.amount);
   // console.log("XP cap:", experience.cap);

    const cap = getCap(experience.amount);

    let current = experience.amount - getCapByLevel(level - 1);
    progressXPBar(current/cap*100);

    experience.characterLevelElement.innerHTML = level;
    experience.currentElement.innerHTML = current;
    experience.capElement.innerHTML = cap;
    
}

function progressXPBar(newPercent) {
    console.log("XP Percent:", newPercent+'%');

    currentPercentage = document.getElementById("XPBar").style.width;
    //console.log(currentPercentage);
    currentPercentage = parseInt(currentPercentage);
    if (currentPercentage == 100 || newPercent > currentPercentage) {
        document.getElementById("XPBar").style.width = newPercent+'%';

    } else {
        document.getElementById("XPBar").style.width = 100+'%';
        setTimeout(function (){
            progressXPBar(newPercent);
            levelUp();
        }, 1000)
    }

    //console.log( document.getElementById("XPBar").style.width );
    document.getElementById("percentage").innerHTML = Math.round(newPercent)+'%';
    
}

function levelUp() {
    giveSkillPoints();
}

function giveSkillPoints() {

    skillPoint.amount = skillPoint.amount + 5;

    skillPoint.amountElement.innerHTML = skillPoint.amount;
}