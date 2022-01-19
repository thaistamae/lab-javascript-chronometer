const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  printMinutes();
  printSeconds();
}

function printMinutes() {
  minDecElement.innerText = chronometer.computeTwoDigitNumber(chronometer.getMinutes())[0]
  minUniElement.innerText = chronometer.computeTwoDigitNumber(chronometer.getMinutes())[1]
}

function printSeconds() {
  secDecElement.innerText = chronometer.computeTwoDigitNumber(chronometer.getSeconds())[0]
  secUniElement.innerText = chronometer.computeTwoDigitNumber(chronometer.getSeconds())[1]
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit(split) {
  let li = document.createElement('li');
  li.innerText = split
  splitsElement.appendChild(li)
}

function clearSplits() {
  splits.innerHTML=""
}

function setStopBtn() {
  chronometer.stop()
  btnLeftElement.innerText = "START"
  btnRightElement.innerText = "RESET" 
  
}

function setSplitBtn() {
  printSplit(chronometer.split())
  
}

function setStartBtn() {
  chronometer.start(printTime);
  btnLeftElement.innerText = "STOP"  
  btnRightElement.innerText = "SPLIT" 
}

function setResetBtn() {
  chronometer.reset()
  printTime() 
  clearSplits()
  
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if(btnLeftElement.textContent === "START"){
    setStartBtn();
    btnLeftElement.classList.remove('start');
    btnLeftElement.classList.add('stop');
    btnRightElement.classList.remove('reset');
    btnRightElement.classList.add('split');       
  }else if(btnLeftElement.textContent === "STOP"){
    setStopBtn();
    btnLeftElement.classList.remove('stop');
    btnLeftElement.classList.add('start');
    btnRightElement.classList.remove('split');
    btnRightElement.classList.add('reset');     
  }

  });

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if(btnRightElement.textContent === "RESET"){
    setResetBtn();
            
  }else if(btnRightElement.textContent === "SPLIT"){
    setSplitBtn();

  }

});
