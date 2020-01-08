// Skills that increase the characters stats by a certain percentage. 1 skill point = 10%, 4 skill points = 40%, etc..

// SKILL OBJECTS
let health = {
    amount: 0,
    amountElement: null
};

let strength = {
    amount: 0,
    amountElement: null
};

let stamina = {
    amount: 0,
    amountElement: null
};

let defense = {
    amount: 0,
    amountElement: null
};

// Initializaton
function initializationSkills() {
    // HEALTH SKILL  
    health.amountElement = document.getElementById('health');
    health.amountElement.innerHTML = health.amount;
    
    // STRENGTH SKILL  
    strength.amountElement = document.getElementById('strength');
    strength.amountElement.innerHTML = strength.amount;

    // STAMINA SKILL  
    stamina.amountElement = document.getElementById('stamina');
    stamina.amountElement.innerHTML = stamina.amount;
    
    // DEFENSE SKILL  
    defense.amountElement = document.getElementById('defense');
    defense.amountElement.innerHTML = defense.amount;

    console.log("initialized skills");
}

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