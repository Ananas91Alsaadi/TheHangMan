var words = ["DRAGON", "CYAN", "LOVE", "ANANAS", "PEACE", "BEACH", "MOUNTAIN", "PEANUTS", "FRANCE", "GIRAFFE"];
var allLetters = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"];
var keyBoard = [];
var keyBoardUsed = [];
var correctWords = [];
var oneRandomWord, right, wrong;
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
var theCanvasWidth, mobileCanvas;
var onOff =true;

function randomWord() {
  if (words.length > 0) {
    for (let i = 0; i < words.length; i++) {
      wordsAmount.push(i);
    }
    oneRandomWord = random(wordsAmount);
  }
}

function head() {
  stroke(117, 90, 25);
  line((180 + mobileCanvas / 2) * width / 700, 50 * width / 700, (180 + mobileCanvas / 2) * width / 700 + moveLeftRight, 100 * width / 700);
  fill(232, 232, 181);
  stroke(0);
  strokeWeight(2 * width / 700);
  circle((180 + mobileCanvas / 2) * width / 700 + moveLeftRight, 100 * width / 700, 50 * width / 700);
  fill(0);
  textSize(14 * width / 700);
  text("x    x", (167 + mobileCanvas / 2) * width / 700 + moveLeftRight, 100 * width / 700);
  strokeWeight(5 * width / 700);
  stroke(117, 90, 25);
  line((170 + mobileCanvas / 2) * width / 700 + moveLeftRight, 124 * width / 700, (190 + mobileCanvas / 2) * width / 700 + moveLeftRight, 125 * width / 700);
  line((170 + mobileCanvas / 2) * width / 700 + moveLeftRight, 128 * width / 700, (190 + mobileCanvas / 2) * width / 700 + moveLeftRight, 129 * width / 700);
  line((170 + mobileCanvas / 2) * width / 700 + moveLeftRight, 132 * width / 700, (190 + mobileCanvas / 2) * width / 700 + moveLeftRight, 134 * width / 700);
}

function body() {
  strokeWeight(2 * width / 700);
  fill("#d71b5a");
  stroke("#d71b5a");
  rect((153 + mobileCanvas / 2) * width / 700 + moveLeftRight, 135 * width / 700, 55 * width / 700, 70 * width / 700);

}

function leftArm() {
  stroke("#000");

  strokeWeight(10 * width / 700);
  line((150 + mobileCanvas / 2) * width / 700 + moveLeftRight, 139 * width / 700, (150 + mobileCanvas / 2) * width / 700 + armsAndFeet, 190 * width / 700);

}

function rightArm() {
  line((211 + mobileCanvas / 2) * width / 700 + moveLeftRight, 139 * width / 700, (210 + mobileCanvas / 2) * width / 700 + armsAndFeet, 190 * width / 700);
}

function leftLeg() {
  strokeWeight(1 * width / 700);
  fill(64, 64, 153);
  stroke(0);
  quad((153 + mobileCanvas / 2) * width / 700 + moveLeftRight, 204 * width / 700, (155 + mobileCanvas / 2) * width / 700 + armsAndFeet, 260 * width / 700, (160 + mobileCanvas / 2) * width / 700 + armsAndFeet, 260 * width / 700, (185 + mobileCanvas / 2) * width / 700 + moveLeftRight, 205 * width / 700);
}

function rightLeg() {
  fill(64, 64, 153);
  quad((180 + mobileCanvas / 2) * width / 700 + moveLeftRight, 205 * width / 700, (200 + mobileCanvas / 2) * width / 700 + armsAndFeet, 260 * width / 700, (205 + mobileCanvas / 2) * width / 700 + armsAndFeet, 260 * width / 700, (208 + mobileCanvas / 2) * width / 700 + moveLeftRight, 204 * width / 700);
}

function leftHand() {
  fill(232, 232, 181);
  circle((150 + mobileCanvas / 2) * width / 700 + armsAndFeet, 190 * width / 700, 15 * width / 700);
}

function rightHand() {
  circle((210 + mobileCanvas / 2) * width / 700 + armsAndFeet, 190 * width / 700, 15 * width / 700);
}

function leftFoot() {
  circle((155 + mobileCanvas / 2) * width / 700 + armsAndFeet, 260 * width / 700, 18 * width / 700);
}

function rightFoot() {
  circle((205 + mobileCanvas / 2) * width / 700 + armsAndFeet, 260 * width / 700, 18 * width / 700);
}

function preload() {
  right = loadSound('eat.wav');
  wrong = loadSound('boom.wav');
}


function setup() {

  randomWord();
}

function windowResized() {
    if (windowWidth > 700) {
    theCanvasWidth = 700;
  } else {
    theCanvasWidth = windowWidth;
  }
  if (windowWidth < 420) {
    mobileCanvas = 300;
  } else {
    mobileCanvas = 0;
  }

  resizeCanvas(theCanvasWidth, 500 * width / 700 + mobileCanvas * 1.7 * width / 700);
}


function draw() {

  if (windowWidth > 700) {
    theCanvasWidth = 700;
  } else {
    theCanvasWidth = windowWidth;
  }
  if (windowWidth < 420) {
    mobileCanvas = 300;
  } else {
    mobileCanvas = 0;
  }


  var theCanvas = createCanvas(theCanvasWidth, 500 * width / 700 + mobileCanvas * 1.7 * width / 700);
  theCanvas.center("horizontal");
      
  keyBordArray();

  background(245);

  fill(125, 201, 199);
  noStroke();
  rect(0, 240 * width / 700, width, (160 + mobileCanvas) * width / 700);

  fill(63, 155, 152);
  stroke(255);
  strokeWeight(5 * width / 700);
  rect((300 - mobileCanvas / 1.1) * width / 700, (75 + mobileCanvas * 1.7) * width / 700, (390 + mobileCanvas / 1.2) * width / 700, 200 * width / 700);

  strokeWeight(5 * width / 700);
  fill(117, 90, 25);
  stroke(0);

  push();
  rotate(1);
  translate((5 + mobileCanvas / 3.4) * width / 700, (-mobileCanvas / 2.4 - 130) * width / 700);
  ellipse(120 * width / 700, 100 * width / 700, 20 * width / 700, 170 * width / 700)
  pop();

  ellipse((30 + mobileCanvas / 2) * width / 700, 190 * width / 700, 20 * width / 700, 330 * width / 700);
  rect((25 + mobileCanvas / 2) * width / 700, 330 * width / 700, 200 * width / 700, 25 * width / 700);
  rect((25 + mobileCanvas / 2) * width / 700, 25 * width / 700, 180 * width / 700, 25 * width / 700);

  if (moveLeftRightButton) {
    moveLeftRight += 0.5;
  } else {
    moveLeftRight -= 0.5;
  }

  if (movearmsAndFeettButton) {
    armsAndFeet += 0.5;
  } else {
    armsAndFeet -= 0.5;
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
    leftArm();
  }
  if (chances > 3) {
    rightArm();
  }
  if (chances > 4) {
    leftLeg();
  }
  if (chances > 5) {
    rightLeg();
  }
  if (chances > 6) {
    leftHand();
  }
  if (chances > 7) {
    rightHand();
  }
  if (chances > 8) {
    leftFoot();
  }
  if (chances > 9) {
    rightFoot();
  }

  strokeWeight(1 * width / 700);
  stroke(0);

  for (let i = 0; i < keyBoard.length; i++) {
    keyBoard[i].show();

  }

  strokeWeight(2 * width / 700);
  if (words[oneRandomWord] !== undefined) {

    for (let i = 0; i < words[oneRandomWord].length; i++) {
      stroke(255);
      line((360 - mobileCanvas) * width / 700 + i * (40 + mobileCanvas / 10) * width / 700, (200 + mobileCanvas * 1.7) * width / 700, (385 - mobileCanvas * 0.9) * width / 700 + i * (40 + mobileCanvas / 10) * width / 700, (200 + mobileCanvas * 1.7) * width / 700);
      textSize((30 + mobileCanvas / 11) * width / 700);
      fill(255);
      for (let j = 0; j < correct.length; j++) {
        if (correct[j] == words[oneRandomWord][i]) {
          text(words[oneRandomWord][i], (360 - mobileCanvas * 0.97) * width / 700 + i * (40 + mobileCanvas / 10) * width / 700, (195 + mobileCanvas * 1.7) * width / 700);
        }
      }

    }
  }


  if (gameOver) {
    

    fill(0);
    textSize(100 * width / 700);
    text("Game Over", 100 * width / 700, 200 * width / 700);
        textSize(50 * width / 700);
        text("The word is "+words[oneRandomWord], 110 * width / 700, 270 * width / 700);
    fill(200);
    rect(550 * width / 700, 425 * width / 700, 90 * width / 700, 45 * width / 700);
    textSize(25 * width / 700);
    stroke(0);
    strokeWeight(1 * width / 700);

    fill(0);
    strokeWeight(1 * width / 700);
    text("Reset", 560 * width / 700, 455 * width / 700);

  }

  if (lastWord) {
    fill("#d71b5a");
    textSize(100 * width / 700);
    text("Congrats!!!!", 75 * width / 700, 250 * width / 700);

  }
  stroke(255);

  fill(0);
  textSize((25 + mobileCanvas / 20) * width / 700);
  strokeWeight(2 * width / 700);
  text("You have guessed: " + winning + " words", 50 * width / 700, 430 * width / 700);
  if (onOff) { writeOnOff="On"
  } else {writeOnOff="Off"}
    strokeWeight(1 * width / 700);
  textSize((15 + mobileCanvas / 20) * width / 700);

    text("Sound: "+ writeOnOff, 10 * width / 700, 15 * width / 700);



  fill("#d71b5a");
  textSize((15 + mobileCanvas / 40) * width / 700);
  stroke(255);

  let newLine = 0;
  let nextLine = 0;

  for (let i = 0; i < correctWords.length; i++) {

    if (i > 0 && i % (5 - mobileCanvas / 300) == 0) {
      newLine += 25;
      if (mobileCanvas > 0) {
        nextLine++;
      }
    }

    text(correctWords[i], 30 * width / 700 + (i + nextLine - newLine / 5) * (100 + mobileCanvas / 4) * width / 700, (460 + newLine * (1 + mobileCanvas / 290) + mobileCanvas / 25) * width / 700);

  }
textSize((25+ mobileCanvas / 25) * width / 700);
        text("The Hangman", 425 * width / 700, (25+ mobileCanvas / 25) * width / 700);
  textSize((15+ mobileCanvas / 25) * width / 700);
if (mobileCanvas<300) {
              text("guess the word and win the prize", 390 * width / 700, 55 * width / 700);

    }else{text("guess the word \nand win the prize", 450 * width / 700, (70+ mobileCanvas / 25) * width / 700);}


}

class Letters {
  constructor(value, x, y) {
    this.value = value;
    this.x = (x - mobileCanvas / 1.01) * width / 700;
    this.y = (y + mobileCanvas * 1.7) * width / 700;
    this.r = (20 + mobileCanvas / 10) * width / 700;
  }

  show() {
    let BGcolor = 255;

    for (let i = 0; i < keyBoardUsed.length; i++) {
      if (this.value == keyBoardUsed[i]) {
        BGcolor = 150;
        break;
      }
    }

    for (let j = 0; j < correct.length; j++) {
      if (this.value == correct[j]) {
        BGcolor = "#d71b5a";
        break;
      }
    }

    fill(BGcolor);
    square(this.x, this.y, this.r);
    fill(0);
    textSize((13 * width / 700) + mobileCanvas / 18);
    text(this.value, this.x + 5 * width / 700, (this.y + mobileCanvas / 21) + 14 * width / 700);
  }

  clicked(px, py) {
    let checkIt = false;
    let used = true;



    let d = dist(px, py, this.x + this.r / 2, this.y + this.r / 2);
    if (d < this.r / 2) {
      for (let i = 0; i < keyBoardUsed.length; i++) {
        if (this.value == keyBoardUsed[i]) {
          used = false;
          break;
        }
      }


      if (used) {
        keyBoardUsed.push(this.value);

        for (let i = 0; i < words[oneRandomWord].length; i++) {
          if (words[oneRandomWord][i] == this.value) {
            checkIt = true;
            break;
          }
        }
        if (checkIt) {
          correct.push(this.value);
          if (onOff) {
          right.play();}
        } else {
                    if (onOff) {

          wrong.play();}
          chances++;
        }
      }
    }
  }

  keyClicked(theKey) {
    let used = true;

    let checkIt = false;
    if (theKey == this.value) {
      for (let i = 0; i < keyBoardUsed.length; i++) {
        if (this.value == keyBoardUsed[i]) {
          used = false;
          break;
        }
      }

      if (used) {
        keyBoardUsed.push(this.value);

        for (let i = 0; i < words[oneRandomWord].length; i++) {
          if (words[oneRandomWord][i] == this.value) {
            checkIt = true;
            break;
          }
        }
        if (checkIt) {
          correct.push(this.value);
                    if (onOff) {

          right.play();}

        } else {
                    if (onOff) {

          wrong.play();}

          chances++;
        }
      }
    }
  }

}

function keyBordArray() {
  keyBoard = [];
  for (let i = 0; i < 10; i++) {
    let a = new Letters(allLetters[i], 350 + i * (30 + mobileCanvas / 10), 300);
    keyBoard.push(a);
  }
  for (let i = 10; i < 19; i++) {
    let a = new Letters(allLetters[i], 370 + (i - 10) * (30 + mobileCanvas / 9.5), 330 + mobileCanvas / 10);
    keyBoard.push(a);

  }
  for (let i = 19; i < 26; i++) {
    let a = new Letters(allLetters[i], 390 + (i - 19) * (30 + mobileCanvas / 7), 360 + mobileCanvas / 5);
    keyBoard.push(a);
  }
}


function mousePressed() {
  if (chances < 10 && words.length > 0) {
    for (let i = 0; i < keyBoard.length; i++) {
      keyBoard[i].clicked(mouseX, mouseY);
    }
  }

  pressIt();

  let Sd = dist(mouseX, mouseY, 10 * width / 700 + 40 * width / 700, 15 * width / 700 * width / 700);
  if (Sd < 30) {
    if (onOff) {
    onOff=false;}else {onOff=true}}

  let d = dist(mouseX, mouseY, 550 * width / 700 + 45 * width / 700, 425 * width / 700 + 22 * width / 700);
  if (gameOver && d < 30) {
    words = ["DRAGON", "CYAN", "LOVE", "ANANAS", "PEACE", "BEACH", "MOUNTAIN", "PEANUTS", "FRANCE", "GIRAFFE"];
    keyBoard = [];
    moveLeftRight = 21;
    armsAndFeet = 35;
    keyBoardUsed = [];
    correctWords = [];
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
  console.log(keyBoardUsed);
}

function touchStarted() {

  if (chances < 10 && words.length > 0) {
    for (let i = 0; i < keyBoard.length; i++) {
      keyBoard[i].clicked(mouseX, mouseY);
    }
  }

  pressIt();

  let d = dist(mouseX, mouseY, 550 * width / 700 + 45 * width / 700, 425 * width / 700 + 22 * width / 700);
  if (gameOver && d < 30) {
    words = ["DRAGON", "CYAN", "LOVE", "ANANAS", "PEACE", "BEACH", "MOUNTAIN", "PEANUTS", "FRANCE", "GIRAFFE"];
    keyBoard = [];
    moveLeftRight = 21;
    armsAndFeet = 35;
    keyBoardUsed = [];
    correctWords = [];
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
  console.log(keyBoardUsed);
}

function keyPressed() {
  if (chances < 10 && words.length > 0) {
    for (let i = 0; i < keyBoard.length; i++) {
      upperKey = key.toUpperCase();
      keyBoard[i].keyClicked(upperKey);
    }
  }
  pressIt();
}

function pressIt() {
  
  if (chances == 10&&gameOver == false) {
    gameOver = true;
            correctWords.push(words[oneRandomWord] + " 😱");

  }
  let win = 0;

  if (words[oneRandomWord] !== undefined) {
    for (let i = 0; i < words[oneRandomWord].length; i++) {
      if (correct.includes(words[oneRandomWord][i])) {
        win++;
      } else {
        break;
      }
    }
  }

  if (words[oneRandomWord] !== undefined && win == words[oneRandomWord].length && words.length > 0) {
    correctWords.push(words[oneRandomWord] + " 👌");
    winning++
    for (let i = 0; i < keyBoard.length; i++) {
      keyBoard[i].used = true;
      keyBoard[i].BGcolor = "255";
    }
    if (words.length == 1) {
      lastWord = true;
    }


    chances = 0;
    wordsAmount = [];
    correct = [];
    keyBoardUsed = [];

    words.splice(oneRandomWord, 1);
    randomWord();

  }

}
