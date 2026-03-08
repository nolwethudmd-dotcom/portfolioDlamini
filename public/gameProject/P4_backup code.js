
var mainScope = this; 

//container 
var character = new lib.Character(); 
var ground = new lib.Ground(); 
var obstacle = new lib.Obstacle(); 
var start = new lib.Start(); 
var scoreBar = new lib.ScoreBar(); 
var scoreTxt = new lib.Score(); 

var container = new createjs.Container(); 

stage.addChild(start); 
container.addChild(character); 
container.addChild(ground); 
//container.addChild(obstacle); 
container.addChild(scoreBar); 
container.addChild(score); 
stage.addChild(container); 
//start.visible = false;

//Positioning 
ground.y = 600; 
ground.x = 10; 
character.y = 470; 
character.x = 25; 
obstacle.y = 330; 
obstacle.x = 1000; 
scoreBar.x = 900; 
scoreBar.y = 50; 
scoreTxt.x = 970; 
scoreTxt.y = 70; 
start.x = 500; 
start.y = 200;

//start event listener 
var gameStarted = false; 
start.addEventListener("click", startGame); 

function startGame(){ 
    console.log("Game started"); 
    startBtn.visible = false; 
    gameStarted = true; 
	character.paly();
	createjs.Ticker.addEventListener("tick", moveObstacles);
    moveObstacles(); 
} 

function resetGame(){ 
    for (var i = obstacle.length - 1; i >= 0; i--){ 
        container.removeChild(obstacles[i]); 
    } 
    obstacles = []; 
    obstacleSpeed = 8; 
    score = 0; 
    scoreTxt.text = "0"; 
    character.y = groundLevel; 
    character.stop(); 
}

//CHARACTER JUMP

//Key Variables 
var jumping = false; 
var jumpSpeed = 0; 
var gravity = 2; 
var jumpAcc = -25 
var groundLevel = 470

window.addEventListener("keydown", function(e) { 
    console.log("Key: " + e.keyCode); 
    if(e.keyCode == 32 && !jumping && gameStarted) { 
        jumping = true; 
        jumpSpeed = jumpAcc; 
        character.gotoAndStop(0); 
    } 
}); 

function handleJump(){ 
    if(!jumping) return; 
    character.y += jumpSpeed; 
    jumpSpeed += gravity; 
    if (character.y >= groundLevel){ 
        character.y = groundLevel; 
        jumping = false; 
        character.play(); 
    } 
}

//Obstacles

//obastacles variables 
var obstacles = []; 
var obstacleSpeed = 8; 
var lastObstacleX = 1280; 
var minGap = 600; 
var maxGap = 900; 
var score = 0;

function createObstacle(){ 
    var newObstacle = new lib.Obstacle(); 
    newObstacle.y = 415; 
    newObstacle.x = 1280; 
    container.addChild(newObstacle); 
    obstacles.push(newObstacle); 
    console.log("Obstacle created. Total: " + obstacles.length); 
}

 

/*function gameLoop(){ 
    if(!gameStarted) return; 
    handleJump(); 
    if(obstacle.length === 0 || obstacles[obstacles.length - 1].x < 1280){ 
        createObstacle(); 
    } 
    for(var i = obstacles.length - 1; i >= 0; i--){ 
        var obs = obstacles[i]; 
        obs.x -= obstaclesSpeed; 
        if(checkCollision(obs)) { 
            console.log("Collision detected"); 
            setTimeout(gameOver, 500); 
            //gameOver(); 
            return; 
        } 
        if(obs.x + obs.nominalBounds.width < character.x && !obs.scored) { 
            obs.scored = true; 
            score += 10; 
            scoreTxt.text = score.toString(); 
            if(score % 100 === 0){ 
                obstacleSpeed += 1; 
            } 
        } 
        if(obs.x < -100){ 
            container.removeChild(obs); 
        } 
    } 
    stage.update(); 
}*/

function moveObstacles(){ 
    handleJump();
	
    if (obstacles.length === 0 || (lastObstacleX - obstacles[obstacles.length-1].x) > Math.random() * (maxGap - minGap) + minGap) { 
        createObstacle(); 
        lastObstacleX = obstacles[obstacles.length-1].x; 
    } 
    for(var i = obstacles.length - 1; i >= 0; i--){ 
        var currentObstacle = obstacles[i]; 
        currentObstacle.x -= obstacleSpeed; 
        checkCollision(currentObstacle); 
        if(currentObstacle.x < -currentObstacle.nominalBounds.width){ 
            container.removeChild(currentObstacle); 
        } 
    } 
} 



//COLLISION DETECTION

function checkCollision(obstacle){ 
    var charL = character.x; 
    var charR = character.x + character.nominalBounds.width; 
    var charT = character.y; 
    var charB =character.y + character.nominalBounds.height; 
    var blockL = obstacle.x; 
    var blockR = obstacle.x + obstacle.nominalBounds.width; 
    var blockT = obstacle.y; 
    var blockB = obstacle.y + obstacle.nominalBounds.height; 
    if(charR > blockL && charL < blockR && charB > blockT && charT < blockB){ 
        console.log("Collision happened"); 
        gameOver();
    } 
}

function gameOver(){ 
    console.log("Game Over"); 
    gameStarted = false; 
    start.visible = true; 
	resetGame();
    character.gotoAndStop(0); 
}