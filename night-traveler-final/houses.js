class Houses {
  constructor(x, y, h, w, c, speed){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.c = c;
    this.speed = speed;
    this.a = 0;
    this.g;
  }

  build(){

    //house main body
    push();
    fill(this.c);
    rect(this.x, this.y - this.h, this.w, this.h);
    pop();

    //windows
    push();
    translate(this.x + 8, this.y - this.h + 6);
    for (this.i = 0; this.i + 20 < this.w; this.i+=20){
      for (this.j = 0; this.j + 20 < this.h; this.j+=26){
        this.a += 0.001;
        this.g = map(noise(this.a), 0, 0.5, 20, 200);
        fill(240, this.g, 180);
        rect(this.i + 2, this.j + 2, 6, 12);
      }
    }
    pop();

    this.x -= this.speed;

    if (this.x + this.w < 0){
      this.x = windowWidth;
      this.rebuild();
    }
  }

  rebuild(){
    this.w = random(50, 225);
    this.h = random(50, 225);
    //console.log('rebuild');
  }
}
