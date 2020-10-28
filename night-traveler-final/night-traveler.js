let boff = 0;
let inc = 0.1;
let brightness;
let mountain1, mountain2;
let house = [];
let house2 = [];
let stars = [];
let snow = [];
let rain = [];
let x, h, w, c;
let speed;
let slider;
let spacing;
let button1, button2, button3;
let xTest = 0;
let sTest = 0;
let bsound, rsound, ssound, snsound;
let soundOn, soundOff;

function preload (){
  bsound = loadSound("night-traveler-tricot.mp3");

  soundOn = loadImage("music-note.png");
  soundOff = loadImage("music-note-off.png");

  //stars sounds (crickets)
  ssound = loadSound("stars.wav");
  //snow sounds (bells)
  snsound = loadSound("snow.wav");
  //rain sounds
  rsound = loadSound("rain.mp3");
}


function setup() {
  createCanvas(windowWidth, windowHeight);

  button1 = new Button(60, 'Stars');
  button2 = new Button(120, 'Snow');
  button3 = new Button(190, 'Rain');

  for(i = 0; i < 600; i++){
    snow[i] = new Snow();
  }

  for(i = 0; i < 400; i++){
    rain[i] = new Rain();
  }

  //build a shit load of stars
  for(i = 0; i < 400; i++){
    stars[i] = new Stars();
  }

  //build mountains
  mountain1 = new Mountains(0.02, 4, 220, 0.0001, [40,10,80]);
  mountain2 = new Mountains(0.004, 2, 150, 0.005, [70,10,110]);

  //build 8 houses in different places and with different sizes
  for (i = 0; i < 8; i++){
    x = random(windowWidth);
    h = random(25, 200);
    w = random(25, 200);
    c = random(30, 60);
    house[i] = new Houses(x, windowHeight/2 + 210, h, w, [c, 20, 80], 8);
  }

  //build 4 houses in different places and with different sizes
  for(i = 0; i < 4; i++){
    x = random(windowWidth);
    h = random(50, 225);
    w = random(50, 225);
    c = random(80, 100);
    house2[i] = new Houses(x, windowHeight/2 + 250, h, w, [c, 20, 120], 10);
    }

  //slider
  spacing = 20;
  tWidth = textWidth('Speed');
  slider = createSlider(0, 20, 0, 2);
  slider.position(tWidth + spacing + 10, spacing + 5);
  }

function draw() {

  background(5,5,30);

  //activate stars
  button1.build();
  if(xTest == 1){
    StarryNight();
    push();
    noFill();
    stroke(255);
    rect(button1.x, button1.spacing, button1.buttonWidth, 32, 10);
    pop();
  }

  let addSpeed = slider.value();

  fill(255);
  textAlign(LEFT, TOP);
  text('Speed', spacing, spacing + 10);

  //moon
  push();
  noStroke();
  brightness = map(mouseX, 0, windowWidth, 120, 220);
  fill(200, brightness, 180);
  ellipse(windowWidth - 120, 80, 80);
  fill(200, brightness, 180, 40);
  scale = map(noise(boff), 0, 1, 120, 140);
  ellipse(windowWidth - 120, 80, scale);
  pop();
  image(soundOn, windowWidth - 136, 64, 30, 30);

  if (sTest == 1){
    image(soundOff, windowWidth - 136, 64, 30, 30);
    boff += inc;
  }

  mountain1.build();
  mountain2.build();

  mountain1.speed = 0.0001 + addSpeed/500;
  mountain2.speed = 0.005 + addSpeed/500;

  //floor
  fill(30,10,60);
  rect(0, windowHeight - 200, windowWidth, windowHeight - 200);

  for (i = 0; i < house.length; i++){
    house[i].build();
    house[i].speed = 6 + addSpeed/2;
  }

  for (i = 0; i < house2.length; i++){
    house2[i].build();
    house2[i].speed = 8 + addSpeed;
    //console.log(house2[i].speed);
  }

  //activate snow
  button2.build();
  if(xTest == 2){
    MakeItSnow();
    push();
    noFill();
    stroke(255);
    rect(button2.x, button2.spacing, button2.buttonWidth, 32, 10);
    pop();
  }

  //activate rain
  button3.build();
  if(xTest == 3){
    RainyNight();
    push();
    noFill();
    stroke(255);
    rect(button3.x, button3.spacing, button3.buttonWidth, 32, 10);
    pop();
  }
}

function MakeItSnow(){
  for(i = 0; i < snow.length; i++){
    snow[i].build();
  }
  //console.log('snowing');
}

function StarryNight(){
  for (i = 0; i < stars.length; i++){
    stars[i].build();
  }
  //console.log('stars');
}

function RainyNight(){
  for(i = 0; i < rain.length; i++){
    rain[i].build();
  }
}

function mousePressed(){

  // buttons click interactions
  if (xTest != 1 && mouseX > button1.x && mouseX < button1.x + button1.buttonWidth && mouseY > button1.spacing && mouseY < button1.spacing + 32){
    xTest = 1;
    ssound.loop();
    snsound.stop();
    rsound.stop();
  } else if (xTest != 2 && mouseX > button2.x && mouseX < button2.x + button2.buttonWidth && mouseY > button2.spacing && mouseY < button2.spacing + 32){
    xTest = 2;
    snsound.loop();
    ssound.stop();
    rsound.stop();
  } else if (xTest != 3 && mouseX > button3.x && mouseX < button3.x + button3.buttonWidth && mouseY > button3.spacing && mouseY < button3.spacing + 32){
    xTest = 3;
    rsound.loop();
    ssound.stop();
    snsound.stop();
  } else if (xTest == 1 && mouseX > button1.x && mouseX < button1.x + button1.buttonWidth && mouseY > button1.spacing && mouseY < button1.spacing + 32){
    xTest = 0;
    ssound.stop();
  }else if (xTest == 2 && mouseX > button2.x && mouseX < button2.x + button2.buttonWidth && mouseY > button2.spacing && mouseY < button2.spacing + 32){
    xTest = 0;
    snsound.stop();
  }else if (xTest == 3 && mouseX > button3.x && mouseX < button3.x + button3.buttonWidth && mouseY > button3.spacing && mouseY < button3.spacing + 32){
    xTest = 0;
    rsound.stop();
  }

  if (sTest != 1 && mouseX > windowWidth - 160 && mouseX < windowWidth - 80 && mouseY > 40 && mouseY < 120){
    sTest = 1;
    bsound.loop();
    //console.log('play');

  } else if (sTest == 1 && mouseX > windowWidth - 160 && mouseX < windowWidth - 80 && mouseY > 40 && mouseY < 120){
    sTest = 0;
    bsound.stop();
  }
}
