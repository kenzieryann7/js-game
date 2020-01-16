let activeAction = miningAction;

function runAction() {
    
    activeAction.run();
    
}

function setAction(action) {
    activeAction = action;
}

// new bar for actions that has a span or id that fills the bar with a name of what action
function fillActionBar() {
    document.getElementById("actionBar").style.transitionDuration = "0s";
    document.getElementById("actionBar").style.width = 0+'%';
    
    setTimeout(function () {
        document.getElementById("actionBar").style.transitionDuration = "4s";
        document.getElementById("actionBar").style.width = 100+'%';
    }, 5)
    
}