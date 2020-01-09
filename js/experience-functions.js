function getCharacterLevel(amount) {
    console.log("Calling getCharacterLevel");
    
    let level = (amount+1)/100;

    level = Math.ceil(level);
    
    console.log("Level:", level);

    return level;
      
}

function increaseExperience(amount) {
    experience.amount += amount;

    renderExperience();
}

function renderExperience() {

    console.log("Called renderExperience");
    const level = getCharacterLevel(experience.amount);




    experience.characterLevelElement.innerHTML = level;
}