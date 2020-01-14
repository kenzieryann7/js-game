const loopDelay = 4000;

function gameLoop() {
    runAction();
    fillActionBar();
    setTimeout(function (){
        gameLoop();
    }, loopDelay)
};