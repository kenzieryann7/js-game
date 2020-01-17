// Making separate actions so they are easy to be called when clicked by the user

let quarryingAction = {};
let woodcuttingAction = {};
let miningAction = {};
let combatAction = {};

// QUARRYING
quarryingAction.run = () => {
    increaseStone(5);
    increaseExperience(3);
    document.getElementById("actionType").innerHTML = quarryingAction.name;
};

quarryingAction.name = "Quarrying";

// WOODCUTTING
woodcuttingAction.run = () => {
    increaseWood(5);
    increaseExperience(3);
    document.getElementById("actionType").innerHTML = woodcuttingAction.name;
};

woodcuttingAction.name = "Woodcutting";

// MINING
miningAction.run = () => {
    increaseOre(5);
    increaseExperience(3);
    document.getElementById("actionType").innerHTML = miningAction.name;
};

miningAction.name = "Mining";

// COMBAT
combatAction.run = () => {
    increaseGold(5);
    increaseExperience(3);
    document.getElementById("actionType").innerHTML = combatAction.name;
    increaseTotalMobsKilled(1);
};

combatAction.name = "Combat";