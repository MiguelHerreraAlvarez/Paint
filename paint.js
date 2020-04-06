var weight;
var pencilColor;

function setup() {
  createCanvas(720, 600);
  background(255);
  
  weightSlider = createSlider(1,60,20);
  weightSlider.position(290,640);
  
  cleanButton = createButton('Clean');
  cleanButton.position(440,640);
  cleanButton.mousePressed(clean);
  
  eraserCheckbox = createCheckbox('Eraser',false);
  eraserCheckbox.position(325,610);
  
  colorPicker = createColorPicker('#ed225d');
  colorPicker.position(220, 640);
  pencilColor = colorPicker.value();
}

function draw() {
  weight = weightSlider.value();
  if(eraserCheckbox.checked()) pencilColor=255;
  else pencilColor = colorPicker.value()
}

function clean(){
  background(255);
}

function mouseDragged() {
    stroke(pencilColor);
    strokeWeight(weight);
    line(mouseX, mouseY, pmouseX, pmouseY);
}