// Initializaton
function initialization() {
    // GOLD 
    gold.amountElement = document.getElementById('gold');
    gold.capElement = document.getElementById('goldCap');
    gold.amountElement.innerHTML = gold.amount;
    gold.capElement.innerHTML = gold.cap;

    // STONE
    stone.amountElement = document.getElementById('stone');
    stone.amountElement.innerHTML = stone.amount;

    // WOOD
    wood.amountElement = document.getElementById('wood');
    wood.amountElement.innerHTML = wood.amount;

    // ORE
    ore.amountElement = document.getElementById('ore');
    ore.amountElement.innerHTML = ore.amount;

    // SKILL POINTS
    skillPoint.amountElement = document.getElementById('stone');
    skillPoint.amountElement.innerHTML = stone.amount;

    // HEALTH SKILL  
    health.amountElement = document.getElementById('health');
    health.amountElement.value = health.amount;

    // STRENGTH SKILL  
    strength.amountElement = document.getElementById('strength');
    strength.amountElement.value = strength.amount;

    // STAMINA SKILL  
    stamina.amountElement = document.getElementById('stamina');
    stamina.amountElement.value = stamina.amount;
    
    // DEFENSE SKILL  
    defense.amountElement = document.getElementById('defense');
    defense.amountElement.value = defense.amount;

    // EXPERIENCE
    experience.currentElement = document.getElementById('currentXP');
    experience.capElement = document.getElementById('capXP');
    experience.characterLevelElement = document.getElementById('characterLevel');
    //experience.amountElement.innerHTML = experience.amount;
    renderExperience();
    gameLoop();
    
    console.log("initialized");
}