document.getElementById('gameArea').innerHTML = `
  
  <p class="rule">가로, 세로, 대각선으로 있는 음성상징어를 찾으세요.</p>

  <div class="container">
    <div id="npcScore">컴퓨터:<br></div>
    <div id="game"></div>
    <div id="userScore">나:<br></div>
  </div>
  <button id="retryBtn">다시하기</button>
`;

const wordList = [/* ... (생략: 긴 단어 목록 그대로!) ... */

"쏴아아","그르렁","길길이","까르륵","까무룩","깔깔깔","꼬꼬댁","꼬끼오","꼬르륵","늴리리","달그락","덜거덕","덜그럭","덜커덩","덩더꿍","드르렁","드르륵","딩동댕","따르릉","딸꾹질","또르르","똑똑똑","띠로리","바드득","바스락","보드득","부르릉","부우웅","뽀드득","삐리리","사르르","살포시","솔솔솔","송송송","스르륵","와르르","와장창","와지끈","우당탕","우두둑","우르르","우르릉","우지끈","우지직","우쭈쭈","으르렁","젱그렁","조르르","졸졸졸","좌르르","주르륵","짜르르","짝짝짝","짤까닥","쨍그랑","쨍그렁","쪼르르","찌르르","찌르륵","차르르","찰그랑","찰싸닥","찰카닥","철써덕","철커덕","촤라락","촤르르","콩콩콩","콰르르","콸콸콸","쿵더쿵","쿵쿵쿵","타다닥","투두둑","투르륵","툭툭툭","파르르","파스스","포드닥","포르르","푸드덕","푸드득","화르르","후다닥","후닥닥","후두두","후드득","후루룩",
"덜렁덜렁","덜컹덜컹","살금살금","살랑살랑","쌔근쌔근","가닥가닥","가랑가랑","가릉가릉","가만가만","간들간들","간질간질","갈팡질팡","개굴개굴","갸웃갸웃","거뭇거뭇","겅중겅중","고래고래","고분고분","곤두박질","곱슬곱슬","구불구불","굴뚝굴뚝","굵직굵직","굼실굼실","굽실굽실","귀뚤귀뚤","그렁그렁","근질근질","글썽글썽","긁적긁적","기웃기웃","길쭉길쭉","까악까악","까옥까옥","깍둑깍둑","깜박깜박","깜빡깜빡","깜짝깜짝","깡총깡총","깡충깡충","껍죽껍죽","껑충껑충","꼬깃꼬깃","꼬물꼬물","꼬박꼬박","꼬불꼬불","꼬질꼬질","꼬치꼬치","꾀꼴꾀꼴","꾸물꾸물","꾸벅꾸벅","꾸역꾸역","꿀꺽꿀꺽","끄덕끄덕","끈적끈적","끼룩끼룩","나불나불","나풀나풀","너덜너덜","너울너울","널찍널찍","넘실넘실","노닥노닥","노릇노릇","누덕누덕","능글능글","다닥다닥","다독다독","달랑달랑","달싹달싹","달칵달칵","달캉달캉","당실당실","대굴대굴","대롱대롱","더듬더듬","더벅더벅","덕지덕지","덜렁덜렁","덜컥덜컥","덜컹덜컹","덥적덥적","덩실덩실","데구루루","데굴데굴","도란도란","도로로롱","동글동글","동실동실","두근두근","두런두런","두리둥실","둘레둘레","둥개둥개","둥실둥실","뒤뚱뒤뚱","뒤룩뒤룩","뒤적뒤적","뒤죽박죽","뒤척뒤척","뒹굴뒹굴","드문드문","들락날락","들썩들썩","들쑥날쑥","듬성듬성","따끈따끈","따끔따끔","딸깍딸깍","딸랑딸랑","떨렁떨렁","떼굴떼굴","또각또각","또랑또랑","또박또박","똑딱똑딱","뚜벅뚜벅","뚝딱뚝딱","띄엄띄엄","말똥말똥","말랑말랑","매끈매끈","매슥매슥","맨송맨송","머뭇머뭇","멀뚱멀뚱","멈칫멈칫","모락모락","몽실몽실","무럭무럭","밍숭맹숭","바글바글","바둥바둥","바득바득","바들바들","바리바리","바삭바삭","반들반들","반질반질","반짝반짝","발름발름","방글방글","방긋방긋","방실방실","뱅글뱅글","번지르르","번쩍번쩍","벌컥벌컥","벙긋벙긋","보글보글","보슬보슬","부들부들","부릉부릉","부슬부슬","불쑥불쑥","비실비실","비틀비틀","빙글빙글","빠끔빠끔","뻐꾹뻐꾹","뽀득뽀득","삐걱삐걱","삐까번쩍","삐악삐악","삐약삐약","사각사각","사박사박","사뿐사뿐","삭둑삭둑","산들산들","살그머니","살금살금","살랑살랑","살짝살짝","생글생글","설컹설컹","소곤소곤","소담소담","소복소복","소쩍소쩍","속닥속닥","속살속살","송알송알","수북수북","시끌버끌","시끌벅적","싹둑싹둑","쌔근쌔근","아롱다롱","아삭아삭","아작아작","아장아장","야옹야옹","어푸어푸","엉금엉금","와글와글","와들와들","와작와작","왁자지껄","왱알앵알","우당탕탕","울긋불긋","울먹울먹","웅성웅성","웅얼웅얼","으라차차","자장자장","재잘재잘","저벅저벅","절벅절벅","주렁주렁","주룩주룩","주섬주섬","중얼중얼","지글지글","지지배배","질겅질겅","짤깍짤깍","짤랑짤랑","째깍째깍","쩌렁쩌렁","쫑알쫑알","찰랑찰랑","찰칵찰칵","철떡철떡","철벅철벅","철썩철썩","촐랑촐랑","칙칙폭폭","콜록콜록","콩닥콩닥","쿰척쿰척","쿵덕쿵덕","쿵짝쿵짝","쿵쾅쿵쾅","키득키득","타닥타닥","터덜터덜","토닥토닥","투덜투덜","투둑투둑","파닥파닥","파딱파딱","팔랑팔랑","퍼덕퍼덕","퍼떡퍼떡","퐁당퐁당","하악하악","한들한들","할딱할딱","헐레벌떡","홀짝홀짝","후룩후룩","훌쩍훌쩍","훠이훠이","흔들흔들","히죽히죽",
"거드럭거드럭","곤드레만드레","굼지럭굼지럭","꼼지락꼼지락","달그락달그락","덜그럭덜그럭","두리번두리번","드르렁드르렁","만지작만지작","부스럭부스럭","부시럭부시럭","붉으락푸르락","사부작사부작","어슬렁어슬렁","엎치락뒤치락","오도독오도독","쨍그랑쨍그랑","출렁출렁출렁","후루룩후루룩",

];

const gridSize = 10;
const totalCells = gridSize * gridSize;
let board, revealed, wordMap, foundWords, currentPlayer, foundBy, words, usedIndexes;
let cloverIndexes; // 🍀 클로버 인덱스 저장
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
  const dirs = [
    { x: 1, y: 0 }, // →
    { x: 0, y: 1 }, // ↓
    { x: 1, y: 1 }  // ↘️
  ];
  for (let attempt = 0; attempt < 100; attempt++) {
    let dir = dirs[Math.floor(Math.random() * dirs.length)];
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

function placeClover(count) {
  cloverIndexes = new Set();
  let emptyIndexes = [];
  for (let i = 0; i < totalCells; i++) {
    if (!board[i]) emptyIndexes.push(i);
  }
  shuffle(emptyIndexes);
  for (let i = 0; i < count && i < emptyIndexes.length; i++) {
    let idx = emptyIndexes[i];
    board[idx] = '🍀';
    cloverIndexes.add(idx);
  }
}

function fillEmptyCells() {
  const filler = '가각간값같갛개거건걸검것게곁고골공괴교구국굴궁그근글금기긴길김까깜깨꺾껴꼼꽁꾸끔나난날낮낯내넘넣네년놀놈누눈뉴는니님다닥달담대댄더던덩데도동두드득든듣들등디딜딱때땡똑뚫뛰라락란람랐랑래랜러레려력렸로롭르른를리린림마막만말맘맛맞매맨머먹먼멀멋메멘며면모목몰무문묻물뭘미민밀바박반받발밤밥방뱅버벅번법벼별보복볼봐봤부북분불붙브블비빈빌빔빛빠빡빨빼뻥뿔사살상새색생서선섬섭섰세셋소속솜수숙순숲쉬슴시신실싶쌍쓰씌씻아악안알았앞애야양어얼엄업없었엉에여열영옛오온올옴옷옹와왔왜우운울원위유윤으은을음의이익인일잃임입있잊자작잖잘장재저적전정제져졸좀좋주줄중줬지진집짜짝찍차착참창채책척천청체쳤초촌출췄취치친카켜코콜크큰테토트튼파판폭폼핀필하학한할해햄했행현형호혼화환히힘'.split('');
  shuffle(filler);
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

function revealAround(index) {
  const dx = [0, 0, -1, 1];
  const dy = [-1, 1, 0, 0];
  let x = index % gridSize;
  let y = Math.floor(index / gridSize);
  for (let d = 0; d < 4; d++) {
    let nx = x + dx[d];
    let ny = y + dy[d];
    if (nx >= 0 && ny >= 0 && nx < gridSize && ny < gridSize) {
      let nIdx = ny * gridSize + nx;
      reveal(nIdx);
    }
  }
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

function switchTurn(extraTurn = false) {
  if (!extraTurn) {
    currentPlayer = currentPlayer === 'user' ? 'npc' : 'user';
  }
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

  let extraTurn = false;
  if (cloverIndexes.has(index)) {
    revealAround(index);
    extraTurn = true;
  }

  checkWords();
  switchTurn(extraTurn);
}

function init() {
  board = Array(totalCells).fill(null);
  revealed = Array(totalCells).fill(false);
  wordMap = {};
  foundWords = new Set();
  foundBy = { user: [], npc: [] };
  currentPlayer = 'user';
  usedIndexes = new Set();
  resultShown = false;

  words = getRandomWords(13);
  for (let word of words) {
    placeWord(word);
  }
  placeClover(5);
  fillEmptyCells();
  updateScore();

gameEl.innerHTML = '';
for (let i = 0; i < totalCells; i++) {
  const cell = document.createElement('div');
  cell.className = 'cell';
  
  // 👇 여기서 글씨 스타일을 직접 지정!
  cell.style.fontSize = '18px';
  cell.style.fontWeight = 'bold';
  cell.style.color = '#333';

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
