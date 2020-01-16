let activeMob = goblin;

function setMob(type) {

    activeMob = type;
    console.log("You are fighting:", activeMob);

}

// INCREASE STONE
function increaseTotalMobsKilled(amount) {

    mobsKilled.amount = mobsKilled.amount + amount;

    document.getElementById("mobsKilled").innerHTML = mobsKilled.amount;
}