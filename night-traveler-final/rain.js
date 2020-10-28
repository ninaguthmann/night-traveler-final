class Rain {
  constructor(){
    this.x = random(windowWidth);
    this.y = random(windowHeight);
    this.rectW = random(0.5, 3);
    this.rectH = random(10, 50);
    //this.x2 = random(windowWidth);
    //this.y2 = this.y1 + random (2, 10);
    this.speed = random(15, 40);
    this.b = random(50, 200);
  }

  build(){
    //noStroke();
    push();
    //translate(windowWidth/2,windowHeight/2);
    //rotate(PI/24);
    fill(255, this.b);
    rect(this.x, this.y, this.rectW, this.rectH);
    this.y+= this.speed;
    if (this.y > windowHeight){
    this.y = 0 - this.rectH;
    pop();
    }
  }
}
