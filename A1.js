document.getElementById('gameArea').innerHTML = `
  <h1>Word Mining A1</h1>
  <p class="rule">click tiles, find words, win!</p>
  <div class="container">
    <div id="npcScore">COMPUTER<br></div>
    <div id="game"></div>
    <div id="userScore">YOU<br></div>
  </div>
  <button id="retryBtn">Retry</button>
`;

const wordList = [
  "ADD","AGE","AGO","AIR","ALL","AND","ANY","ARM","ART","ASK","BAD","BAG","BED","BIG","BOX","BOY","BUS","BUT","BUY","BYE","CAN","CAR","CAT","COW","CUP"
];
const gridSize = 10;
const totalCells = gridSize * gridSize;
let board, revealed, wordMap, foundWords, currentPlayer, foundBy, words, usedIndexes, resultShown;

function shuffle(arr) {
  for (let i=arr.length-1; i>0; i--) {
    const j = Math.floor(Math.random() * (i+1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function getRandomWords(n) {
  const temp = [...wordList];
  shuffle(temp);
  return temp.slice(0, n);
}

function canPlaceWord(word, x, y, dx, dy) {
  for (let i=0; i<word.length; i++) {
    let nx = x + dx*i, ny = y + dy*i;
    if (nx<0 || ny<0 || nx>=gridSize || ny>=gridSize) return false;
    let index = ny*gridSize + nx;
    if (board[index] && board[index]!==word[i]) return false;
    if (usedIndexes.has(index)) return false;
  }
  return true;
}

function placeWord(word) {
  const dirs = [{x:1,y:0},{x:0,y:1},{x:1,y:1}];
  for (let attempt=0; attempt<100; attempt++) {
    let dir = dirs[Math.floor(Math.random()*dirs.length)];
    let x = Math.floor(Math.random() * gridSize);
    let y = Math.floor(Math.random() * gridSize);
    if (canPlaceWord(word, x, y, dir.x, dir.y)) {
      for (let i=0; i<word.length; i++) {
        let nx = x + dir.x*i, ny = y + dir.y*i;
        let idx = ny*gridSize + nx;
        board[idx] = word[i];
        usedIndexes.add(idx);
      }
      wordMap[word] = Array.from({length:word.length}, (_, i) => (y + dir.y*i) * gridSize + (x + dir.x*i));
      return true;
    }
  }
  return false;
}

function fillEmptyCells() {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i=0; i<totalCells; i++) {
    if (!board[i]) board[i] = alphabet[Math.floor(Math.random() * 26)];
  }
}

function updateScore() {
  document.getElementById('userScore').innerHTML = "GAMER<br>" + foundBy.user.join("<br>");
  document.getElementById('npcScore').innerHTML = "COMPUTER<br>" + foundBy.npc.join("<br>");
}

function reveal(index) {
  if (revealed[index]) return;
  revealed[index] = true;
  const cell = document.getElementById('game').children[index];
  cell.classList.add('revealed');
  cell.textContent = board[index];
}

function checkWords() {
  for (let word of words) {
    if (foundWords.has(word)) continue;
    const positions = wordMap[word];
    if (positions.every(i => revealed[i])) {
      foundWords.add(word);
      const owner = currentPlayer;
      foundBy[owner].push(word);
      positions.forEach(i => document.getElementById('game').children[i].classList.add(owner === 'user' ? 'word-owned-user' : 'word-owned-npc'));
      updateScore();
    }
  }

  if (foundWords.size === words.length && !resultShown) {
    resultShown = true;
    const userCount = foundBy.user.length;
    const npcCount = foundBy.npc.length;
    const userEl = document.getElementById('userScore');
    const npcEl = document.getElementById('npcScore');
    if (userCount > npcCount) {
      userEl.innerHTML += "<br><br><span style='font-size:24px;'>WIN</span>";
      npcEl.innerHTML += "<br><br><span style='font-size:24px;'>LOSE</span>";
    } else if (npcCount > userCount) {
      npcEl.innerHTML += "<br><br><span style='font-size:24px;'>WIN</span>";
      userEl.innerHTML += "<br><br><span style='font-size:24px;'>LOSE</span>";
    } else {
      userEl.innerHTML += "<br><br><span style='font-size:24px;'>DRAW</span>";
      npcEl.innerHTML += "<br><br><span style='font-size:24px;'>DRAW</span>";
    }
  }
}

function switchTurn() {
  currentPlayer = currentPlayer === 'user' ? 'npc' : 'user';
  if (currentPlayer === 'npc') setTimeout(npcTurn, 800);
}

function npcTurn() {
  const options = revealed.map((rev, idx) => !rev ? idx : null).filter(idx => idx !== null);
  if (options.length === 0) return;
  const choice = options[Math.floor(Math.random() * options.length)];
  handleClick(choice);
}

function handleClick(index) {
  if (revealed[index] || resultShown) return;
  reveal(index);
  checkWords();
  switchTurn();
}

function init() {
  board = Array(totalCells).fill(null);
  revealed = Array(totalCells).fill(false);
  wordMap = {}; foundWords = new Set();
  foundBy = { user: [], npc: [] };
  currentPlayer = 'user'; usedIndexes = new Set();
  resultShown = false;
  words = getRandomWords(10);
  for (let word of words) placeWord(word);
  fillEmptyCells();
  updateScore();

  const gameEl = document.getElementById('game');
  gameEl.innerHTML = '';
  for (let i=0; i<totalCells; i++) {
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.addEventListener('click', () => {
      if (currentPlayer === 'user') handleClick(i);
    });
    gameEl.appendChild(cell);
  }
}

document.getElementById('retryBtn').addEventListener('click', init);
init();
