var foodStock = 10;
var canvas;
var dog, dogIMG;
var form;
var button, button2;
var milkIMG,milk1,milk2, milk3,milk4,milk5,milk6,milk7,milk8,milk9,milk10,milk11,milk12,milk13,milk14,milk15;
function preload()
{
dogIMG = loadImage("images/dogImg.png");
milkIMG = loadImage("images/milk.png");
}

function setup() {
	canvas = createCanvas(800, 700);
  background(45,200,0);
dog = createSprite(200,200,20,20);
dog.addImage(dogIMG);
dog.scale = 0.3;
milk1 = createSprite(50,560);
milk1.addImage(milkIMG);
milk1.scale = 0.1;
milk2 = createSprite(100,560);
milk2.addImage(milkIMG);
milk2.scale = 0.1;
milk3 = createSprite(150,560);
milk3.addImage(milkIMG);
milk3.scale = 0.1;
milk4 = createSprite(200,560);
milk4.addImage(milkIMG);
milk4.scale = 0.1;
milk5 = createSprite(250,560);
milk5.addImage(milkIMG);
milk5.scale = 0.1;
milk6 = createSprite(300,560);
milk6.addImage(milkIMG);
milk6.scale = 0.1;
milk7 = createSprite(350,560);
milk7.addImage(milkIMG);
milk7.scale = 0.1;
milk8 = createSprite(400,560);
milk8.addImage(milkIMG);
milk8.scale = 0.1;
milk9= createSprite(450,560);
milk9.addImage(milkIMG);
milk9.scale = 0.1;
milk10 = createSprite(500,560);
milk10.addImage(milkIMG);
milk10.scale = 0.1;
milk11 = createSprite(550,560);
milk11.addImage(milkIMG);
milk11.scale = 0.1;

milk12 = createSprite(600,560);
milk12.addImage(milkIMG);
milk12.scale = 0.1;

milk13 = createSprite(650,560);
milk13.addImage(milkIMG);
milk13.scale = 0.1;

milk14 = createSprite(700,560);
milk14.addImage(milkIMG);
milk14.scale = 0.1;

milk15 = createSprite(750,560);
milk15.addImage(milkIMG);
milk15.scale = 0.1;

button = createButton('feed');
this.button.position(100,100);
button2 = createButton('add food');
this.button2.position(150,100);
}


function draw() {  
  

this.button.mousePressed(()=>{
  foodStock = foodStock-1;
  foodStock.update();
});
this.button2.mousePressed(()=>{
  foodStock = foodStock+1;
  foodStock.update();
});

if(foodStock <= 0){
  milk1.visible = false;
  milk2.visible = false;
  milk3.visible = false;
  milk4.visible = false;
  milk5.visible = false;
  milk6.visible = false;
  milk7.visible = false;
  milk8.visible = false;
  milk9.visible = false;
  milk10.visible = false;
  milk11.visible = false;
  milk12.visible = false;
  milk13.visible = false;
  milk14.visible = false;
  milk15.visible = false;
}

if(foodStock === 1){
  milk1.visible = true;
  milk2.visible = false;
  milk3.visible = false;
  milk4.visible = false;
  milk5.visible = false;
  milk6.visible = false;
  milk7.visible = false;
  milk8.visible = false;
  milk9.visible = false;
  milk10.visible = false;
  milk11.visible = false;
  milk12.visible = false;
  milk13.visible = false;
  milk14.visible = false;
  milk15.visible = false;
}
if(foodStock === 2){
  milk1.visible = true;
  milk2.visible = true;
  milk3.visible = false;
  milk4.visible = false;
  milk5.visible = false;
  milk6.visible = false;
  milk7.visible = false;
  milk8.visible = false;
  milk9.visible = false;
  milk10.visible = false;
  milk11.visible = false;
  milk12.visible = false;
  milk13.visible = false;
  milk14.visible = false;
  milk15.visible = false;
}
if(foodStock === 3){
  milk1.visible = true;
  milk2.visible = true;
  milk3.visible = true;
  milk4.visible = false;
  milk5.visible = false;
  milk6.visible = false;
  milk7.visible = false;
  milk8.visible = false;
  milk9.visible = false;
  milk10.visible = false;
  milk11.visible = false;
  milk12.visible = false;
  milk13.visible = false;
  milk14.visible = false;
  milk15.visible = false;
}
if(foodStock === 4){
  milk1.visible = true;
  milk2.visible = true;
  milk3.visible = true;
  milk4.visible = true;
  milk5.visible = false;
  milk6.visible = false;
  milk7.visible = false;
  milk8.visible = false;
  milk9.visible = false;
  milk10.visible = false;
  milk11.visible = false;
  milk12.visible = false;
  milk13.visible = false;
  milk14.visible = false;
  milk15.visible = false;
}
if(foodStock === 5){
  milk1.visible = true;
  milk2.visible = true;
  milk3.visible = true;
  milk4.visible = true;
  milk5.visible = true;
  milk6.visible = false;
  milk7.visible = false;
  milk8.visible = false;
  milk9.visible = false;
  milk10.visible = false;
  milk11.visible = false;
  milk12.visible = false;
  milk13.visible = false;
  milk14.visible = false;
  milk15.visible = false;
}
if(foodStock === 6){
  milk1.visible = true;
  milk2.visible = true;
  milk3.visible = true;
  milk4.visible = true;
  milk5.visible = true;
  milk6.visible = true;
  milk7.visible = false;
  milk8.visible = false;
  milk9.visible = false;
  milk10.visible = false;
  milk11.visible = false;
  milk12.visible = false;
  milk13.visible = false;
  milk14.visible = false;
  milk15.visible = false;
}if(foodStock === 7){
  milk1.visible = true;
  milk2.visible = true;
  milk3.visible = true;
  milk4.visible = true;
  milk5.visible = true;
  milk6.visible = true;
  milk7.visible = true;
  milk8.visible = false;
  milk9.visible = false;
  milk10.visible = false;
  milk11.visible = false;
  milk12.visible = false;
  milk13.visible = false;
  milk14.visible = false;
  milk15.visible = false;
}
if(foodStock === 8){
  milk1.visible = true;
  milk2.visible = true;
  milk3.visible = true;
  milk4.visible = true;
  milk5.visible = true;
  milk6.visible = true;
  milk7.visible = true;
  milk8.visible = true;
  milk9.visible = false;
  milk10.visible = false;
  milk11.visible = false;
  milk12.visible = false;
  milk13.visible = false;
  milk14.visible = false;
  milk15.visible = false;
}
if(foodStock === 9){
  milk1.visible = true;
  milk2.visible = true;
  milk3.visible = true;
  milk4.visible = true;
  milk5.visible = true;
  milk6.visible = true;
  milk7.visible = true;
  milk8.visible = true;
  milk9.visible = true;
  milk10.visible = false;
  milk11.visible = false;
  milk12.visible = false;
  milk13.visible = false;
  milk14.visible = false;
  milk15.visible = false;
}
if(foodStock === 10){
  milk1.visible = true;
  milk2.visible = true;
  milk3.visible = true;
  milk4.visible = true;
  milk5.visible = true;
  milk6.visible = true;
  milk7.visible = true;
  milk8.visible = true;
  milk9.visible = true;
  milk10.visible = true;
  milk11.visible = false;
  milk12.visible = false;
  milk13.visible = false;
  milk14.visible = false;
  milk15.visible = false;
}
if(foodStock === 11){
  milk1.visible = true;
  milk2.visible = true;
  milk3.visible = true;
  milk4.visible = true;
  milk5.visible = true;
  milk6.visible = true;
  milk7.visible = true;
  milk8.visible = true;
  milk9.visible = true;
  milk10.visible = true;
  milk11.visible = true;
  milk12.visible = false;
  milk13.visible = false;
  milk14.visible = false;
  milk15.visible = false;
}
if(foodStock === 12){
  milk1.visible = true;
  milk2.visible = true;
  milk3.visible = true;
  milk4.visible = true;
  milk5.visible = true;
  milk6.visible = true;
  milk7.visible = true;
  milk8.visible = true;
  milk9.visible = true;
  milk10.visible = true;
  milk11.visible = true;
  milk12.visible = true;
  milk13.visible = false;
  milk14.visible = false;
  milk15.visible = false;
}
if(foodStock === 13){
  milk1.visible =true;
  milk2.visible = true;
  milk3.visible = true;
  milk4.visible = true;
  milk5.visible = true;
  milk6.visible = true;
  milk7.visible = true;
  milk8.visible = true;
  milk9.visible = true;
  milk10.visible = true;
  milk11.visible = true;
  milk12.visible = true;
  milk13.visible = true;
  milk14.visible = false;
  milk15.visible = false;
}

if(foodStock === 14){
  milk1.visible =true;
  milk2.visible = true;
  milk3.visible = true;
  milk4.visible = true;
  milk5.visible = true;
  milk6.visible = true;
  milk7.visible = true;
  milk8.visible = true;
  milk9.visible = true;
  milk10.visible = true;
  milk11.visible = true;
  milk12.visible = true;
  milk13.visible = true;
  milk14.visible = true;
  milk15.visible = false;
}
if(foodStock >= 15){
  milk1.visible =true;
  milk2.visible = true;
  milk3.visible = true;
  milk4.visible = true;
  milk5.visible = true;
  milk6.visible = true;
  milk7.visible = true;
  milk8.visible = true;
  milk9.visible = true;
  milk10.visible = true;
  milk11.visible = true;
  milk12.visible = true;
  milk13.visible = true;
  milk14.visible = true;
  milk15.visible = true;
}
  drawSprites();


}