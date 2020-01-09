// Initializaton
function initialization() {
    // GOLD 
    gold.amountElement = document.getElementById('gold');
    gold.capElement = document.getElementById('goldCap');
    gold.amountElement.innerHTML = gold.amount;
    gold.capElement.innerHTML = gold.cap;

    // SKILL POINTS
    skillPoint.amountElement = document.getElementById('skillPoint');
    skillPoint.capElement = document.getElementById('skillCap');
    skillPoint.amountElement.innerHTML = skillPoint.amount;
    skillPoint.capElement.innerHTML = skillPoint.cap;

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

    // STONE  
    health.amountElement = document.getElementById('health');
    health.amountElement.innerHTML = health.amount;
    
    // WOOD  
    strength.amountElement = document.getElementById('strength');
    strength.amountElement.innerHTML = strength.amount;

    // METAL 
    stamina.amountElement = document.getElementById('stamina');
    stamina.amountElement.innerHTML = stamina.amount;

    console.log("initialized");
}