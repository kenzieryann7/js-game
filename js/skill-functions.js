// Skills that increase the characters stats by a certain percentage. 1 skill point = 10%, 4 skill points = 40%, etc..

// INCREASE HEALTH 
function increaseHealth() {
    console.log("Calling increaseHealth");

    health.amount++;

    health.amountElement.innerHTML = health.amount;

    console.log("Increased health by 1");
      
}

// INCREASE STRENGTH
function increaseStrength() {
    console.log("Calling increaseStrength");
    
    strength.amount++;

    strength.amountElement.innerHTML = strength.amount;

    console.log("Increased strength by 1");
      
}

// INCREASE STAMINA
function increaseStamina() {
    console.log("Calling increaseStamina");
    
    stamina.amount++;

    stamina.amountElement.innerHTML = stamina.amount;

    console.log("Increased stamina by 1");
      
}

// INCREASE DEFENSE
function increaseDefense() {
    console.log("Calling increaseDefense");
    
    defense.amount++;

    defense.amountElement.innerHTML = defense.amount;

    console.log("Increased defense by 1");
      
}

// USE SKILL POINTS
function buySkillPoint() {

    console.log("Calling buySkillPoint");

    const price = 1;

    if (skill.amount < price) {
        return false;
    }

    if (skill.amount >= 1){
        skill -= price;
        increaseHealth();
    }
    
    // Left off here. Having issues with skill registering as a DOM element and updating.
    document.getElementById('skill').innerHTML = skill.amount;
    health.amountElement.innerHTML = health.amount;

    

    console.log("Spent 1 skill point");
}