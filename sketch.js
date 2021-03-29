var words = ["DRAGON", "CYAN", "LOVE", "ANANAS", "PEACE", "BEACH", "MOUNTAIN", "PEANUTS", "FRANCE", "GIRAFFE"];
var allLetters = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"];
var keyBoard = [];
var oneRandomWord,right,wrong;
var moveLeftRight = 21;
var armsAndFeet = 35;
var movearmsAndFeettButton = true;
var moveLeftRightButton = true;
var wordsAmount = [];
var chances = 0;
var correct = [];
var gameOver = false;
var lastWord = false;
var winning = 0;
function randomWord() {
  if (words.length>0){
  for (let i = 0; i < words.length; i++) {
    wordsAmount.push(i);
  }
  oneRandomWord = random(wordsAmount);
}}

function head() {
  stroke(117, 90, 25);
  line(180, 50, 180 + moveLeftRight, 100);
  fill(232, 232, 181);
  stroke(0);
  strokeWeight(2);
  circle(180 + moveLeftRight, 100, 50);
  fill(0);
  textSize(14);
  text("x    x", 167 + moveLeftRight, 100);
  strokeWeight(5);
  stroke(117, 90, 25);
  line(170 + moveLeftRight, 124, 190 + moveLeftRight, 125);
  line(170 + moveLeftRight, 128, 190 + moveLeftRight, 129);
  line(170 + moveLeftRight, 132, 190 + moveLeftRight, 134);
}

function body() {
  strokeWeight(2);
  fill("#d71b5a");
  stroke("#d71b5a");
  rect(153 + moveLeftRight, 135, 55, 70);

}

function leftHand() {
  stroke("#000");

  strokeWeight(10);
  line(150 + moveLeftRight, 139, 150 + armsAndFeet, 190);

}

function rightHand() {
  line(211 + moveLeftRight, 139, 210 + armsAndFeet, 190);
}

function leftLeg() {
  strokeWeight(1);
  fill(64, 64, 153);
  stroke(0);
  quad(153 + moveLeftRight, 204, 155 + armsAndFeet, 260, 160 + armsAndFeet, 260, 185 + moveLeftRight, 205);
}

function rightLeg() {
  quad(180 + moveLeftRight, 205, 200 + armsAndFeet, 260, 205 + armsAndFeet, 260, 208 + moveLeftRight, 204);
}

function preload() {
  right = loadSound('eat.wav');
    wrong = loadSound('boom.wav');

}


function setup() {
    keyBordArray();

  randomWord();
}

function draw() {
  var theCanvasWidth,theCanvasHeight;
  if (windowWidth>700) {theCanvasWidth=700;
  } else {theCanvasWidth=windowWidth}
    if (windowHeight>500) {theCanvasHeight=500;
  } else {theCanvasHeight=windowHeight}

    var theCanvas =createCanvas(theCanvasWidth,theCanvasHeight);

    theCanvas.center("horizontal");
  
  background(245);

  fill(125, 201, 199);
  noStroke();
  rect(0, height/ (500/240), width, height/ (500/160));

  fill(63, 155, 152);
  stroke(255);
  strokeWeight(5);
  rect(300, 75, 390, 200);

  strokeWeight(5);
  fill(117, 90, 25);
  stroke(0);

  push();
  rotate(1);
  translate(5, -130);
  ellipse(120, 100, 20, 170)
  pop();

  ellipse(30, 190, 20, 330)
  rect(25, 330, 200, 25);
  rect(25, 25, 180, 25);

  if (moveLeftRightButton) {
    moveLeftRight+=0.5;
  } else {
    moveLeftRight-=0.5;
  }
  
    if (movearmsAndFeettButton) {
    armsAndFeet+=0.5;
  } else {
    armsAndFeet-=0.5;
  }

  if (moveLeftRight < -5) {
    moveLeftRightButton = true;
  } else if (moveLeftRight > 21) {
    moveLeftRightButton = false;
  }

  if (armsAndFeet < -5) {
    movearmsAndFeettButton = true;
  } else if (armsAndFeet > 21) {
    movearmsAndFeettButton = false;
  }


  if (chances > 0) {
    head();
  }
  if (chances > 1) {
    body();
  }
  if (chances > 2) {
    leftHand();
  }
  if (chances > 3) {
    rightHand();
  }
  if (chances > 4) {
    leftLeg();
  }
  if (chances > 5) {
    rightLeg();
  }

  strokeWeight(1);
  stroke(0);
  for (let i = 0; i < keyBoard.length; i++) {
    keyBoard[i].show();
  }

  strokeWeight(2);
    if (words[oneRandomWord] !== undefined) {

  for (let i = 0; i < words[oneRandomWord].length; i++) {
    stroke(255);
    line(360 + i * 40, 200, 385 + i * 40, 200);
    textSize(30);
    fill(255);
    for (let j = 0; j < correct.length; j++) {
      if (correct[j] == words[oneRandomWord][i]) {
        text(words[oneRandomWord][i], 360 + i * 40, 195);
      }
    }

  }}


  if (gameOver) {
    fill(0);
    textSize(100);
    text("Game Over", 100, 200);
        fill(200);
    rect(550,425,90,45);
        textSize(25);
    stroke(0);
    strokeWeight(1);

      fill(0);
    strokeWeight(1);
    text("Reset",560,455);

  }
  
  if (lastWord) {
          fill("#d71b5a");
    textSize(100);
    text("Congrats!!!!", 75, 250);

      }
      stroke(255);

      fill(0);
      textSize(25);
    strokeWeight(2);
    text("You have guessed: "+ winning + " words",50,450);
    stroke(0);



}

class Letters {
  constructor(value, x, y) {
    this.value = value;
    this.x = x;
    this.y = y;
    this.r = 20;
    this.used = true;
    this.BGcolor = 255;
  }

  show() {
    fill(this.BGcolor);
    square(this.x, this.y, this.r);
    fill(0);
    textSize(13);
    text(this.value, this.x + 5, this.y + 14);
  }

  clicked(px, py) {
    let checkIt = false;
    let d = dist(px, py, this.x + this.r / 2, this.y + this.r / 2);
    if (d < this.r / 2) {
      if (this.used) {
        for (let i = 0; i < words[oneRandomWord].length; i++) {
          if (words[oneRandomWord][i] == this.value) {
            checkIt = true;
            break;
          }
        }
        if (checkIt) {
          correct.push(this.value);
          this.BGcolor = "#d71b5a";
          right.play();
        } else {
          this.BGcolor = 150;
          wrong.play();
          chances++;
        }
        this.used = false;
      }
    }
  }
  
    keyClicked(theKey) {
    let checkIt = false;
      if (theKey==this.value) {
      if (this.used) {
        for (let i = 0; i < words[oneRandomWord].length; i++) {
          if (words[oneRandomWord][i] == this.value) {
            checkIt = true;
            break;
          }
        }
        if (checkIt) {
          correct.push(this.value);
          this.BGcolor = "#d71b5a";
          right.play();

        } else {
          this.BGcolor = 150;
                    wrong.play();

          chances++;
        }
        this.used = false;
      }
    }
  }

}

function keyBordArray() {
for (let i = 0; i < 10; i++) {
  let a = new Letters(allLetters[i], 350 + i * 30, 300);
  keyBoard.push(a);
}
for (let i = 10; i < 19; i++) {
  let a = new Letters(allLetters[i], 370 + (i - 10) * 30, 330);
  keyBoard.push(a);

}
for (let i = 19; i < 26; i++) {
  let a = new Letters(allLetters[i], 390 + (i - 19) * 30, 360);
  keyBoard.push(a);
}
}


function mousePressed() {
  if (chances < 6 && words.length>0) {
    for (let i = 0; i < keyBoard.length; i++) {
      keyBoard[i].clicked(mouseX, mouseY);
    }
  } 

pressIt();
  
      let d = dist(mouseX, mouseY, 550 + 90 / 2, 425 + 45 / 2);
    if (gameOver&&d < 30) {
words = ["DRAGON", "CYAN", "LOVE", "ANANAS", "PEACE", "BEACH", "MOUNTAIN", "PEANUTS", "FRANCE", "GIRAFFE"];
 keyBoard = [];
 movearmsAndFeettButton = true;
 moveLeftRightButton = true;
 wordsAmount = [];
 chances = 0;
 correct = [];
 gameOver = false;
 lastWord = false;
 winning = 0;
keyBordArray();
randomWord();

      
}
  
}

function keyPressed() {
    if (chances < 6 && words.length>0) {
    for (let i = 0; i < keyBoard.length; i++) {
      upperKey=key.toUpperCase();
      keyBoard[i].keyClicked(upperKey);
    }
  } 
pressIt();
}



function pressIt() {  
  if (chances == 6) {
    gameOver = true;
  }
  let win=0;
  
  if (words[oneRandomWord] !== undefined) {
  for (let i=0;i<words[oneRandomWord].length;i++) {
    if (correct.includes(words[oneRandomWord][i])) {
      win++;
    }else {break;}
  }}

        if (words[oneRandomWord]!==undefined&&win==words[oneRandomWord].length&&words.length>0) {
          winning++
      for (let i = 0; i < keyBoard.length; i++) {
        keyBoard[i].used = true;
        keyBoard[i].BGcolor="255";
      }
           if (words.length==1){      
             lastWord=true;
}
 
 
      chances = 0;
      wordsAmount = [];
      correct = [];
      words.splice(oneRandomWord, 1);
        randomWord();

      } 

}


