// The piece of work uses creamy white as background, red as the brushes. 
// The canvas was divided into a 10*10 grid of box
// In each box, there is 16 coordinates(4*4) where consecutive lines were drawn by joining the 16 points.
// Some of the points were being crossed and create an illusion of  red dots.
// The edges of the boxes may not be enclosed bout the points on the edges must be touched by the red lines. Therefore, the 10*10 grid is revealed by the pattern.
// This work is created with simple lines and geometry, but the hardest part is to use every points in the grid. Random function can only helps to select a point for the line to go to, but the point would still repeat.
// I recreated it because I can see that there are matrix in the work. It is like living in the society, We can see the whole picture was being arranged to pretend peace, but everybody knows, it is in chaos. People tried hard to think and act out of the boundries, reality stops them.

let px;
let py;
let box;

function setup() {
  createCanvas(600, 600);
  noLoop();
}

function draw() {
  background(230,235,230);
  for (let x1 = 0; x1 < 514; x1 = x1+57) {
    for (let y1 = 0; y1 < 514; y1 = y1+57) {
      box = createGraphics(44, 44);
      let p = 0;
      let position=[];
      let h = [1.5, 14, 28, 42.5];
      for (let b =0; b < 4; b++){
        for (let c = 0; c < 4; c++){
          position[p]=[h[b],h[c]];
          p++;
        }
      }
      shuffle(position, true);
      for (let a = 0; a < 16; a++){
        box.noFill();
        box.strokeWeight(1.5);
        box.stroke(255, 40, 0, 70);
        box.line(position[a][0], position[a][1], px, py);
        box.remove();
        px = position[a][0];
        py = position[a][1];
      }
      image(box, x1+22.5, y1+22.5, 42, 42);
      box.remove();
    }
  }
}

function mousePressed() {
  loop();
}
function mouseReleased() {
  noLoop();
}