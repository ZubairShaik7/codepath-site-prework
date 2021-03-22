// these are Global Variables
var pattern = [];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;    // track the users amount of guesses
var clueHoldTime = 1000; //how long to hold each clue's light/sound
var numberOfMistakes = 0; // track the users mistakes

// these are Global Constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence
const patternLength = 12;

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 510,
  6: 596
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function patternGenerator() {
  var i
  for (i = 0; i < patternLength; i++) {
    pattern[i] = getRandomInt(7);
  }
}

function startGame() {
  //initialize the game variables
  progress = 0;
  gamePlaying = true;
  numberOfMistakes = 0;
  patternGenerator();
  
  //swap the start and stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}

//end the game
function stopGame() {
  gamePlaying = false;
  
  //swap the start and stop buttons
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");

}

//light a button when computer is playing clues
function lightButton(btn) {
  document.getElementById("button"+btn).classList.add("lit")
}

//clear a button when computer is done playing clues
function clearButton(btn) {
  document.getElementById("button"+btn).classList.remove("lit")
}

//play a single clue by lighting and sound
function playSingleClue(btn) {
  console.log(btn);
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

// string together clues together
function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    clueHoldTime -= 20;
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
}

//check each of the user's guesses
function guess(btn) {
  console.log("user guessed: " + btn);
  document.getElementById("btn"  + btn).classList.remove("hidden");
  var counter = 1;
  var timer = setInterval(function(){
  counter--
  if (counter === 0) {
    document.getElementById("btn"  + btn).classList.add("hidden");
    clearInterval(timer);
  }
}, 1000);

  if (!gamePlaying) {
    return;
  }
  
     if(pattern[guessCounter] == btn){
      // guess is correct, move to next check
      if(guessCounter == progress){
        // check if this was last turn
        if(progress == pattern.length - 1){
          //game is over, user won
          winGame();
        }else{
          //Pattern is correct, add to the progress
          progress++;
          playClueSequence();
        }
      }else{
        //increment the guess counter and check next guess until it equals progress
        guessCounter++;
      }
    }else{
      //Guess was incorrect, user lost
      numberOfMistakes++;
      document.getElementById("guesses").innerHTML = 3 - numberOfMistakes;
      if (numberOfMistakes === 3) {
        loseGame();
      }
    }
}

//called if user loses the game
function loseGame() {
  stopGame();
  alert("Game Over. You Lost.");
}

//called if user wins the game
function winGame() {
  stopGame();
  alert("Game Over. You Won!");
}

//plays a sound with the button and time passed in
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}

//start playing the sound with button passed in
function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}

//stop playing the sound
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}



