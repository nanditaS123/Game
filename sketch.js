const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var textBackground;
var gameBackground;
var tree, flower, garbage;
var gameState = 0;

var player_front, player_back, player_right, player_left;
var player;

var garbageCount = 6;
var flowerCount = 0;
var treesCount = 0;


function preload() {
  textBackground = loadImage("images/textbg.png");
  gameBackground = loadImage("images/gamebg.png");
  flower = loadImage("images/flower.png");
  tree = loadImage("images/tree.png");
  garbage = loadImage("images/garbage.png");
  endScreen = loadImage("images/ending.png");
  startScreen = loadImage("images/start.png");

  player_front = loadImage("images/front.png");
}

function setup(){
   canvas = createCanvas(830,800);
   engine = Engine.create();
   world = engine.world;

   garbage1 = createSprite(240,350,69,69);
   garbage2 = createSprite(430,500,99,99);
   garbage3 = createSprite(100,600,79,79);
   garbage4 = createSprite(700,200,89,89);
   garbage5 = createSprite(600,670,69,69);
   garbage6 = createSprite(320,120,79,79);

   garbage1.addImage("garbage_",garbage);  
   garbage2.addImage("garbage_",garbage);
   garbage3.addImage("garbage_",garbage);
   garbage4.addImage("garbage_",garbage);
   garbage5.addImage("garbage_",garbage);
   garbage6.addImage("garbage_",garbage);




   player = createSprite(100,200,20,20);
   player.addImage("playerr",player_front);
   player.scale = 0.4;

   flower1 = createSprite(300,120,30,30);
   flower2 = createSprite(785,51,30,30);
   flower3 = createSprite(303,545,30,30);

   flower1.addImage("flowerr1",flower);
   flower2.addImage("flowerr2",flower);
   flower3.addImage("flowerr3",flower);



   tree1 = createSprite(100,50,250,777);
   tree1.addImage("treee1",tree);
   tree2 = createSprite(100,50,480,68);
   tree2.addImage("treee1",tree);
   tree3 = createSprite(100,50,731,689);
   tree3.addImage("treee1",tree);
  
  
}

function draw(){

  if (gameState===0) {
      background(startScreen);
  }

 if (keyWentDown(69) && gameState===0) {
   gameState=1;
}

if (gameState === 1) {
  background(textBackground);
  textSize(23);
  fill("white");
  text("Today, as of 2020/2021, the earth has been littered everywhere", 80, 150);
  text("by us human beings. Oceans, forests, deserts, etc, are all being", 80, 200);
  text("killed! Soon all of our wildlife and vegetation will die too", 80, 250);
  text("And so will we. It is up to us to stop this and save the earth!", 80, 300);

  text("Your goal is to fix up this space of land, and try to do it in", 80, 400);
  text("real life too! If we all put it a little effort we will be able",80, 450);
  text("to fix this dying earth. We should first start by picking up all",80, 500);
  text("the garbage scattered around!", 80, 550);

  fill("#403d47");
  textSize(28);
  text("[ CLICK (SPACE) TO CONTINUE ]", 200, 650);
}

if (keyWentDown(32) && gameState===1) {
  gameState=2;
}

if (gameState === 2) {
  background(textBackground);
  textSize(30);
  fill("white");
  text("RULES/INSTRUCTIONS:", 230, 200);

  textSize(25);
  text("- Use the arrow keys to move around the plot of land", 80, 280);
  text("- Stand over the garbage to pick it up", 80, 340);
  text("- On the top of your screen you'll have a count of the garbage,", 80, 400);
  text("once that hits 0 you have completed your first task!", 80, 460);

  textSize(20);
  text("(Make sure to not touch the place where the garbage was more than once!)", 80, 550);

  fill("#403d47");
  textSize(28);
  text("[ CLICK (S) TO START GAME ]", 200, 650);
}

if (keyWentDown(83) && gameState===2) {
  gameState=3;
}

if (gameState === 3) {
  background(gameBackground);
  garbage1.display();
  garbage2.display();
  garbage3.display();
  garbage4.display();
  garbage5.display();
  garbage6.display();
  garbage7.display();

  player.display();

  if (player.collide(garbage1)) {
    garbage1.visible = false;
    garbageCount = garbageCount -1;
  }

  if (player.collide(garbage2)) {
    garbage2.visible = false;
    garbageCount = garbageCount - 1;
  }

  if (player.collide(garbage3)) {
    garbage3.visible = false;
    garbageCount = garbageCount - 1;
  }

  if (player.collide(garbage4)) {
    garbage4.visible = false;
    garbageCount = garbageCount - 1;
  }

  if (player.collide(garbage5)) {
    garbage5.visible = false;
    garbageCount = garbageCount - 1;
  }

  if (player.collide(garbage6)) {
    garbage6.visible = false;
    garbageCount = garbageCount - 1;
  }
  

  
  if (keyWentDown(UP_ARROW)) {
    player.y = player.y -15
  }

  if (keyWentDown(DOWN_ARROW)) {
    player.y = player.y +15
  }

  if (keyWentDown(RIGHT_ARROW)) {
    player.x = player.x +15
  }

  if (keyWentDown(LEFT_ARROW)) {
    player.x = player.x -15
  }

  textSize(25);
  fill("white");
  text("Amount of Garbage left: " + garbageCount, 50, 65);
}

if (garbageCount === 0 && gameState === 3) {
  gameState = 4;
}

if (gameState === 4) {
  background(textBackground);
  textSize(23);
  fill("white");
  text("Good job! You picked up all the pieces of garbage, the place is", 80, 250);
  text("looking better already! But even though the garbage is gone,", 80, 300);
  text("there's still no nature! Your next task is to plant trees and", 80, 350);
  text("flowers around the plot of land to liven it up!",80, 400);

  fill("#403d47");
  textSize(28);
  text("[ CLICK (SPACE) TO CONTINUE ]", 200, 650);
}

if (keyWentDown(32) && gameState===4) {
  gameState=5;
}

if (gameState === 5) {
  background(textBackground);
  textSize(30);
  fill("white");
  text("RULES/INSTRUCTIONS:", 230, 200);

  textSize(25);
  text("- Use the arrow keys to move around the plot of land", 80, 280);
  text("- Click keys 1,2, and 3 to plant your 3 flowers", 80, 340);
  text("- Click keys 4,5, and 6 to plant your 3 trees", 80, 400);
  text("You will have a count of how many flowers and trees you", 80, 460);
  text("have planted so far. Once you've planted them all, you're done!", 80, 520);

  
  textSize(20);
  text("(Make sure to click the keys in numerical order!)", 180, 570);

  fill("#403d47");
  textSize(28);
  text("[ CLICK (S) TO START GAME ]", 200, 650);
}

if (keyWentDown(83) && gameState===5) {
  gameState=6;
}

if (gameState === 6) {
  background(gameBackground);
  player.display();

  if (keyWentDown(UP_ARROW)) {
    player.y = player.y -15
  }

  if (keyWentDown(DOWN_ARROW)) {
    player.y = player.y +15
  }

  if (keyWentDown(RIGHT_ARROW)) {
    player.x = player.x +15
  }

  if (keyWentDown(LEFT_ARROW)) {
    player.x = player.x -15
  }

  if (keyWentDown(49)) {
    gameState = 7
  }

  if (keyWentDown(50)) {
    gameState = 8
  }

  if (keyWentDown(51)) {
    gameState = 9
  }

  if (keyWentDown(52)) {
    treesCount = treesCount + 1;
    gameState = 10
  }

  if (keyWentDown(53)) {
    treesCount = treesCount + 1;
    gameState = 11
  }

  if (keyWentDown(54)) {
    treesCount = treesCount + 1;
    gameState = 12
  }

  textSize(25);
  fill("white");
  text("Flowers Planted: " + flowerCount, 50, 65);
  text("Trees Planted: " + treesCount, 50, 95);
}

if (gameState === 7) {
  background(gameBackground);
  flower1.display();
  player.display();

  if (keyWentDown(UP_ARROW)) {
    player.y = player.y -15
  }

  if (keyWentDown(DOWN_ARROW)) {
    player.y = player.y +15
  }

  if (keyWentDown(RIGHT_ARROW)) {
    player.x = player.x +15
  }

  if (keyWentDown(LEFT_ARROW)) {
    player.x = player.x -15
  }

  if (keyWentDown(50)) {
    gameState = 8
  }

  flowerCount = 1;

  textSize(25);
  fill("white");
  text("Flowers Planted: " + flowerCount, 50, 65);
  text("Trees Planted: " + treesCount, 50, 95);

}

if (gameState === 8) {
  background(gameBackground);
  player.display();
  flower2.x = 585;
  flower2.y = 70;
  flower2.display();
  flower1.display();

  if (keyWentDown(UP_ARROW)) {
    player.y = player.y -15
  }

  if (keyWentDown(DOWN_ARROW)) {
    player.y = player.y +15
  }

  if (keyWentDown(RIGHT_ARROW)) {
    player.x = player.x +15
  }

  if (keyWentDown(LEFT_ARROW)) {
    player.x = player.x -15
  }

  if (keyWentDown(51)) {
    gameState = 9
  }

  flowerCount = 2;

  textSize(25);
  fill("white");
  text("Flowers Planted: " + flowerCount, 50, 65);
  text("Trees Planted: " + treesCount, 50, 95);

}

if (gameState === 9) {  
  background(gameBackground);
  flower3.x = 203;
  flower3.y = 345;
  flower3.display();
  flower2.display();
  flower1.display();
  player.display();

  if (keyWentDown(UP_ARROW)) {
    player.y = player.y -15
  }

  if (keyWentDown(DOWN_ARROW)) {
    player.y = player.y +15
  }

  if (keyWentDown(RIGHT_ARROW)) {
    player.x = player.x +15
  }

  if (keyWentDown(LEFT_ARROW)) {
    player.x = player.x -15
  }

  if (keyWentDown(52)) {
    gameState = 10
  }

  flowerCount = 3;

  textSize(25);
  fill("white");
  text("Flowers Planted: " + flowerCount, 50, 65);
  text("Trees Planted: " + treesCount, 50, 95);
 
}

if (gameState === 10) {
  background(gameBackground);
  tree1.y = 677;
  tree1.x = 190;
  tree1.display();
  flower3.display();
  flower2.display();
  flower1.display();
  player.display();

  if (keyWentDown(UP_ARROW)) {
    player.y = player.y -15
  }

  if (keyWentDown(DOWN_ARROW)) {
    player.y = player.y +15
  }

  if (keyWentDown(RIGHT_ARROW)) {
    player.x = player.x +15
  }

  if (keyWentDown(LEFT_ARROW)) {
    player.x = player.x -15
  }

  if (keyWentDown(53)) {
    gameState = 11
  }

  treesCount = 1;

  textSize(25);
  fill("white");
  text("Flowers Planted: " + flowerCount, 50, 65);
  text("Trees Planted: " + treesCount, 50, 95);

}

if (gameState === 11) {
  background(gameBackground);
  tree2.y = 368;
  tree2.x = 480;
  tree2.display();
  tree1.display();
  flower3.display();
  flower2.display();
  flower1.display();
  player.display();

  if (keyWentDown(UP_ARROW)) {
    player.y = player.y -15
  }

  if (keyWentDown(DOWN_ARROW)) {
    player.y = player.y +15
  }

  if (keyWentDown(RIGHT_ARROW)) {
    player.x = player.x +15
  }

  if (keyWentDown(LEFT_ARROW)) {
    player.x = player.x -15
  }

  if (keyWentDown(54)) {
    gameState = 12
  }

  treesCount = 2;

  textSize(25);
  fill("white");
  text("Flowers Planted: " + flowerCount, 50, 65);
  text("Trees Planted: " + treesCount, 50, 95);
  
}

if (gameState === 12) {
  background(gameBackground);
  tree3.y = 589;
  tree3.x = 631;

  tree3.display();
  tree2.display();
  tree1.display();
  flower3.display();
  flower2.display();
  flower1.display();
  player.display();

  if (keyWentDown(UP_ARROW)) {
    player.y = player.y -15
  }

  if (keyWentDown(DOWN_ARROW)) {
    player.y = player.y +15
  }

  if (keyWentDown(RIGHT_ARROW)) {
    player.x = player.x +15
  }

  if (keyWentDown(LEFT_ARROW)) {
    player.x = player.x -15
  }

  treesCount = 3;
  
  textSize(25);
  fill("white");
  text("Flowers Planted: " + flowerCount, 50, 65);
  text("Trees Planted: " + treesCount, 50, 95);

  if (flowerCount === 3 && treesCount === 3) {
    gameState = 13;
  }

}

if (gameState === 13) {
  background(textBackground);
  textSize(23);
  fill("white");
  text("Congratulations! You've fixed up this plot of land.", 80, 200);
  text("We started with a gross place with tons of garbage and now we", 80, 250);
  text("have a beautiful area with pretty flowers and trees", 80, 300);
  text("all thanks to you! Don't be afraid to plant a tree or pick up",80, 350);
  text("some garbage in real life, Every effort makes a difference!",80, 400);


  fill("#403d47");
  textSize(28);
  text("[ CLICK (SPACE) TO CONTINUE ]", 200, 650);
}

if (keyWentDown(32) && gameState===13) {
  gameState=14;
}

if (gameState === 14) {
  background(endScreen);
}


}
