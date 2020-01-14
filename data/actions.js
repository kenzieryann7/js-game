// Making separate actions so they are easy to be called when clicked by the user

let quarryingAction = {};
let woodcuttingAction = {};
let miningAction = {};
let combatAction = {};

quarryingAction.run = () => {
    increaseStone(5);
    increaseExperience(3);
    document.getElementById("actionType").innerHTML = quarryingAction.name;
};

quarryingAction.name = "Quarrying";

woodcuttingAction.run = () => {
    increaseWood(5);
    increaseExperience(3);
    document.getElementById("actionType").innerHTML = woodcuttingAction.name;
};

woodcuttingAction.name = "Woodcutting";

miningAction.run = () => {
    increaseOre(5);
    increaseExperience(3);
    document.getElementById("actionType").innerHTML = miningAction.name;
};

miningAction.name = "Mining";

combatAction.run = () => {
    increaseGold(5);
    increaseExperience(3);
    document.getElementById("actionType").innerHTML = combatAction.name;
};

combatAction.name = "Combat";