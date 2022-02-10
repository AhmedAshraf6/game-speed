const input = document.querySelector('.form-control'),
  timer = document.querySelector('.numTime'),
  statusWord = document.querySelector('.status'),
  word = document.querySelector('.word'),
  score = document.querySelector('.numScore');

let con = 5;
let handleWord;
// function to change word
const words = ['space', 'air', 'car', 'football', 'ball', 'mobile', 'finger'];
function changeWord() {
  const randomWords = Math.floor(Math.random() * words.length);
  handleWord = words[randomWords];
  word.textContent = handleWord;
}
// function to display message
function handleMessage(ev) {
  statusWord.textContent = ev;
}

// input when onkeyup of letters
input.onkeyup = () => {
  if (input.value == handleWord) {
    input.value = '';
    handleMessage('Correct');
    changeWord();
    score.textContent++;
    con = 5;
    counter();
  }
};

// Function Handle Time
function handleTime() {
  timer.textContent = con--;
  if (timer.textContent === '0') {
    clearInterval(counter);
    handleMessage('Game Over!!!');
  }
}
let counter = setInterval(handleTime, 1000);

// Function when page is loaded
document.addEventListener('DOMContentLoaded', () => {
  input.focus();
  changeWord();
});
