let result, mode = 0, blink=0, timer = 0, timer2 = 0, centerX, centerY, shiftX, shiftY;
let male, female, gender, skinTone, shape, q, s, glasses, glassesColor=[], freckle, frecklePos = [], mole, hairStyle, hairColor=[], r, submitButton, againButton;
let question1=["Are you hungry?", "Are you a risk-taker?", "Do you enjoy long car rides?", "Are you an introvert?" ], question2=["To what extent do you think your day is bad?", "To what extent do you agree that freedom\n is important that just staying safe?", "To what extent do you agree the amount\n of traffic will affect your mood?", "To what extent do you want to leave your hometown?"], question3=[{option0:"Apple", option1:"Mango", option2:"Orange"}, {option0:"Nissan", option1:"Honda", option2:"Toyota"}, {option0:"Nike", option1:"Adidas", option2:"New Balance"}], question4=[{question:"Have you been to these places?", a:"USA", b:"Iceland", c:"Wakanda"}, {question:"Have you act kind this week?", a:"Spend time with your grandparents", b:"Let someone else pick what to watch on TV", c:"Hold the elevator for someone"}, {question:"What language(s) do you speak?", a:"Cantonese", b:"English", c:"Mandarin"}], question5=[{question:"What Would You Do With 10 Million Dollars?", option1:"Donation", option2:"buy properties", option3:"Saving", option4:"investment", option5:"others"}, {question:"Which super power do you like most?", option1:"Phasing", option2:"Time Travel", option3:"Animal Control", option4:"Invulnerability", option5:"Invisibility"}, {question:"Which gift would you send to your dad?", option1:"Yard Dice", option2:"Molecular Mixology Kit", option3:"'Safe' Paperweight", option4:"iPhone Charging Dock", option5:"Beer Aroma Booster"}];


function setup() {
  createCanvas(600, 500);
  textSize(20);
  textAlign(CENTER);
  imageMode(CENTER);
  result = createGraphics(600, 500);
  result.colorMode(HSB, 360, 100, 100, 100);
  result.noStroke();
  result.strokeJoin(ROUND);
  result.strokeCap(ROUND);
  result.rectMode(CENTER);
  gender = floor(random(0,2));
  question1.sort(function(a, b){return 0.5 - Math.random()});
  question2.sort(function(a, b){return 0.5 - Math.random()});
  q = floor(random(0,3));
  s = floor(random(0,3));
  r = floor(random(0,3));
  male = createButton('Yes');
  male.position(width/2-120, 65);
  male.mousePressed(genderMale);
  female = createButton('No');
  female.position(width/2+90, 65);
  female.mousePressed(genderFemale);
  skinTone = createSlider(1, 10, random(1,10));
  skinTone.size(400,1);
  skinTone.position((width/2)-200, 165);
  shape = createSelect();
  shape.position(width/2+120, 210);
  shape.option(question3[q].option0, 0);
  shape.option(question3[q].option1, 1);
  shape.option(question3[q].option2, 2);
  shape.value(floor(random(0, 3)));
  glasses = createCheckbox(question4[s].a, false);
  glasses.position(width/2-100, 300);
  glasses.style('color', color(255));
  freckle = createCheckbox(question4[s].b, false);
  freckle.position(width/2-100, 325);
  freckle.style('color', color(255));
  for (let i = 0; i < 15; i++) {
    frecklePos[i] = [random(-35, 35), random(-15, 15), random(-35, 35), random(-15, 15), random(0.3, 5)];
  }  
  mole = createCheckbox(question4[s].c, false);
  mole.position(width/2-100, 350);
  mole.style('color', color(255));
  hairStyle = createSelect();
  hairStyle.position(width/2+130, 405);
  hairStyle.option(question5[r].option1, 0);
  hairStyle.option(question5[r].option2, 1);
  hairStyle.option(question5[r].option3, 2);
  hairStyle.option(question5[r].option4, 3);
  hairStyle.option(question5[r].option5, 4);
  hairStyle.value(floor(random(0,5)));
  submitButton = createButton('Submit');
  submitButton.position(width/2-20, height-30);
  submitButton.mousePressed(submit);
  againButton = createButton('Try again');
  againButton.position(width/2-30, height-30);
  againButton.mousePressed(again);
  againButton.hide();
}

function draw() {
  
  centerX = map(mouseX, 0, width, (width/2)-100, (width/2)+100);
  centerY = map(mouseY, 0, height, (height/2)-100, (height/2)+100);
  shiftX = map(centerX, (width/2)-100, (width/2)+100, -25, 25);
  shiftY = map(centerY, (height/2)-100, (height/2)+100, -25, 25);

  
  background(0);
  fill(255);
  text(question1[0], width/2, 40);
  text(question2[0], width/2, 130);
  text('1', 60, 175);
  text('10', width-60, 175);
  push();
  textSize(10);
  text(skinTone.value(), map(skinTone.value(), 1, 10, width/2-190, width/2+195), 190)
  pop();
  text('Which of the following do you prefer?', width/2-80, 225);
  text(question4[s].question, width/2, 280);
  text(question5[r].question, width/2-70, 420);
  
  // text(gender, 10, 65);
  // text(skinTone.value(), 10, 160);
  // text(shape.value(), 10, 225);
  // text(glasses.checked(), 30, 315);
  // text(freckle.checked(), 30, 340);
  // text(mole.checked(), 30, 365);
  // text(hairStyle.value(), 10, 420);
  
  result.background(0, 0, 0);
  
  if (gender == 0) {
    if (shape.value() == 0) {
      if (hairStyle.value() == 0) {
        roundFace();
        facial();
        maleHairStyle(0, centerX, centerY, 0, 0);
      } else if (hairStyle.value() == 1) {
        roundFace();
        facial();
        maleHairStyle(1, centerX, centerY, 0, 0);
      } else if (hairStyle.value() == 2) {
        roundFace();
        facial();
        maleHairStyle(2, centerX, centerY, 0, 0);
      } else if (hairStyle.value() == 3) {
        roundFace();
        facial();
        maleHairStyle(3, centerX, centerY, 0, 0);
      } else if (hairStyle.value() == 4) {
        roundFace();
        facial();
        maleHairStyle(4, centerX, centerY, 0, 0);
      }
    } else if (shape.value() == 1) {
      if (hairStyle.value() == 0) {
        sqaFace();
        facial();
        maleHairStyle(0, centerX, centerY, 13, 0);
      } else if (hairStyle.value() == 1) {
        sqaFace();
        facial();
        maleHairStyle(1, centerX, centerY, 4, 0);
      } else if (hairStyle.value() == 2) {
        sqaFace();
        facial();
        maleHairStyle(2, centerX, centerY, 3, 0);
      } else if (hairStyle.value() == 3) {
        sqaFace();
        facial();
        maleHairStyle(3, centerX, centerY, 0, 0);
      } else if (hairStyle.value() == 4) {
        sqaFace();
        facial();
        maleHairStyle(4, centerX+3, centerY-4, 10, 0);
      }
    } else if (shape.value() == 2) {
      if (hairStyle.value() == 0) {
        triFace();
        facial();
        maleHairStyle(0, centerX, centerY-8, 3, 0);
      } else if (hairStyle.value() == 1) {
        triFace();
        facial();
        maleHairStyle(1, centerX, centerY-4, 1, 5);
      } else if (hairStyle.value() == 2) {
        triFace();
        facial();
        maleHairStyle(2, centerX, centerY, -2, 17);
      } else if (hairStyle.value() == 3) {
        triFace();
        facial();
        maleHairStyle(3, centerX, centerY, -8, 10);
      } else if (hairStyle.value() == 4) {
        triFace();
        facial();
        maleHairStyle(4, centerX, centerY+3, -10, 10);
      }
    }
  } else {
    if (shape.value() == 0) {
      if (hairStyle.value() == 0) {
        roundFace();
        facial();
        femaleHairStyle(0, centerX, centerY, 0, 0);
      } else if (hairStyle.value() == 1) {
        roundFace();
        facial();
        femaleHairStyle(1, centerX, centerY, 0, 0);
      } else if (hairStyle.value() == 2) {
        roundFace();
        facial();
        femaleHairStyle(2, centerX, centerY, 0, 0);
      } else if (hairStyle.value() == 3) {
        roundFace();
        facial();
        femaleHairStyle(3, centerX, centerY, 0, 0);
      } else if (hairStyle.value() == 4) {
        roundFace();
        facial();
        femaleHairStyle(4, centerX, centerY, 0, 0);
      }
    } else if (shape.value() == 1) {
      if (hairStyle.value() == 0) {
        sqaFace();
        facial();
        femaleHairStyle(0, centerX, centerY, 6, 0);
      } else if (hairStyle.value() == 1) {
        sqaFace();
        facial();
        femaleHairStyle(1, centerX-10, centerY+10, 10, 10);
      } else if (hairStyle.value() == 2) {
        sqaFace();
        facial();
        femaleHairStyle(2, centerX, centerY-10, 5, 0);
      } else if (hairStyle.value() == 3) {
        sqaFace();
        facial();
        femaleHairStyle(3, centerX+3, centerY, 8, 0);
      } else if (hairStyle.value() == 4) {
        sqaFace();
        facial();
        femaleHairStyle(4, centerX, centerY+10, 25, 0);
      }
    } else if (shape.value() == 2) {
      if (hairStyle.value() == 0) {
        triFace();
        facial();
        femaleHairStyle(0, centerX, centerY, -15, 18);
      } else if (hairStyle.value() == 1) {
        triFace();
        facial();
        femaleHairStyle(1, centerX, centerY+10, -10, 20);
      } else if (hairStyle.value() == 2) {
        triFace();
        facial();
        femaleHairStyle(2, centerX, centerY-10, -15, 0);
      } else if (hairStyle.value() == 3) {
        triFace();
        facial();
        femaleHairStyle(3, centerX, centerY-6, -7, 0);
      } else if (hairStyle.value() == 4) {
        triFace();
        facial();
        femaleHairStyle(4, centerX, centerY+15, -58, 20);
      }
    }
  }
  
  if (gender == 0) {
    if (freckle.checked() == true) {
      result.fill(hairColor[0], hairColor[1]*0.5, hairColor[2]*0.5, 70);
      result.beginShape(CLOSE);
      result.vertex(centerX+20+(shiftX*1.5), centerY+150+(shiftY*1.2));
      result.vertex(centerX+30+(shiftX*1.5), centerY+155+(shiftY*1.2));
      result.vertex(centerX+40+(shiftX*1.5), centerY+145+(shiftY*1.2));
      result.vertex(centerX+45+(shiftX*1.5), centerY+120+(shiftY*1.2));
      result.vertex(centerX+30+(shiftX*1.5), centerY+142+(shiftY*1.2));
      result.vertex(centerX+6.5+(shiftX*1.5), centerY+140.5+(shiftY*1.2));
      result.vertex(centerX+9.5+(shiftX*1.5), centerY+128.5+(shiftY*1.2));
      result.vertex(centerX-9.5+(shiftX*1.5), centerY+128.5+(shiftY*1.2));
      result.vertex(centerX-6.5+(shiftX*1.5), centerY+140.5+(shiftY*1.2));
      result.vertex(centerX-30+(shiftX*1.5), centerY+142+(shiftY*1.2));
      result.vertex(centerX-45+(shiftX*1.5), centerY+120+(shiftY*1.2));
      result.vertex(centerX-40+(shiftX*1.5), centerY+145+(shiftY*1.2));
      result.vertex(centerX-30+(shiftX*1.5), centerY+155+(shiftY*1.2));
      result.vertex(centerX-20+(shiftX*1.5), centerY+150+(shiftY*1.2));
      result.endShape();
    }
    if (mole.checked() == true) {
      result.fill(0, 0, 0, 70);
      result.ellipse(centerX-30+(shiftX*1.6), centerY+66+(shiftY*1.6), 15);
    }
    if (glasses.checked() == true) {
      result.push();
      result.fill(214, 40, 100, 20);
      result.stroke(40);
      result.strokeWeight(5);
      result.line(centerX-10+(shiftX*2.5), centerY-35+(shiftY*2), centerX+10+(shiftX*2.5), centerY-35+(shiftY*2));
      result.rect(centerX-80+(shiftX*2.5), centerY-40+(shiftY*2), 100, 50);
      result.rect(centerX+80+(shiftX*2.5), centerY-40+(shiftY*2), 100, 50);
      result.pop();
    }
  } else {
    if (freckle.checked() == true) {
      result.push();
      result.stroke(30, map(skinTone.value(), 1, 10, 20, 100)-10, (116-map(skinTone.value(), 1, 10, 20, 100))-10);
      for (let i = 0; i < 15; i++) {
        result.strokeWeight(frecklePos[i][4]);
        result.point(centerX-80+(shiftX*1.6)+frecklePos[i][0], centerY+30+(shiftY*1.6)+frecklePos[i][1]);
        result.point(centerX+80+(shiftX*1.6)+frecklePos[i][2], centerY+30+(shiftY*1.6)+frecklePos[i][3]);
      }
      result.pop();
    }
    if (mole.checked() == true) {
      result.fill(0, 0, 0, 70);
      result.ellipse(centerX+120+shiftX, centerY+shiftY, 6);
    }
    if (glasses.checked() == true) {
      result.push();
      result.fill(214, 40, 100, 20);
      result.stroke(glassesColor[0], glassesColor[1], glassesColor[2]);
      result.strokeWeight(6);
      result.line(centerX-10+(shiftX*2.5), centerY-35+(shiftY*2), centerX+10+(shiftX*2.5), centerY-35+(shiftY*2));
      result.circle(centerX-90+(shiftX*2.5), centerY-35+(shiftY*2), 110);
      result.circle(centerX+90+(shiftX*2.5), centerY-35+(shiftY*2), 110);
      result.pop();
    }
  }
  if (mouseIsPressed == true && mouseButton === LEFT) {
    result.fill(352, 44, 74);
  result.beginShape(CLOSE);
  result.curveVertex(centerX-20+(shiftX*2.2), centerY+90+(shiftY*1.4));
  result.curveVertex(centerX-20+(shiftX*2.2), centerY+90+(shiftY*1.4));
  result.curveVertex(centerX-25+(shiftX*2.2), centerY+150+(shiftY*1.4));
  result.curveVertex(centerX+25+(shiftX*2.2), centerY+150+(shiftY*1.4));
  result.curveVertex(centerX+20+(shiftX*2), centerY+90+(shiftY*1.4));
  result.curveVertex(centerX+20+(shiftX*2), centerY+90+(shiftY*1.4));
  result.endShape();
  } else {
    result.fill(352, 44, 74);
    result.beginShape(CLOSE);
  result.curveVertex(centerX-20+(shiftX*2.2), centerY+90+(shiftY*1.4));
  result.curveVertex(centerX-20+(shiftX*2.2), centerY+90+(shiftY*1.4));
  result.curveVertex(centerX-25+(shiftX*2.2), centerY+100+(shiftY*1.4));
  result.curveVertex(centerX+25+(shiftX*2.2), centerY+100+(shiftY*1.4));
  result.curveVertex(centerX+20+(shiftX*2), centerY+90+(shiftY*1.4));
  result.curveVertex(centerX+20+(shiftX*2), centerY+90+(shiftY*1.4));
  result.endShape();
  }
  
  if (mode > 0){
    image(result, width/2, height/2);
  } else if (mode == 0){
    result.clear();
  }

}


function genderMale(){
  male.style('background-color', color(150));
  female.style('background-color', color(255));
  gender = 0;
}

function genderFemale(){
  male.style('background-color', color(255));
  female.style('background-color', color(150));
  gender = 1;
}

function submit(){
  noCursor();
  mode = 1;
  male.hide();
  female.hide();
  skinTone.hide();
  shape.hide();
  glasses.hide();
  glassesColor.splice(0, glassesColor.length);
  glassesColor = [random(360), random(100), random(100)];
  freckle.hide();
  mole.hide();
  hairStyle.hide();
  hairColor.splice(0, hairColor.length);
  hairColor = [random(360), random(13, 100), random(4, 87)]
  submitButton.hide();
  againButton.show();
}

function again(){
  clear();
  cursor(ARROW);
  mode = 0;
  gender = floor(random(0,2));
  male.style('background-color', color(255));
  female.style('background-color', color(255));
  question1.sort(function(a, b){return 0.5 - Math.random()});
  question2.sort(function(a, b){return 0.5 - Math.random()});
  q = floor(random(0,3));
  shape.remove();
  shape = createSelect();
  shape.position(width/2+120, 210);
  shape.option(question3[q].option0, 0);
  shape.option(question3[q].option1, 1);
  shape.option(question3[q].option2, 2);
  shape.value(floor(random(0, 3)));
  s = floor(random(0,3));
  glasses = createCheckbox(question4[s].a, false);
  glasses.position(width/2-100, 300);
  glasses.style('color', color(255));
  freckle = createCheckbox(question4[s].b, false);
  freckle.position(width/2-100, 325);
  freckle.style('color', color(255));
  mole = createCheckbox(question4[s].c, false);
  mole.position(width/2-100, 350);
  mole.style('color', color(255));
  r = floor(random(0,3));
  hairStyle.remove();
  hairStyle = createSelect();
  hairStyle.position(width/2+130, 405);
  hairStyle.option(question5[r].option1, 0);
  hairStyle.option(question5[r].option2, 1);
  hairStyle.option(question5[r].option3, 2);
  hairStyle.option(question5[r].option4, 3);
  hairStyle.option(question5[r].option5, 4);
  hairStyle.value(floor(random(0,5)));
  againButton.hide();
  male.show();
  female.show();
  skinTone.show();
  skinTone.value(random(1, 10));
  shape.show();
  hairStyle.show();
  submitButton.show();
}

function facial() {
  result.fill(30, map(skinTone.value(), 1, 10, 20, 100), (116-map(skinTone.value(), 1, 10, 20, 100))-10);
  result.triangle(centerX-30+(shiftX*1.6), centerY+60+(shiftY*1.6), centerX+(shiftX*1.6), centerY-40+(shiftY*1.6), centerX+30+(shiftX*1.6), centerY+60+(shiftY*1.6));
  result.push();
  result.stroke(30, map(skinTone.value(), 1, 10, 20, 100)-10, (116-map(skinTone.value(), 1, 10, 20, 100))+10);
  result.strokeWeight(7);
  result.bezier(centerX-5+(shiftX*1.6), centerY+25+(shiftY*1.8), centerX-5+(shiftX*1.6), centerY+25+(shiftY*1.8), centerX-25+(shiftX*2.1), centerY+70+(shiftY*1.8), centerX+15+(shiftX*1.6), centerY+60+(shiftY*1.8));
  result.pop();
  result.fill(352, 36, 99);
  result.arc(centerX+(shiftX*1.5), centerY+80+(shiftY*1.2), 150, 80, 0, PI, PIE);
  
  if ( millis()-timer > random(300, 150000)) {
    if (blink<1){
      blink++;
      timer2 = millis();
    } else {
      blink = 0;
    }
    timer = millis();
  }
  switch (blink) {
  case 0: eyeBlink(0);
        break;
  case 1:  eyeBlink(1); if (millis() - timer2 > 200){eyeBlink(0);}
      break;
  default:
    eyeBlink(0);
}
}

function eyeBlink(q) {
    if (q == 1) {
    result.push();
    result.stroke(30, map(skinTone.value(), 1, 10, 20, 100), (116-map(skinTone.value(), 1, 10, 20, 100))-10);
    result.strokeWeight(3);
    result.line(centerX-115+shiftX, centerY-40+shiftY, centerX-45+shiftX, centerY-40+shiftY);
    result.line(centerX+115+shiftX, centerY-40+shiftY, centerX+45+shiftX, centerY-40+shiftY);
    result.pop();
  } else {
    result.fill(255);
    result.ellipse(centerX-80+shiftX, centerY-40+shiftY, 80);
    result.ellipse(centerX+80+shiftX, centerY-40+shiftY, 80);
    result.fill(0);
    result.ellipse(centerX-80+(shiftX*1.8), centerY-40+(shiftY*1.8), 40);
    result.ellipse(centerX+80+(shiftX*1.8), centerY-40+(shiftY*1.8), 40);
    result.fill(255);
    result.ellipse(centerX-75+(shiftX*2), centerY-48+(shiftY*2), 15, 5);
    result.ellipse(centerX+85+(shiftX*2), centerY-48+(shiftY*2), 15, 5);
    result.ellipse(centerX-70+(shiftX*2), centerY-40+(shiftY*2), 5);
    result.ellipse(centerX+90+(shiftX*2), centerY-40+(shiftY*2), 5);
  }
}

function roundFace(){
  result.fill(30, map(skinTone.value(), 1, 10, 20, 100), (116-map(skinTone.value(), 1, 10, 20, 100)));
  result.circle(centerX, centerY, 350);
  result.ellipse(centerX-180+(shiftX*-0.3), centerY-20+(shiftY*0.4), 50, 90);
  result.ellipse(centerX+180+(shiftX*-0.3), centerY-20+(shiftY*0.4), 50, 90);
}

function sqaFace(){
  result.fill(30, map(skinTone.value(), 1, 10, 20, 100), (116-map(skinTone.value(), 1, 10, 20, 100)));
        result.beginShape(CLOSE);
        result.curveVertex(centerX, centerY-175);
        result.curveVertex(centerX+155, centerY-100);
        result.curveVertex(centerX+165, centerY+115);
        result.curveVertex(centerX+40, centerY+170);
        result.curveVertex(centerX-40, centerY+170);
        result.curveVertex(centerX-165, centerY+115);
        result.curveVertex(centerX-155, centerY-100);
        result.curveVertex(centerX, centerY-175);
        result.curveVertex(centerX+155, centerY-100);
        result.curveVertex(centerX+165, centerY+115);
        result.endShape();
  result.ellipse(centerX-185+(shiftX*-0.3), centerY-20+(shiftY*0.4), 50, 90);
  result.ellipse(centerX+185+(shiftX*-0.3), centerY-20+(shiftY*0.4), 50, 90);
}

function triFace(){
  result.fill(30, map(skinTone.value(), 1, 10, 20, 100), (116-map(skinTone.value(), 1, 10, 20, 100)));
        result.beginShape(CLOSE);
        result.curveVertex(centerX, centerY-175);
        result.curveVertex(centerX+155, centerY-100);
        result.curveVertex(centerX+150, centerY+60);
        result.curveVertex(centerX+90, centerY+140);
        result.curveVertex(centerX+20, centerY+190);
        result.curveVertex(centerX-20, centerY+190);
        result.curveVertex(centerX-90, centerY+140);
        result.curveVertex(centerX-150, centerY+60);
        result.curveVertex(centerX-155, centerY-100);
        result.curveVertex(centerX, centerY-175);
        result.curveVertex(centerX+155, centerY-100);
        result.curveVertex(centerX+150, centerY+60);
        result.endShape();
  result.ellipse(centerX-170+(shiftX*-0.3), centerY-20+(shiftY*0.4), 50, 90);
  result.ellipse(centerX+170+(shiftX*-0.3), centerY-20+(shiftY*0.4), 50, 90);
}

function maleHairStyle(style, x, y, w, h){
  if (style == 0){
    result.fill(30, map(skinTone.value(), 1, 10, 20, 100)-10, (116-map(skinTone.value(), 1, 10, 20, 100)));
    result.beginShape(CLOSE);
    result.vertex(x-131.5-w, y-115.5-h);
    result.bezierVertex(x-80-w, y-197.5-h, x+80+w, y-197.5-h, x+131.5+w, y-115.5-h);
    result.vertex(x-131.5-w, y-115.5-h)
    result.endShape();
  } else if (style == 1) {
    result.fill(hairColor[0], hairColor[1], hairColor[2]);
    result.beginShape(CLOSE);
    result.vertex(x-165-w, y-60-h);
    result.bezierVertex(x-165-w, y-60-h, x-195-w, y-215-h, x-102.5-w, y-205-h);
    result.bezierVertex(x-10-w, y-220-h, x+207.5+w, y-207.5-h, x+192.5+w, y-135-h);
    result.bezierVertex(x+175+w, y-60-h, x+125+w, y-127.5-h, x+68.5+w, y-116.5-h);
    result.bezierVertex(x+7.5+w, y-105-h, x-60-h, y-230-h, x-165-w, y-60-h);
    result.vertex(x+150+w, y-90-h);
    result.endShape();
  } else if (style == 2) {
    result.fill(hairColor[0], hairColor[1], hairColor[2]);
    result.beginShape(CLOSE);
    result.vertex(x-170-w, y-40-h);
    result.bezierVertex(x-170-w, y-40-h, x-180-w, y-130-h, x-153.5-w, y-175.5-h);
    result.bezierVertex(x-160-w, y-120-h, x-150-w, y-117.5-h, x-150-w, y-117.5-h);
    result.bezierVertex(x-150-w, y-117.5-h, x-162.5-w, y-190-h, x-87.5-w, y-218.5-h);
    result.bezierVertex(x-125-w, y-167.5-h, x-22.5-w, y-225-h, x+58.5+w, y-226.5-h);
    result.bezierVertex(x-20-w, y-197.5-h, x+42.5+w, y-190-h, x+139.5+w, y-205-h);
    result.bezierVertex(x+55+w, y-187.5-h, x+135+w, y-170-h, x+160+w, y-187.5-h);
    result.bezierVertex(x+127.5+w, y-150-h, x+120+w, y-132.5-h, x+165.5+w, y-126.5-h);
    result.bezierVertex(x+157.5+w, y-100-h, x+168+w, y-50-h, x+168+w, y-50-h);
    result.bezierVertex(x+w, y-287.5-h, x-170-w, y-40-h, x-170-w, y-40-h);
    result.endShape();
  } else if (style == 3) {
    result.fill(hairColor[0], hairColor[1]-20, hairColor[2]);
    result.beginShape(CLOSE);
    result.vertex(x-173.5-w, y-16.5-h);
    result.bezierVertex(x-173.5-w, y-16.5-h, x-185-w, y-92.5-h, x-140.5-w, y-143.5-h);
    result.vertex(x-105-w, y-155-h);
    result.bezierVertex(x-105-w, y-155-h, x-117.5-w, y-55-h, x-140.5-w, y-81.5-h);
    result.bezierVertex(x-165-w, y-82.5-h, x-173.5-w, y-16.5-h, x-173.5-w, y-16.5-h);
    result.endShape();
    result.beginShape(CLOSE);
    result.vertex(x+173.5+w, y-16.5-h);
    result.bezierVertex(x+173.5+w, y-16.5-h, x+185+w, y-92.5-h, x+140.5+w, y-143.5-h);
    result.vertex(x+105+w, y-155-h);
    result.bezierVertex(x+105+w, y-155-h, x+117.5+w, y-55-h, x+140.5+w, y-81.5-h);
    result.bezierVertex(x+165+w, y-82.5-h, x+173.5+w, y-16.5-h, x+173.5+w, y-16.5-h);
    result.endShape();
    result.fill(hairColor[0], hairColor[1], hairColor[2]);
    result.beginShape(CLOSE);
    result.vertex(x-140-w, y-145-h);
    result.bezierVertex(x-80-w, y-240-h, x+112.5+w, y-260-h, x+140+w, y-145-h);
    result.bezierVertex(x+105+w, y-97.5-h, x+85+w, y-127.5-h, x-22.5-w, y-127.5-h);
    result.bezierVertex(x-130-w, y-130-h, x-140-w, y-145-h, x-140-w, y-145-h);
    result.endShape();
    result.fill(hairColor[0], hairColor[1]-20, hairColor[2]+30);
    result.beginShape(CLOSE);
    result.vertex(x-57.5+50-w, y-56.5-h);
    result.bezierVertex(x-97.5+50-w, y-120-h, x-35+50-w, y-167.5-h, x+48.5+50+w, y-147.5-h);
    result.bezierVertex(x-65+50-w, y-157.5, x-57.5+50-w, y-56.5-h, x-57.5+50-w, y-56.5-h);
    result.endShape();
  } else if (style == 4) {
    result.fill(hairColor[0], hairColor[1], hairColor[2]);
    result.beginShape(CLOSE);
    result.vertex(x+103.5+w, y-189.5-h);
    result.bezierVertex(x+140+w, y-207.5-h, x+230+w, y-167.5-h, x+215.5+w, y-124.5-h);
    result.bezierVertex(x+200+w, y-75-h, x+195+w, y-25-h, x+232.5+w, y+35+h);
    result.bezierVertex(x+260+w, y+65+h, x+150+w, y+125+h, x+155.5+w, y+81.5+h);
    result.bezierVertex(x+187.5+w, y-155-h, x+47.5+w, y-200-h, x-95.5-w, y-138.5-h);
    result.bezierVertex(x-185-w, y-102.5-h, x-167.5-w, y+27.5+h, x-153.5-w, y+59.5+h);
    result.bezierVertex(x-142.5-w, y+92.5+h, x-125-w, y+250+h, x-230.5-w, y+149.5+h);
    result.bezierVertex(x-252.5-w, y+140+h, x-202.5-w, y+27.5+h, x-202.5-w, y-18.5-h);
    result.bezierVertex(x-207.5-w, y-85-h, x-227.5-w, y-150-h, x-127.5-w, y-197.5-h);
    result.bezierVertex(x-35-w, y-242.5-h, x+90+w, y-242.5-h, x+103.5+w, y-189.5-h);
    result.endShape();
  }
}

function femaleHairStyle(style, x, y, w, h){
  if (style == 0) {
    result.fill(hairColor[0], hairColor[1], hairColor[2]);
    result.beginShape(CLOSE);
    result.vertex(x-171-w, y+37+h);
    result.bezierVertex(x-187.5-w, y, x-190-w, y-37.5-h, x-188.5-w, y-65.5-h);
    result.bezierVertex(x-190-w, y-105-h, x-122.5-w, y-210-h, x-98.5-w, y-201.5-h);
    result.bezierVertex(x-57.5-w, y-197.5-h, x+35+w, y-232.5-h, x+59.5+w, y-208.5-h);
    result.bezierVertex(x+92.5+w, y-215-h, x+165+w, y-137.5-h, x+173.5+w, y-113.5-h);
    result.bezierVertex(x+182.5+w, y-92.5-h, x+185+w, y-47.5-h, x+173+w, y+26+h);
    result.bezierVertex(x+175+w, y+10+h, x+170+w, y, x+161.5+w, y-41.5-h);
    result.bezierVertex(x+152.5+w, y-82.5-h, x+97.5+w, y-100-h, x+78.5+w, y-128.5-h);
    result.bezierVertex(x+37.5+w, y-115-h, x-35-w, y-145-h, x-62.5-w, y-143.5-h);
    result.bezierVertex(x-90-w, y-145-h, x-102.5-w, y-117.5-h, x-111.5-w, y-92.5-h);
    result.bezierVertex(x-122.5-w, y-70-h, x-160-w, y-57.5-h, x-166.5-w, y-41.5-h);
    result.bezierVertex(x-175-w, y-25-h, x-171-w, y+37+h, x-171-w, y+37+h);
    result.endShape();
  } else if (style == 1) {
    result.fill(hairColor[0], hairColor[1], hairColor[2]);
    result.beginShape(CLOSE);
    result.vertex(x+115.5+w, y+174.5+h);
    result.bezierVertex(x+115.5+w, y+174.5+h, x+235+w, y-65-h, x+87.5+w, y-136.5-h);
    result.bezierVertex(x+20+w, y-170-h, x-105-w, y-105-h, x-92.5-w, y-157.5-h);
    result.bezierVertex(x-82.5-w, y-210-h, x+62.5+w, y-245-h, x+137.5+w, y-162.5-h);
    result.bezierVertex(x+212.5+w, y-80-h, x+250+w, y+55+h, x+185.5+w, y+120.5+h);
    result.bezierVertex(x+200+w, y+52.5+h, x+162.5+w, y+135+h, x+115.5+w, y+174.5+h);
    result.endShape();
    result.fill(hairColor[0], hairColor[1]-10, hairColor[2]+10);
    result.beginShape(CLOSE);
    result.vertex(x+135.5+w, y+79.5+h);
    result.bezierVertex(x+135.5+w, y+79.5+h, x+200+w, y-150-h, x, y-147-h);
    result.bezierVertex(x, y-202.5-h, x+240+w, y-167.5-h, x+135.5+w, y+79.5+h);
    result.endShape();
    result.beginShape(CLOSE);
    result.vertex(x-61.5-w, y-141.5-h);
    result.bezierVertex(x-85-w, y-195-h, x+80+w, y-220-h, x+15.5+w, y-41.5-h);
    result.bezierVertex(x+37.5+w, y-200-h, x-61.5-w, y-141.5-h, x-61.5-w, y-141.5-h);
    result.endShape();
  } else if (style == 2) {
    result.fill(hairColor[0], hairColor[1], hairColor[2]);
    result.beginShape(CLOSE);
    result.vertex(x-159.5-w, y+35.5+h);
    result.vertex(x-172.5-w, y+48.5+h);
    result.bezierVertex(x-172.5-w, y+48.5+h, x-177.5-w, y, x-190.5-w, y-23.5-h);
    result.bezierVertex(x-205-w, y-45-h, x-250-w, y-130-h, x-98.5-w, y-168.5-h);
    result.bezierVertex(x-95-w, y-200-h, x+5+w, y-287.5-h, x+124.5+w, y-210.5-h);
    result.bezierVertex(x+242.5+w, y-110-h, x+197.5+w, y-75-h, x+247.5+w, y-32.5-h);
    result.bezierVertex(x+247.5+w, y-32.5-h, x+215+w, y-30-h, x+204.5+w, y-51.5-h);
    result.bezierVertex(x+220+w, y, x+235+w, y+32.5+h, x+252.5+w, y+48.5+h);
    result.bezierVertex(x+195+w, y+22.5+h, x+193.5+w, y+11.5+h, x+193.5+w, y+11.5+h);
    result.bezierVertex(x+193.5+w, y+11.5+h, x+182.5+w, y+65+h, x+141.5+w, y+75.5+h);
    result.bezierVertex(x+162.5+w, y+20+h, x+160+w, y-75-h, x+126.5+w, y-102.5-h);
    result.bezierVertex(x+47.5+w, y-165-h, x-97.5-w, y-160-h, x-81.5-w, y-113.5-h);
    result.bezierVertex(x-115-w, y-130-h, x-135-w, y-112.5-h, x-123.5-w, y-87.5-h);
    result.bezierVertex(x-123.5-w, y-87.5-h, x-150-w, y-90-h, x-154.5-w, y-76.5-h);
    result.bezierVertex(x-170-w, y-32.5-h, x-159.5-w, y+35.5+h, x-159.5-w, y+35.5+h);
    result.endShape();
  } else if (style == 3) {
    result.fill(hairColor[0], hairColor[1], hairColor[2]);
    result.beginShape(CLOSE);
    result.vertex(x-34.4-w, y-134.5-h);
    result.bezierVertex(x-34.4-w, y-134.5-h, x-80-w, y-142.5-h, x-100-w, y-135-h);
    result.bezierVertex(x-145-w, y-115-h, x-140-w, y-90-h, x-164.5-w, y-57.5-h);
    result.bezierVertex(x-162.5-w, y-15-h, x-175-w, y+25+h, x-150-w, y+63.5+h);
    result.bezierVertex(x-125-w, y+105+h, x-100-w, y+165+h, x-140-w, y+163.5+h);
    result.bezierVertex(x-195-w, y+87.5+h, x-200-w, y+150+h, x-200-w, y+150+h);
    result.bezierVertex(x-200-w, y+150+h, x-267.5-w, y+120+h, x-247.5-w, y+102.5+h);
    result.bezierVertex(x-230-w, y+85+h, x-242.5-w, y+24+h, x-280-w, y+86+h);
    result.bezierVertex(x-295-w, y+20+h, x-222.5-w, y+7.5+h, x-283.5-w, y+4.5+h);
    result.bezierVertex(x-260-w, y, x-257.5-w, y-25-h, x-290-w, y-50-h);
    result.bezierVertex(x-210-w, y-22.5-h, x-235-w, y-82.5-h, x-276.5-w, y-76.5-h);
    result.bezierVertex(x-250-w, y-82.5-h, x-250-w, y-130-h, x-195-w, y-147-h);
    result.bezierVertex(x-140-w, y-165-h, x-142.5-w, y-210-h, x-105.5-w, y-213-h);
    result.bezierVertex(x-60-w, y-270-h, x, y-230-h, x+48.5+w, y-212-h);
    result.bezierVertex(x+110+w, y-235-h, x+105+w, y-187.5-h, x+160+w, y-177-h);
    result.bezierVertex(x+295+w, y-150-h, x+264.5+w, y-28-h, x+264.5+w, y-28-h);
    result.bezierVertex(x+264.5+w, y-28-h, x+300+w, y, x+283+w, y+25+h);
    result.bezierVertex(x+262.5+w, y+47.5+h, x+285+w, y+140+h, x+246+w, y+133+h);
    result.bezierVertex(x+205+w, y+132.5+h, x+187.5+w, y+160+h, x+234+w, y+161+h);
    result.bezierVertex(x+222.5+w, y+182.5+h, x+140+w, y+202.5+h, x+105.5+w, y+182+h);
    result.bezierVertex(x+70+w, y+162.5, x+127.5+w, y+55+h, x+152+w, y+23.5+h);
    result.bezierVertex(x+175+w, y-7.5-h, x+148+w, y-90.5-h, x+148+w, y-90.5-h);
    result.bezierVertex(x+148+w, y-90.5-h, x+122.5+w, y-82.5-h, x+92+w, y-131.5-h);
    result.bezierVertex(x+45+w, y-202.5-h, x-34.4-w, y-134.5-h, x-34.4-w, y-134.5-h);
    result.endShape();
  } else if (style == 4) {
    result.fill(hairColor[0], hairColor[1], hairColor[2]);
    result.beginShape(CLOSE);
    result.vertex(x+123, y-102.5-h);
    result.bezierVertex(x+123, y-102.5-h, x+205, y+25+h, x+118+w, y+130+h);
    result.bezierVertex(x+253.75+w, y+130+h, x+227.5+w, y+112.5+h, x+228.5+w, y+66.5+h);
    result.bezierVertex(x+230+w, y+20+h, x+215, y-210-h, x, y-210-h);
    result.bezierVertex(x-215, y-210-h, x-230-w, y+20+h, x-228.5-w, y+66.5+h);
    result.bezierVertex(x-227.5-w, y+112.5+h, x-253.75-w, y+130+h, x-118-w, y+130+h);
    result.bezierVertex(x-205, y+25+h, x-123, y-102.5-h, x-123, y-102.5-h);
    result.vertex(x+34.5, y-102.5-h);
    result.bezierVertex(x+34.5, y-102.5-h, x+42.5, y-120-h, x+29, y-169-h);
    result.bezierVertex(x+55, y-117.5-h, x+45, y-102-h, x+45, y-102-h);
    result.vertex(x+123, y-102.5-h);
    result.endShape();
  }
}