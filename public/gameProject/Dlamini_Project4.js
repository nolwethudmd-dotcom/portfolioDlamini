(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Dlamini_Project4_atlas_1", frames: [[0,1282,154,239],[312,1282,154,228],[156,1282,154,239],[468,1282,154,228],[0,0,1920,1280]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_4 = function() {
	this.initialize(ss["Dlamini_Project4_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["Dlamini_Project4_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["Dlamini_Project4_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["Dlamini_Project4_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.landscape = function() {
	this.initialize(ss["Dlamini_Project4_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Start = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("START", "51px 'Franklin Gothic Heavy'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 60;
	this.text.lineWidth = 201;
	this.text.parent = this;
	this.text.setTransform(155.5,27.25);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("A4IolMAwRAAAIAARLMgwRAAAg");
	this.shape.setTransform(154.5,55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("A4IImIAAxLMAwRAAAIAARLg");
	this.shape_1.setTransform(154.5,55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Start, new cjs.Rectangle(-1,-1,311,112), null);


(lib.ScoreBar = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(14,2,2).p("A13olMArvAAAIAARLMgrvAAAg");
	this.shape.setTransform(140.025,55.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.004)").s().p("A13ImIAAxLMArvAAAIAARLg");
	this.shape_1.setTransform(140.025,55.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ScoreBar, new cjs.Rectangle(-7,-7,294.1,124.1), null);


(lib.Score = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.scoreTxt = new cjs.Text("score", "bold 60px 'Hegante Black'");
	this.scoreTxt.name = "scoreTxt";
	this.scoreTxt.lineHeight = 83;
	this.scoreTxt.lineWidth = 202;
	this.scoreTxt.parent = this;
	this.scoreTxt.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.scoreTxt).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Score, new cjs.Rectangle(0,0,206.1,75.4), null);


(lib.Obstacle = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AkvM/IAA59IJfAAIAAZ9g");
	this.shape.setTransform(30.4447,108.146,0.6048,0.9158);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Obstacle, new cjs.Rectangle(12.1,32.1,36.8,152.20000000000002), null);


(lib.Ground = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(9,1,1).p("EhhrAAAMDDXAAA");
	this.shape.setTransform(625.2,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Ground, new cjs.Rectangle(-4.5,-4.5,1259.4,9), null);


(lib.Character = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// character
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(0,0,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_2();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_3();
	this.instance_2.setTransform(0,0,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_4();
	this.instance_3.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,77,119.5);


(lib.bg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.landscape();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(0,0,1920,1280), null);


(lib.Background = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.bg();
	this.instance.setTransform(706.8,471.2,0.7363,0.7363,0,0,0,960,640);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Background, new cjs.Rectangle(0,0,1413.6,942.4), null);


// stage content:
(lib.Dlamini_Project4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		//STAGE SET 
		var character = new lib.Character(); 
		var ground = new lib.Ground(); 
		var obstacle = new lib.Obstacle(); 
		var start = new lib.Start(); 
		var scoreBar = new lib.ScoreBar();
		var background = new lib.Background();
		
		var scoreTxt = new createjs.Text("Score: 0", "40px Arial", "#000");
		var container = new createjs.Container(); 
		
		stage.addChild(background);
		stage.addChild(start);
		container.addChild(character); 
		container.addChild(ground);  
		container.addChild(scoreBar); 
		
		stage.addChild(scoreTxt);
		stage.addChild(container); 
		
		
		//SOUND
		var soundId = "jump";
		var soundId2 = "gameOver"
		createjs.Sound.registerSound("sound/jump.wav", soundId);
		createjs.Sound.registerSound("sound/gameOver.wav", soundId2);
		
		
		//Positioning 
		ground.y = 600; 
		ground.x = 10; 
		character.y = 470; 
		character.x = 100; 
		obstacle.y = 330; 
		obstacle.x = 1000; 
		scoreBar.x = 900; 
		scoreBar.y = 50;  
		start.x = 500; 
		start.y = 200;
		scoreTxt.x = 960;
		scoreTxt.y = 80;
		background.y = -100;
		
		//START GAME 
		var gameStarted = false; 
		var score = 0;
		start.addEventListener("click", startGame); 
		
		function startGame(){ 
		    console.log("Game started"); 
			//scoreTxt.text = " ";
		    start.visible = false; 
		    gameStarted = true; 
			character.play();
			createjs.Ticker.addEventListener("tick", moveObstacles);
		    moveObstacles();
		}
		
		
		//GAME RESET
		
		function resetGame(){ 
		    for (var i = obstacles.length - 1; i >= 0; i--){ 
		        container.removeChild(obstacles[i]); 
		    } 
		
		    obstacles = []; 
		    obstacleSpeed = 10; 
		    score = 0; 
		    scoreTxt.text = "Score: " + score;
		    character.y = groundLevel;  
		    character.play();
		}
		
		
		
		//CHARACTER JUMP
		
		//Key Variables 
		var jumping = false; 
		var jumpSpeed = 0; 
		var gravity = 2; 
		var jumpAcc = -32; 
		var groundLevel = 470;
		
		window.addEventListener("keydown", function(e) { 
		    console.log("Key: " + e.keyCode); 
		    if(e.keyCode == 32 && !jumping && gameStarted) { 
		        jumping = true; 
		        jumpSpeed = jumpAcc; 
		        character.gotoAndStop(0); 
				createjs.Sound.play(soundId);
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
				
				//score update
				score += 10;
				if (score % 100 == 0) {
					obstacleSpeed += 2;
				}
			}
		}
		
		
		
		
		//OBSTACLES
		
		//obastacles variables 
		var obstacles = []; 
		var obstacleSpeed = 10; 
		var lastObstacleX = 1280; 
		var minGap = 600; 
		var maxGap = 1200; 
		
		
		function createObstacle(){ 
		    var newObstacle = new lib.Obstacle(); 
		    newObstacle.y = 415; 
		    newObstacle.x = 1280; 
		    container.addChild(newObstacle); 
		    obstacles.push(newObstacle); 
			
		    console.log("Obstacle created. Total: " + obstacles.length); 
		}
		
		 
		//OBSTACLE MOVEMENT
		function moveObstacles(){ 
		    handleJump();
			
		    if (obstacles.length == 0 || (lastObstacleX - obstacles[obstacles.length-1].x) > Math.random() * (maxGap - minGap) + minGap) { 
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
		    scoreTxt.text = "Score: " + score;
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
		
		
		
		//GAMEOVER
		
		function gameOver(){ 
		    console.log("Game Over"); 
		    gameStarted = false; 
		    start.visible = true;
		    createjs.Sound.play(soundId2);	
			
			createjs.Ticker.removeEventListener("tick", moveObstacles);
			setTimeout(resetGame, 1500);
		    character.gotoAndStop(0); 
			character.y = groundLevel;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);
// library properties:
lib.properties = {
	id: '758F2166ADF64B4AAA05695800E89C7D',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Dlamini_Project4_atlas_1.png", id:"Dlamini_Project4_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['758F2166ADF64B4AAA05695800E89C7D'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;