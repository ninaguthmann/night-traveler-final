class Button {
  constructor(offset, text){
    //this.offset = offset;
    this.buttonText = text;
    this.offset = offset;
    this.tWidth = textWidth(this.buttonText);
    this.spacing = 20;
    this.buttonWidth = this.tWidth + this.spacing;
    this.x;
    // slider.width + tWidth + spacing * 4;
  }

  build(){
    this.x = 100 + this.tWidth + (this.spacing + this.offset);
    push();
    fill(50,10,80);
    rect(this.x, this.spacing, this.buttonWidth, 32, 10);
    fill(200, 220, 180);
    textAlign(LEFT, TOP);
    text(this.buttonText, this.x + this.spacing/2, this.spacing * 1.5);
    pop();
  }
}
