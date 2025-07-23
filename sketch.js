
/* VARIABLES */
let sky, arrowLfetImg, arrowRightImg, pigIntroImg, catIntroImg, duckIntroImg, levelMapImg, levelPinImg, duckTennis, catTennis, pigTennis, trophyImg, racket1Img,racket2Img,tennisBallImg, pigQuizImg, duckQuizImg, catQuizImg, gameShow1,gameShow2,gameShow3,gameShow4,gameShow5, gameShow6, starImg, starDImg;
let startButton, nextButton1, arrowLeft, arrowRight, select, levelPin1, levelPin2, levelPin3, levelPin4, levelPin5, nextButton2, nextButton3, racket1,racket2,tennisBall, nextButton4, nextButton5, nextButton6, nextButton7, aButton, bButton,cButton, dButton, nextButton8, nextButton9,nextButton10;
let avatar = 0;
let screen = 0;
let level = 1;
let tennisGame = "no";
let actualTScore = 0;
let oppTScore = 0;
let tennisScore = 0;
let quizGameLevel = 1;
let quizLives = 3;
let quizBreak = true;

/* PRELOAD LOADS FILES */
function preload() {
  sky = loadImage('/assets/Sky.png');
  arrowLeftImg = loadImage('/assets/ArrowLeft.png');
  arrowRightImg = loadImage('/assets/ArrowRight.png');
  pigIntroImg = loadImage('/assets/PigIntro.png');
  catIntroImg = loadImage('/assets/CatIntro.png');
  duckIntroImg = loadImage('assets/duckIntro.png');
  levelMapImg = loadImage('assets/levelMap.png');
  levelPinImg = loadImage('assets/levelPin.png');
  pigTennis = loadImage('assets/PigTennis.png');
  catTennis = loadImage('assets/CatTennis.png');
  duckTennis = loadImage('assets/DuckTennis.png');
  tennisCourt = loadImage('assets/tennisCourt.jpg');
  racket1Img = loadImage('assets/RacketRight.png');
  racket2Img = loadImage('assets/RacketLeft.png');
  tennisBallImg = loadImage('assets/tennisBall.png');
  trophyImg = loadImage('assets/trophy.png');
  pigQuizImg = loadImage('assets/PigGame.png');
  catQuizImg = loadImage('assets/CatGame.png');
  duckQuizImg = loadImage('assets/DuckGame.png');
  gameShow1 = loadImage('assets/GameShow1.png');
  gameShow2 = loadImage('assets/GameShow2.png');
  gameShow3 = loadImage('assets/GameShow3.png');
  gameShow4 = loadImage('assets/GameShow4.png');
  gameShow5 = loadImage('assets/GameShow5.png');
  gameShow6 = loadImage('assets/GameShow6.png');
  starImg = loadImage('assets/star.png');
  starDImg = loadImage('assets/starD.png');
}


/* SETUP RUNS ONCE */
function setup() {
  createCanvas(400,400);

  //Starting Screen
  imageMode(CENTER);
  textAlign(CENTER);
  image(sky, 200, 200, 400, 800);
  textSize(45);
  fill('white');
  text('Fever Dream',200 ,180);

  //Start Button
  startButton = new Sprite(200,220,50,30);
  startButton.collider = "k";
  startButton.textSize = 15;
  startButton.text = "Start";
  startButton.color = color(39,159,127);

  //Next Button 1
  nextButton1 = new Sprite(-200,-320,50,20);
  nextButton1.collider = "k";
  nextButton1.textSize = 15;
  nextButton1.text = "Next";
  nextButton1.color = color(39,159,127);

  //Avatar Arrows
  arrowLeft = new Sprite( -50,-200, 50, 50, "k");
  arrowRight = new Sprite( -350,-200, 50, 50, "k");
  arrowLeft.image = arrowLeftImg;
  arrowRight.image = arrowRightImg;
  arrowLeft.image.scale = ( 0.1, 0.1);
  arrowRight.image.scale = ( 0.1, 0.1);

  //Avatar Select
  select = new Sprite(-200,-360, 50,30);
  select.collider = "k";
  select.textSize = 15;
  select.text = "Select";
  select.color = color(39,159,127);

  //Level Pins
  levelPin1 = new Sprite(-200,-200, "k");
  levelPin1.image = levelPinImg;
  levelPin1.image.scale = (0.07,0.07);
  levelPin2 = new Sprite(-200,-200, "k");
  levelPin2.image = levelPinImg;
  levelPin2.image.scale = (0.07,0.07);
  levelPin3 = new Sprite(-200,-200, "k");
  levelPin3.image = levelPinImg;
  levelPin3.image.scale = (0.07,0.07);
  levelPin4 = new Sprite(-200,-200, "k");
  levelPin4.image = levelPinImg;
  levelPin4.image.scale = (0.07,0.07);
  levelPin5 = new Sprite(-200,-200, "k");
  levelPin5.image = levelPinImg;
  levelPin5.image.scale = (0.07,0.07);

  //Next Button 2
  nextButton2 = new Sprite(-200,-320,50,20);
  nextButton2.collider = "k";
  nextButton2.textSize = 15;
  nextButton2.text = "Next";
  nextButton2.color = color(39,159,127);

  //Next Button 3
  nextButton3 = new Sprite(-200,-320,50,20);
  nextButton3.collider = "k";
  nextButton3.textSize = 15;
  nextButton3.text = "Next";
  nextButton3.color = color(39,159,127);

  //Tennis Game
  racket1 = new Sprite(-200,-200,100,20,"k");
  racket1.image = racket1Img;
  racket1.image.scale = (0.3,0.3);
  racket1.rotationLock = true;
  racket2 = new Sprite( -200,-200,100,20,"k");
  racket2.image = racket2Img;
  racket2.image.scale = (0.3,0.3);
  racket2.rotationLock = true;
  tennisBall = new Sprite(-50,-50,10);
  tennisBall.image = tennisBallImg;
  tennisBall.image.scale = (0.03,0.03);
  tennisBall.direction = 'down';
  tennisBall.speed = 5;
  tennisBall.bounciness = 1;
  tennisBall.friction = 0;

  //Create walls
  walls = new Group();
  walls.w = 10;
  walls.h = 400;
  walls.collider = "static";
  walls.visible = false;

  // left and right walls
  new walls.Sprite(50, height / 2);
  new walls.Sprite(350, height / 2);

  //Next button 4
  nextButton4 = new Sprite(-200,-320,50,20);
  nextButton4.collider = "k";
  nextButton4.textSize = 15;
  nextButton4.text = "Next";
  nextButton4.color = color(39,159,127);

  //Next button 5
  nextButton5 = new Sprite(-200,-320,50,20);
  nextButton5.collider = "k";
  nextButton5.textSize = 15;
  nextButton5.text = "Next";
  nextButton5.color = color(39,159,127);

  //Next button 6
  nextButton6 = new Sprite(-200,-320,50,20);
  nextButton6.collider = "k";
  nextButton6.textSize = 15;
  nextButton6.text = "Next";
  nextButton6.color = color(39,159,127);

  //Next button 7
  nextButton7 = new Sprite(-200,-320,50,20);
  nextButton7.collider = "k";
  nextButton7.textSize = 15;
  nextButton7.text = "Next";
  nextButton7.color = color(39,159,127);

  //Quiz game choose
  aButton = new Sprite(-200,-320,100,30);
  aButton.collider = "k";
  aButton.textSize = 20;
  aButton.text = "A";
  aButton.color = color(0, 175, 239);
  bButton = new Sprite(-200,-320,100,30);
  bButton.collider = "k";
  bButton.textSize = 20;
  bButton.text = "B";
  bButton.color = color(0, 175, 239);
  cButton = new Sprite(-200,-320,100,30);
  cButton.collider = "k";
  cButton.textSize = 20;
  cButton.text = "C";
  cButton.color = color(0, 175, 239);
  dButton = new Sprite(-200,-320,100,30);
  dButton.collider = "k";
  dButton.textSize = 20;
  dButton.text = "D";
  dButton.color = color(0, 175, 239);

  //Next button 8
  nextButton8 = new Sprite(-200,-320,50,20);
  nextButton8.collider = "k";
  nextButton8.textSize = 15;
  nextButton8.text = "Next";
  nextButton8.color = color(39,159,127);

  //Next button 9
  nextButton9 = new Sprite(-200,-320,50,20);
  nextButton9.collider = "k";
  nextButton9.textSize = 15;
  nextButton9.text = "Again";
  nextButton9.color = color(39,159,127);

  //Next button 10
  nextButton10 = new Sprite(-200,-320,50,20);
  nextButton10.collider = "k";
  nextButton10.textSize = 15;
  nextButton10.text = "Next";
  nextButton10.color = color(39,159,127);
}

/* DRAW LOOP REPEATS */
function draw() {

  
  //Starting Screen
  if (startButton.mouse.presses()){
      screen1();
      screen = 1;
  };

  //Avatar Screen
  if (nextButton1.mouse.presses()){
    avatarScreen();
    screen = 2;
    avatar = 1;
    print(screen);
  };
  
  if (avatar == 1 && screen ==2){
    avatarChoice();
    image(duckIntroImg, 200,200, 200,200);
  }else if (avatar == 2 && screen ==2){
    avatarChoice();
    image(catIntroImg, 200,200, 200, 200);
  }else if(avatar == 3 && screen ==2){
    avatarChoice();
    image(pigIntroImg, 200,200, 200, 200);
  };

    if(arrowLeft.mouse.presses() && avatar == 1){
    avatar = 3;
  } else if(arrowLeft.mouse.presses() && avatar > 1){
	avatar = avatar - 1;
  }
   if (arrowRight.mouse.presses() && avatar == 3){
    avatar = 1;
  } else if (arrowRight.mouse.presses() && avatar < 3){
	 avatar = avatar + 1;
  }

  //Level Screen
  if (select.mouse.presses()){
    levelScreen();
    screen = 3;
  }

  //First Game Intro
  if (levelPin1.mouse.presses()){
    pinDissappear();
    tennisStory();
    if (avatar == 1){
      image(duckTennis, 200, 110, 200, 250);
    }else if(avatar == 2){
      image(catTennis, 200, 100, 200, 250);
    }else if(avatar == 3){
      image(pigTennis, 200, 110, 200, 250);
    }
  }

  if (nextButton2.mouse.presses()){
    tennisStory2();
    screen = 4;
  }

  //Game
  if (nextButton3.mouse.presses()){
    image(tennisCourt, 200,200, 550, 500);
    tennisRestart();
  }

  if (screen == 5 ){
    image(tennisCourt, 200,200, 550,500);
    fill("lightblue");
    rect(20,200,61,50);
    fill(0);
    textSize(15);
    text("Your\nScore: " + actualTScore, 50,220);
    fill("lightgreen");
    rect(20,175,61,20);
    fill(0);
    text("rally: "+ tennisScore, 50,190);
    fill("pink");
    rect(315,200,61,50);
    fill(0);
    text("Rival\nScore: " + oppTScore, 346,220);
    
    //racket controlls
    if (kb.pressing("left")){
      racket1.vel.x = -3;
    } else if (kb.pressing("right")){
      racket1.vel.x = 3;
    } else {
      racket1.vel.x = 0;
    }

    //Racket 2 location first section
  if (tennisGame == "yes"){
    if (tennisBall.y>50 && tennisScore/2 < 3){
    racket2.x = (tennisBall.x);
    racket2.vel.x = 4;
    
    }else if(tennisScore/2 == 3){
    racket2.x = 400;
    racket2.vel.x = 0;
    actualTScore = actualTScore + 1;
    tennisScore = 7;
    sleep(2000).then(function(){
      tennisScore = 0;
    });
  };}

      //Racket 2 location second section
    if (tennisGame == "no"){
      if (tennisBall.y>50 && tennisScore < 3){
      racket2.x = (tennisBall.x);
      racket2.vel.x = 4;

      }else if(tennisScore == 3){
      racket2.x = 400;
      racket2.vel.x = 0;
      actualTScore = actualTScore + 1;
      tennisScore = 7;
      sleep(2000).then(function(){
        tennisScore = 0;
      });
    };}
    
    //if ball hits edge of canvas
    if (tennisBall.y >= 400){
      tennisBall.y = 0;
      tennisBall.x = random(100,300);
      tennisBall.vel.y = random(2,4);
      tennisBall.direction = "down";
      oppTScore = oppTScore + 1;
      racket2.x = 400;
    }else if (tennisBall.y< -1){
      tennisBall.y = 0;
      tennisBall.x = 300;
      tennisBall.vel.y = random(2,4);
      racket2.x = 400;
    }
    //Keep racket from off edges
    if (racket1.x < 50){
      racket1.x = 50;
    } else if (racket1.x > 350) {
        racket1.x = 350;
    }else if (racket2.x < 0){
      racket2.x = 0;
    } else if (racket2.x > 400) {
        racket2.x = 400;
    };

    //When ball collides with rackets bounce off and increase score
    if (tennisBall.collides(racket1)) {
      tennisBall.speed = 5;
      tennisScore = tennisScore + 1;
      tennisBall.direction = tennisBall.direction + random(-10, 10);
  } else if (tennisBall.collides(racket2)) {
      tennisBall.speed = 5;
      tennisBall.direction = tennisBall.direction + random(-10, 10);
    };

  // Hope Message
    if(actualTScore == 2 && tennisGame == "yes"){
      sleep(2000).then(function(){
        tennisBall.vel.y = 8;
        tennisBall.x = 280;
        racket1.x = 100;
        racket1.vel.x = 1;
        //if ball hits edge of canvas
        if (tennisBall.y >= 400){
          tennisBall.y = 0;
          tennisBall.x = random(250,300);
          tennisBall.vel.y = random(2,4);
          tennisBall.direction = "down";
          oppTScore = oppTScore + 1;
          racket2.x = 400;
        }else if (tennisBall.y<-1){
          tennisBall.y = 0;
          tennisBall.x = 300;
          tennisBall.vel.y = random(2,4);
          racket2.x = 400;
      };});
        if(oppTScore == 5){
        sleep(1000).then(function(){
        image(sky, 200,200);
        screen=6;});
      };
    };

    if (actualTScore == 10){
      screen = 7;
    }else if (oppTScore == 10){
      screen = 8;
    }
};
  if (screen == 6){
    tennisHope();
    if (nextButton4.mouse.presses()){
      image(tennisCourt, 200,200);
      game2();
      tennisGame = "no";
      print(screen);
      tennisScore = 0;
      actualTScore = 2;
      oppTScore = 5;
      tennisBall.vel.y = 2;
      screen = 5;
    }
  }

  if (screen == 7){
    image(sky,200,200);
    tennisWin();
    if(mouseIsPressed){
        nextButton5.pos = {x: 200, y: 350};
        image(sky, 200, 200);
      if (avatar == 1){
        image(duckTennis, 200, 110, 200,250);
      }else if(avatar == 2){
        image(catTennis, 200, 110, 200, 210);
      }else if(avatar == 3){
        image(pigTennis, 200, 110, 200, 250);
      }
      textSize(15);
      fill(0,0,102);
      text("“I can’t believe I won! Being hopeful \nwas the answer. Having that positive outlook \nmade the game go by faster. I scored a point \nafter three rally points instead of six. \nI wonder what else will happen in this dream…”", 200,220)
      screen = 9;
      };
    }
  else if (screen == 8){
    image(sky, 200,200);
    tennisLoss();
    if(mouseIsPressed){
      tennisRestart();
    };
  };
  //quiz Game
  if(nextButton5.mouse.presses()){
    nextButton5.pos = {x: -200, y: -350};
    level = 2;
    levelScreen();
    screen = 3; 
  }

  if (levelPin2.mouse.presses()){
    pinDissappear();
    quizStory();
    if (avatar == 1){
      image(duckQuizImg, 200, 110,200, 190);
    }else if(avatar == 2){
      image(catQuizImg, 200, 110, 200, 200);
    }else if(avatar == 3){
      image(pigQuizImg, 200, 110, 200, 200);
    };
    screen = 10; 
  }

  if(nextButton6.mouse.presses()){
    quizStory2();
    screen = 11;
  }

  if(nextButton7.mouse.presses()){
    nextButton7.pos = {x: -200, y: -330};
    screen = 12;
  }

if (screen == 12){

  //Question
  if (quizGameLevel == 1){
    quizGame();
    image(gameShow1, 200, 150, 600, 700);
    if(dButton.mouse.presses()){
      quizGameLevel = 2;
    }else if(aButton.mouse.presses()){
      quizLives = quizLives - 1;
    }else if(bButton.mouse.presses()){
      quizLives = quizLives - 1;
    }else if(cButton.mouse.presses()){
      quizLives = quizLives - 1;
    };
  }else if (quizGameLevel == 2){
    quizGame();
    image(gameShow2, 200, 150, 600, 700);
    if(aButton.mouse.presses()){
      quizGameLevel = quizGameLevel + 1;
    }else if(dButton.mouse.presses()){
      quizLives = quizLives - 1;
    }else if(bButton.mouse.presses()){
      quizLives = quizLives - 1;
    }else if(cButton.mouse.presses()){
      quizLives = quizLives - 1;
    };
  }else if (quizGameLevel == 3){
    quizGame();
    image(gameShow3, 200, 150, 600, 700);
    if(bButton.mouse.presses()){
      quizGameLevel = quizGameLevel + 1;
    }else if(dButton.mouse.presses()){
      quizLives = quizLives - 1;
    }else if(aButton.mouse.presses()){
      quizLives = quizLives - 1;
    }else if(cButton.mouse.presses()){
      quizLives = quizLives - 1;
    };
  }else if (quizGameLevel == 4){
    quizGame();
    image(gameShow4, 200, 150, 600, 700);
    if(dButton.mouse.presses()){
      quizGameLevel = quizGameLevel + 1;
    }else if(aButton.mouse.presses()){
      quizLives = quizLives - 1;
    }else if(bButton.mouse.presses()){
      quizLives = quizLives - 1;
    }else if(cButton.mouse.presses()){
      quizLives = quizLives - 1;
    };
  }else if (quizGameLevel == 5){
    quizGame();
    image(gameShow5, 200, 150, 600, 700);
    if(cButton.mouse.presses()){
      quizBreak = "false";
    }else if(dButton.mouse.presses()){
      quizLives = quizLives - 1;
    }else if(bButton.mouse.presses()){
      quizLives = quizLives - 1;
    }else if(aButton.mouse.presses()){
      quizLives = quizLives - 1;
    };
  }else if (quizGameLevel == 6){
    quizGame();
    image(gameShow6, 200, 150, 600, 700);
    if(aButton.mouse.presses()){
      quizGameLevel = quizGameLevel + 1;
    }else if(dButton.mouse.presses()){
      quizLives = quizLives - 1;
    }else if(bButton.mouse.presses()){
      quizLives = quizLives - 1;
    }else if(cButton.mouse.presses()){
      quizLives = quizLives - 1;
    };
  };

  //Star lives
  if(quizLives == 1){
    image(starImg, 180,35, 40, 40);
    image(starDImg, 220,35, 40, 40);
    image(starDImg, 260,35, 40, 40);
  }else if(quizLives ==2){
    image(starImg, 180,35, 40, 40);
    image(starImg, 220,35, 40, 40);
    image(starDImg, 260,35, 40, 40);
  }else if(quizLives ==3){
    image(starImg, 180,35, 40, 40);
    image(starImg, 220,35, 40, 40);
    image(starImg, 260,35, 40, 40);
  };

  if (quizBreak == "false"){
    image(sky, 200,200);
    quizStory3();
    if (avatar == 1){
      image(duckQuizImg, 200, 110, 200, 200);
    }else if(avatar == 2){
      image(catQuizImg, 200, 110, 200, 200);
    }else if(avatar == 3){
      image(pigQuizImg, 200, 110, 200, 200);
    };
    if (nextButton10.mouse.presses()){
      nextButton10.pos = {x: -200, y: -200};
      quizGameLevel = quizGameLevel +1;
      quizBreak = "true";
    }
  };

  //win and loss
  if(quizLives == 0){
    image(sky, 200, 200);
    quizLoss();
    if(nextButton9.mouse.presses()){
      quizGameLevel = 1;
      nextButton9.pos = {x: - 200, y: -200};
      quizLives = 3; 
    }
  }else if (quizGameLevel == 7){
    image(sky, 200, 200);
    quizWin();
    if(mouseIsPressed){
      screen = 13;
    }
  }

};

  if (screen == 13){
    image(sky, 200,200);
    quizStory4();
    if (avatar == 1){
      image(duckQuizImg, 200, 110, 200, 190);
    }else if(avatar == 2){
      image(catQuizImg, 200, 110, 200, 200);
    }else if(avatar == 3){
      image(pigQuizImg, 200, 110, 200, 200);
    };
    
    if (nextButton8.mouse.presses()){
      nextButton8.pos = {x: -200, y: -350};
      level = 3;
      screen = 3; 
      levelScreen();
    }
  }

  if(levelPin3.mouse.presses()){
    pinDissappear();
    image(sky,200,200);
    textSize(35);
    fill(0,0,102);
    text("Coming Soon!",200,200);
  }
};

/* FUNCTIONS */
function screen1(){
  startButton.pos = {x: -300, y: -300};
  nextButton1.pos = {x: 200, y: 330};
  image(sky,200,200);
  textSize(15);
  fill(0,0,102);
  text("After a difficult 24 hours, you were \nlying in bed while reminiscing about your \nday. “I can’t believe that was my audition. \nI practiced for over a month, yet I was so \nnervous. I think my nerves affected my \nperformance. I wish there was something \nI could do. I don’t like sitting and \nwaiting.” Today, you auditioned for your dream \nrole in the school musical. You didn’t have \nmuch experience in theater, so your audition \nwas your best chance at proving yourself. \nAs you fell asleep, you drifted into a dream \nthinking, “What am I going to do?!”", 200,70);
};

function avatarScreen(){
  nextButton1.pos = {x: -200, y: -320};
  image(sky,200,200);
  arrowLeft.pos = {x: 50, y: 200};
  arrowRight.pos = {x: 350, y: 200};
  select.pos = {x:200, y: 360};
};

function avatarChoice(){
  image(sky, 200, 200);
  textSize(25);
  text("Choose your dream’s avatar...", 200, 60);
  text(avatar + "/3", 200, 320);
};

function levelScreen(){
  image(levelMapImg, 200,200,  600, 800);
  arrowLeft.pos = {x: -50, y:-200};
  arrowRight.pos = {x:-350, y: -200};
  select.pos = {x:-200, y:-360};
  textSize(25);
  fill('white');
  text("Start Your Dream Journey!", 200, 50);
      if (level == 1){
      levelPin1.pos = {x: 56, y: 120};
    }else if(level == 2){
      levelPin1.pos = {x: 56, y: 120};
      levelPin2.pos = {x: 345, y: 118};
    }else if(level == 3){
      levelPin1.pos = {x: 56, y: 120};
      levelPin2.pos = {x: 345, y: 118};
      levelPin3.pos = {x: 191, y: 211};
    }else if(level == 4){
      levelPin1.pos = {x: 56, y: 120};
      levelPin2.pos = {x: 345, y: 118};
      levelPin3.pos = {x: 191, y: 211};
      levelPin4.pos = {x: 81, y: 301};
    }else if(level == 5){
      levelPin1.pos = {x: 56, y: 120};
      levelPin2.pos = {x: 345, y: 118};
      levelPin3.pos = {x: 191, y: 211};
      levelPin4.pos = {x: 81, y: 301};
      levelPin5.pos = {x: 329, y: 301};
    }
};

function pinDissappear(){
  levelPin1.pos = {x: -72, y: -131};
  levelPin2.pos = {x: -328, y: -131};
  levelPin3.pos = {x: -191, y: -211};
  levelPin4.pos = {x: -81, y: -301};
  levelPin5.pos = {x: -329, y: -301};
};

function tennisStory(){
  nextButton2.pos = {x: 200, y: 330};
  image(sky, 200,200, 600,800);
  textSize(15);
  fill(0,0,102);
  text("Woah! I must be dreaming. That explains \nwhy I am an animal that’s wearing sweatbands. \nIt’s almost like I am preparing for a \ntennis match.” As you admired your new look, \nwords began to appear behind you…", 200,220);
  };

function tennisStory2(){
  nextButton2.pos = {x: -200, y: -330};
  nextButton3.pos = {x: 200, y: 330};
  image(sky, 200,200);
  textSize(15);
  fill(0,0,102);
  text("Congratulations on making it to the \nWimbeldon Semifinals! You worked hard to \nqualify for this tournament, being one of the \nfew globally unranked competitors. Your next \nopponent will be Jasmine Paolini, ranked 6th \nin the women's tennis rankings. Use the left \nand right arrow keys to keep the ball in \nplay. Everytime the ball passes your racket, \nyour opponent will gain a point. First to 10 \nwins. Good luck on court!", 200,110);
  };

function game1(){
  nextButton3.pos = {x: -200, y: -330};
  racket1.pos = {x:200, y: 375};
  racket2.pos = {x:200, y: 30};
  tennisBall.pos = {x:300, y:0};
};
function game2(){
  nextButton4.pos = {x: -200, y: -330};
  racket1.pos = {x:200, y: 375};
  racket2.pos = {x:200, y: 30};
  tennisBall.pos = {x:300, y:0};
};

function tennisHope(){
  nextButton4.pos = {x: 200, y: 350};
  racket1.pos = {x: -150, y: -150};
  racket2.pos = {x: -150, y: -150};
  tennisBall.pos = {x: -300, y: -50};
  tennisBall.vel.y = 0;
  racket1.vel.x = 0;
  racket2.vel.x=0;
  image(sky, 200, 200);
  textSize(15);
  fill(0,0,102);
  text("“I really needed this 90-second break. She \nis a great tennis player. I don’t think I can \nbeat her since she scored 5 points so easily.\n Maybe I should give up…” As you began to \nspiral, filling your head with negative thoughts, \nyou heard a voice. “Don’t lose hope! Trust \nin your hard work and anything is possible. \nYou have to have hope.” You couldn’t \ntell where the voice was coming from. \nThis conversation left you filled with so many \nquestions, yet, you knew the voice was \nright. “Maybe I just need hope to win.” You \nthought while returning to your position on \nthe tennis court.", 200,80);
};

function tennisRestart(){
  image(tennisCourt, 200,200);
  game1();
  tennisGame = "yes";
  print(screen);
  tennisScore = 0;
  actualTScore = 0;
  oppTScore = 0;
  tennisBall.vel.y = 2;
  screen = 5;
}

function tennisLoss(){
 tennisBall.pos = {x: -50, y: -50};
  racket1.pos = {x: -200, y: -200};
  racket2.pos = {x: -400, y: -400};
  fill(0,0,102);
  textSize(20);
  text("You lose.", 200, 150);
  textSize(15);
  text("Maybe you will have a better game \nnext time.", 200, 170)
  textSize(10);
  text("Click anywhere to play again.", 200, 210);
}

function tennisWin(){
  tennisBall.pos = {x: -150, y: -150};
  racket1.pos = {x: -200, y: -200};
  racket2.pos = {x: -400, y: -400};
  textSize(20);
  fill(0,0,102);
  text("You Win!", 200, 50);
  textSize(15);
  text("You are on the path to becoming the top \nplayer in the world.", 200, 70)
  textSize(10);
  text("Click anywhere to move forward.", 200, 110);
   image(trophyImg, 200, 250);
};

function quizStory(){
  nextButton6.pos = {x: 200, y: 330};
  image(sky, 200,200);
  textSize(13);
  fill(0,0,102);
  text("*Crash*“Man that hurt. It feels like I just fell on a stage \nfloor. Where am I?” As you opened your eyes, you were blinded \nby a bright light. “Welcome to the Quiz game \nshow new participant!” said a familiar voice. \nAfter your eyes adjusted, you recognized the speaker. \n“It’s Steve Harvey!”", 200,220);
};

function quizStory2(){
  nextButton6.pos = {x: -200, y: -330};
  nextButton7.pos = {x: 200, y: 330};
  image(sky, 200,200);
  textSize(15);
  fill(0,0,102);
  text("This unexpected revelation nearly captured \nyour focus and you almost missed what \nhe said. “If you answer 6 questions correctly, \nyou win! You will have 2 lives to answer \nall the questions. If you win, you will \nearn 1 million dollars for your parent's flower \nshop,” said Harvey. “Flower shop? I don’t \nremember-” Suddenly, a flood of memories \nrushed into your head. Your family had owned \na flower shop for 20 years but had fallen \non hard times. This was your opportunity \nto save your family's business. “I can do \nthis!” you told yourself as the game began…", 200,80);
};

function quizGame(){
  textSize(20);
  background(26,34,55);
  fill("white");
  text(quizGameLevel + "/6", 200, 370);
  text("Lives:", 130,50);
  aButton.pos = {x: 130, y: 270};
  bButton.pos = {x: 130, y: 310};
  cButton.pos = {x: 270,y: 270};
  dButton.pos = {x:270, y: 310};
}

function quizLoss(){
    aButton.pos = {x: -130, y: -270};
    bButton.pos = {x: -130, y: -310};
    cButton.pos = {x: -270,y: -270};
    dButton.pos = {x:-270, y: -310};
  nextButton9.pos = {x: 200, y: 215};
    fill(0,0,102);
    textSize(20);
    text("You lose.", 200, 150);
    textSize(15);
    text("Maybe you will do better next time.", 200, 170)
    textSize(10);
  }

function quizWin(){
  aButton.pos = {x: -130, y: -270};
  bButton.pos = {x: -130, y: -310};
  cButton.pos = {x: -270,y: -270};
  dButton.pos = {x:-270, y: -310};
  quizGameLevel = 10;
    fill(0,0,102);
    textSize(20);
    text("You Win!", 200, 150);
    textSize(15);
    text("You won one million dollars.", 200, 170)
    textSize(10);
    text("Click anywhere to move forward.", 200, 210);
  }

function quizStory3(){
  nextButton10.pos = {x: 200, y: 330};
  aButton.pos = {x: -130, y: -270};
  bButton.pos = {x: -130, y: -310};
  cButton.pos = {x: -270,y: -270};
  dButton.pos = {x:-270, y: -310};
    image(sky, 200,200);
    textSize(13);
    fill(0,0,102);
    text("“I made it to the last question. I can do \nthis! This will help my family’s flower shop. This is \na ray of hope for us.” Your heart was audibly beating \nbecause of nerves. You took three deep breaths, attempting \nto focus. “I have hope, I can do this,” you\nkept repeating.", 200,220);
  };

function quizStory4(){
  nextButton8.pos = {x: 200, y: 330};
    image(sky, 200,200);
    textSize(13);
    fill(0,0,102);
    text("“I did it! I did it! I actually won! \nNow my family’s flower shop will be saved. \nThis was a new hope for my family…well dream \nfamily.", 200,220);
  };