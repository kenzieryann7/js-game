// Skills that increase the characters stats by a certain percentage. 1 skill point = 10%, 4 skill points = 40%, etc..

// USE SKILL POINTS
function buySkillPoint( skill ) {

    console.log("Calling buySkillPoint");

    const price = 1;

    if (skillPoint.amount < price) {
        console.log("Not enough skill points");
        return false;
    }

    // Equation to subtract 1 skill point
    skillPoint.amount = skillPoint.amount - price;
    console.log("Skill equation calculated:", skillPoint.amount);
    
    // DOM Element for skill points
    document.getElementById('skillPoint').innerHTML = skillPoint.amount;

    console.log("Spent 1 skill point");

    // Increasing skills
    skill.amount += 1;
    skill.amountElement.value = skill.amount;
}

