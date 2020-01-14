// Resources can be used to upgrade armor and weapons, craft to make items, and upgrade your base

//INCREASE GOLD (Used to upgrade your character, building, and to buy items) 
function increaseGold(amount) {
    console.log("Calling increaseGold");
    let tempAmount = gold.amount + amount;

    if( tempAmount < gold.cap) {
        gold.amount = tempAmount;   
    } 

    if (tempAmount >= gold.cap) {
        gold.amount = gold.cap;
    }
    gold.amountElement.innerHTML = gold.amount;

    console.log("Increased gold by 5");
      
}

// DECREASE GOLD
function decreaseGold(amount) {
    
    console.log("Calling decreaseGold");
      
    let tempAmount = gold.amount - amount;

    if( tempAmount < gold.cap) {
        gold.amount = tempAmount;   
    } 

    if (tempAmount >= gold.cap) {
        gold.amount = gold.cap;
    }
    gold.amountElement.innerHTML = gold.amount;

    console.log("Decreased gold by 5");
      
}

// INCREASE STONE
function increaseStone(amount) {

    stone.amount = stone.amount + amount;

    stone.amountElement.innerHTML = stone.amount;
}

// INCREASE WOOD
function increaseWood(amount) {
    
    wood.amount = wood.amount + amount;

    wood.amountElement.innerHTML = wood.amount;
}

// INCREASE ORE
function increaseOre(amount) {
    
    ore.amount = ore.amount + amount;

    ore.amountElement.innerHTML = ore.amount;
}

// INCREASE SKILL POINTS (Skill points are earned by leveling up and are used to spend on the skill tree)
function increaseSkill(amount) {
    console.log("Calling increaseSkill");
    let tempAmount = skillPoint.amount + amount;

    if( tempAmount < skillPoint.cap) {
        skillPoint.amount = tempAmount;   
    } 

    if (tempAmount >= skillPoint.cap) {
        skillPoint.amount = skillPoint.cap;
    }
    skillPoint.amountElement.innerHTML = skillPoint.amount;
      
    console.log("Increased skill by 5");
      
}

// DECREASE SKILL POINTS
function decreaseSkill(amount) {
    
    console.log("Calling decreaseSkill");
      
    let tempAmount = skillPoint.amount - amount;

    if( tempAmount < 0) {
        skillPoint.amount = tempAmount;
        
        return false;   
    } 
    
    skillPoint.amountElement.innerHTML = skillPoint.amount;

    console.log("Decreased skill point by 1");
      
}

// COMBO BUTTON 
function combo(amount) {
  var i = document.getElementById('combo').innerHTML;
  console.log("Calling combo");
  i = parseInt(document.getElementById('combo').innerHTML);

  document.getElementById('combo').innerHTML = i+amount;
      
  console.log("Increased gold and elixir by 10");
      
}

// *** BUY/USE ***

// BUY ARMOR
function buyArmor(amount) {
    var i = document.getElementById('buy').innerHTML;
    console.log("Calling buy function");
      
    i = parseInt(document.getElementById('buy').innerHTML);

    if(i < 10) {
        document.getElementById('buy').innerHTML = i-amount;
    } 
    if (i >= 10) {
        document.getElementById('buy').disabled=true;
    }
      
    console.log("Bought armor for 5 gold");
    
}

// USE SKILL POINTS
function spendSkills(amount) {
    var i = document.getElementById('spendSkill').innerHTML;
    console.log("Calling spendSkill function");
      
    i = parseInt(document.getElementById('spendSkill').innerHTML);

    if(i < 5) {
        document.getElementById('spendSkill').innerHTML = i-amount;
    } 
    if (i >= 5) {
        document.getElementById('spendSkill').disabled=true;
    }
      
    console.log("Spent one skill point");
    
}

// INCREASE GOLD CAPACITY
function increaseGoldCap(amount) {
    
    console.log("Calling goldCap function");
    
    var tempCap = 0;
    let tempAmount = gold.amount + amount;

    if (gold.cap = tempAmount) {

        tempAmount = gold.amount - amount;
        tempCap = gold.cap * gold.cap;
        
    }
    console.log(gold.cap);
    gold.amountElement.innerHTML = 0;
    gold.capElement.innerHTML = gold.cap;
      
    console.log("Increase gold capacity");
    
}

