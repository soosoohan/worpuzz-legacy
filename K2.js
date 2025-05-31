document.getElementById('gameArea').innerHTML = `
  <h1>워퍼즈1</h1>
  <p class="rule"> 가로, 세로, 대각선으로 있는 사자성어와 고사성어를 찾으세요. </p>

  <div class="container">
    <div id="npcScore">컴퓨터:<br></div>
    <div id="game"></div>
    <div id="userScore">나:<br></div>
  </div>
  <button id="retryBtn">다시하기</button>
`;


const wordList = [
  // 여기에 단어 리스트 추가(알쏭달쏭)//
  
  '알쏭달쏭'
  
  ];
  
      const gridSize = 10;
      const totalCells = gridSize * gridSize;
      let board, revealed, wordMap, foundWords, currentPlayer, foundBy, words, usedIndexes;
      let resultShown = false;
  
      const gameEl = document.getElementById('game');
      const userScoreEl = document.getElementById('userScore');
      const npcScoreEl = document.getElementById('npcScore');
      const retryBtn = document.getElementById('retryBtn');
  
      function shuffle(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [arr[i], arr[j]] = [arr[j], arr[i]];
        }
      }
  
      function getRandomWords(n) {
        const temp = [...wordList];
        shuffle(temp);
        return temp.slice(0, n);
      }
  
      function getRandomDirection() {
        const dirs = [
          { x: 1, y: 0 },
          { x: 0, y: 1 },
          { x: 1, y: 1 },
        ];
        return dirs[Math.floor(Math.random() * dirs.length)];
      }
  
      function canPlaceWord(word, x, y, dx, dy) {
        for (let i = 0; i < word.length; i++) {
          let nx = x + dx * i;
          let ny = y + dy * i;
          if (nx < 0 || ny < 0 || nx >= gridSize || ny >= gridSize) return false;
          let index = ny * gridSize + nx;
          if (board[index] && board[index] !== word[i]) return false;
          if (usedIndexes.has(index)) return false;
        }
        return true;
      }
  
      function placeWord(word) {
        for (let attempt = 0; attempt < 100; attempt++) {
          let dir = getRandomDirection();
          let x = Math.floor(Math.random() * gridSize);
          let y = Math.floor(Math.random() * gridSize);
          if (canPlaceWord(word, x, y, dir.x, dir.y)) {
            let positions = [];
            for (let i = 0; i < word.length; i++) {
              let nx = x + dir.x * i;
              let ny = y + dir.y * i;
              let idx = ny * gridSize + nx;
              board[idx] = word[i];
              usedIndexes.add(idx);
              positions.push(idx);
            }
            wordMap[word] = positions;
            return true;
          }
        }
        return false;
      }
  
      function fillEmptyCells() {
        const filler = '가각간값같갛개거건걸검것게곁고골공괴교구국굴궁그근글금기긴길김까깜깨꺾껴꼼꽁꾸끔나난날낮낯내넘넣네년놀놈누눈뉴는니님다닥달담대댄더던덩데도동두드득든듣들등디딜딱때땡똑뚫뛰라락란람랐랑래랜러레려력렸로롭르른를리린림마막만말맘맛맞매맨머먹먼멀멋메멘며면모목몰무문묻물뭘미민밀바박반받발밤밥방뱅버벅번법벼별보복볼봐봤부북분불붙브블비빈빌빔빛빠빡빨빼뻥뿔사살상새색생서선섬섭섰세셋소속솜수숙순숲쉬슴시신실싶쌍쓰씌씻아악안알았앞애야양어얼엄업없었엉에여열영옛오온올옴옷옹와왔왜우운울원위유윤으은을음의이익인일잃임입있잊자작잖잘장재저적전정제져졸좀좋주줄중줬지진집짜짝찍차착참창채책척천청체쳤초촌출췄취치친카켜코콜크큰테토트튼파판폭폼핀필하학한할해햄했행현형호혼화환히힘'.split('');
        for (let i = filler.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [filler[i], filler[j]] = [filler[j], filler[i]];
        }
        let iFiller = 0;
        for (let i = 0; i < totalCells; i++) {
          if (!board[i]) {
            board[i] = filler[iFiller++ % filler.length];
          }
        }
      }
  
      function updateScore() {
        userScoreEl.innerHTML = "나:<br>" + foundBy.user.join("<br>");
        npcScoreEl.innerHTML = "컴퓨터:<br>" + foundBy.npc.join("<br>");
      }
  
      function reveal(index) {
        if (revealed[index]) return;
        revealed[index] = true;
        const cell = gameEl.children[index];
        cell.classList.add('revealed');
        cell.textContent = board[index];
      }
  
      function checkWords() {
        for (let word of words) {
          if (foundWords.has(word)) continue;
          const positions = wordMap[word];
          if (positions.every(i => revealed[i])) {
            foundWords.add(word);
            let owner = currentPlayer === 'user' ? 'user' : 'npc';
            foundBy[owner].push(word);
            for (let i of positions) {
              gameEl.children[i].classList.add(owner === 'user' ? 'word-owned-user' : 'word-owned-npc');
            }
            updateScore();
          }
        }
  
        if (foundWords.size === words.length && !resultShown) {
          resultShown = true;
          let userCount = foundBy.user.length;
          let npcCount = foundBy.npc.length;
          if (userCount > npcCount) {
            userScoreEl.innerHTML += "<br><br><span style='font-size:24px;'>승리</span>";
            npcScoreEl.innerHTML += "<br><br><span style='font-size:24px;'>패배</span>";
          } else if (npcCount > userCount) {
            npcScoreEl.innerHTML += "<br><br><span style='font-size:24px;'>승리</span>";
            userScoreEl.innerHTML += "<br><br><span style='font-size:24px;'>패배</span>";
          }
        }
      }
  
      function switchTurn() {
        currentPlayer = currentPlayer === 'user' ? 'npc' : 'user';
        if (currentPlayer === 'npc' && !resultShown) {
          setTimeout(npcTurn, 800);
        }
      }
  
      function npcTurn() {
        let options = revealed.map((rev, idx) => !rev ? idx : null).filter(idx => idx !== null);
        if (options.length === 0) return;
        let choice = options[Math.floor(Math.random() * options.length)];
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
        wordMap = {};
        foundWords = new Set();
        foundBy = { user: [], npc: [] };
        currentPlayer = 'user';
        usedIndexes = new Set();
        words = getRandomWords(13);
        resultShown = false;
  
        for (let word of words) {
          placeWord(word);
        }
        fillEmptyCells();
        updateScore();
  
        gameEl.innerHTML = '';
        for (let i = 0; i < totalCells; i++) {
          const cell = document.createElement('div');
          cell.className = 'cell';
          cell.addEventListener('click', () => {
            if (currentPlayer === 'user') {
              handleClick(i);
            }
          });
          gameEl.appendChild(cell);
        }
      }
  
      retryBtn.addEventListener('click', init);
  
      init();