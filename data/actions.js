// Making separate actions so they are easy to be called when clicked by the user

let quarryingAction = {};
let woodcuttingAction = {};
let miningAction = {};
let combatAction = {};

quarryingAction.run = () => {
    increaseStone(5);
    increaseExperience(3);
};

woodcuttingAction.run = () => {
    increaseWood(5);
    increaseExperience(3);
};

miningAction.run = () => {
    increaseOre(5);
    increaseExperience(3);
};

combatAction.run = () => {
    increaseGold(5);
    increaseExperience(3);
};