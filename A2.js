document.getElementById('gameArea').innerHTML = `
  <h1>Word Mining A2</h1>
  <p class="rule">click tiles, find words, win!</p>
  <div class="container">
    <div id="npcScore">COMPUTER<br></div>
    <div id="game"></div>
    <div id="userScore">YOU<br></div>
  </div>
  <button id="retryBtn">Retry</button>
`;

const wordList = [
  
"ACT","ALL","ANY","APP","BAR","BIN","BIT","CAN","CRY","DRY","FAN","FAT","FIT","FIX","FLU","FLY","FUN","GAP","GAS","GOD","GUN","GUY","HIS","HIT","ILL","JAM","KID","LAB","LAW","LOW","MAY","NUT","OIL","OWN","PAY","PER","PET","POP","PUB","RUN","SIR","SKI","SKY","TIE","TIP","TOP","TOY","USE","VAN","WAR","WEB","WET","WOW","YET",
"ABLE","ARMY","BACK","BEAN","BEAR","BEAT","BEEF","BELT","BEST","BLOW","BOIL","BONE","BOOK","BOSS","BOWL","BURN","CAMP","CARE","CASE","CASH","CENT","CHAT","CHEF","CHIP","CODE","COOK","COPY","DARK","DATA","DEAD","DEAL","DEAR","DEEP","DROP","DRUG","EARN","FAIL","FAIR","FALL","FARM","FEAR","FEED","FILM","FISH","FLAT","FORK","FREE","FROG","GATE","GIFT","GOAL","GOLD","GOLF","GOOD","HALF","HALL","HAVE","HEAT","HERO","HERS","HIDE","HIGH","HILL","HOLD","HOLE","HOME","HOPE","HUGE","HURT","ITEM","JAZZ","JOKE","JUMP","KILL","KING","KNEE","LADY","LAKE","LAMP","LAND","LAST","LAZY","LEAD","LEND","LESS","LIFT","LINK","LOCK","LOOK","LOST","LOUD","LUCK","MAIL","MALE","MARK","MIND","MINE","MOON","MORE","NECK","NEED","NONE","ONTO","OVEN","PACK","PAIN","PASS","PAST","PICK","PULL","PUSH","RACE","RATE","REST","RIDE","RING","RISE","ROCK","ROLE","ROOF","RUDE","SAFE","SAIL","SALE","SAVE","SEAT","SEEM","SHIP","SHUT","SIDE","SIGN","SITE","SIZE","SKIN","SOAP","SOCK","SOFT","SORT","STAR","STAY","STEP","SUCH","SUIT","SURE","TALK","TASK","TERM","TEXT","THIN","TIDY","TOOL","TOUR","TWIN","UNIT","USED","USER","VIEW","WAIT","WASH","WAVE","WEAK","WIDE","WILD","WIND","WISH","WOOD","ZERO",
"ADULT","AFTER","ALIVE","ALLOW","ALONE","ALONG","AMONG","ANKLE","APPLY","ARGUE","AVOID","AWARD",
"AWFUL","BADLY","BASED","BIRTH","BLANK","BLOOD","BOARD","BRAIN","BRUSH","CATCH","CAUSE","CHECK","CLEAR","CLOSE","CLOUD","COACH","COAST","COUNT","COVER","CRAZY","CRIME","CROSS","CROWD","CURLY","CYCLE","DAILY","DEATH","DIARY","DRAMA","DREAM","DRIVE","EARTH","EMPTY","ENTER","ERROR","ESSAY","EXACT","EXIST","FIELD","FIGHT","FINAL","FIRST","FOCUS","FRESH","GRASS","GREET","GUEST","GUIDE","HABIT","HEART","HEAVY","HUMAN","IDEAL","IMAGE","KNIFE","KNOCK","LATER","LEAST","LEMON","LEVEL","LIGHT","LORRY","LUCKY","MAJOR","MARRY","MATHS","MEDIA","METAL","MIGHT","NOISE","NOISY","NOVEL","OCEAN","OFFER","OWNER","PANTS","PEACE","PENNY","PILOT","PLANT","PLATE","POWER","PRINT","PRIZE","QUEEN","RAISE","REACH","REACT","REFER","REPLY","RIGHT","ROUND","ROUTE","SADLY","SAUCE","SCARY","SCENE","SCORE","SENSE","SERVE","SHAKE","SHALL","SHAPE","SHEET","SHOUT","SINCE","SLEEP","SMELL","SMILE","SMOKE","SOLVE","SPEED","SPOON","STAGE","STAIR","STAMP","START","STATE","STEAL","STONE","STORE","STORM","SWEET","TASTE","THICK","THIEF","THIRD","THROW","TOUCH","TOWEL","TOWER","TRACK","TRAIN","TRUCK","USUAL","VIRUS","VOICE","WHEEL","WHILE","WHOLE","WHOSE","WORRY","WORSE","WORST","YOURS",
"ABROAD","ACCEPT","ACTIVE","AFFECT","ALMOST","AMOUNT","ANYWAY","APPEAR","ASLEEP","ATTACK","ATTEND","AUTHOR","BEFORE","BEHAVE","BELONG","BETTER","BORROW","BOTTOM","BRIDGE","BRIGHT","BROKEN","BUTTON","CARPET","CASTLE","CHANCE","CHOICE","CHURCH","CIRCLE","CLEVER","CLOSED","COLUMN","COMEDY","COOKER","CORNER","COUPLE","CREDIT","DANGER","DEGREE","DEPEND","DESERT","DEVICE","DIRECT","DOUBLE","EASILY","EFFECT","EITHER","EMPLOY","ENDING","ENERGY","ENGINE","EXCEPT","EXPECT","EXPERT","FACTOR","FEMALE","FIGURE","FINGER","FINISH","FLYING","FOREST","FORMAL","FRIDGE","FUTURE","GROUND","HEIGHT","HOCKEY","INJURY","INSECT","INSIDE","INVENT","INVITE","ITSELF","LAPTOP","LAWYER","LEADER","LIKELY","LITTLE","LOUDLY","LOVELY","MANAGE","MANNER","MATTER","MEMORY","METHOD","MIDDLE","MIRROR","MOBILE","MONKEY","MOSTLY","MYSELF","NARROW","NATURE","NEARLY","NORMAL","NOTICE","NUMBER","OPTION","PALACE","PETROL","PLANET","PLEASE","POCKET","POLITE","POSTER","PRISON","PUBLIC","RATHER","RECENT","RECIPE","RECORD","REDUCE","REFUSE","REGION","REMOVE","REPAIR","REPORT","REVIEW","RUNNER","SALARY","SCARED","SCREEN","SEARCH","SEASON","SECOND","SECRET","SERIES","SILVER","SIMPLE","SINGLE","SKIING","SLOWLY","SOCCER","SOCIAL","SOURCE","SPEECH","SPIDER","SQUARE","STRESS","STUPID","SURVEY","SYMBOL","SYSTEM","TABLET","TARGET","UNITED","VALLEY","WEIGHT","WINNER","WOODEN",
"ABILITY","ACHIEVE","AGAINST","AIRLINE","ALREADY","ANCIENT","ANYBODY","ARRANGE","ATHLETE","AVERAGE","BENEFIT","BETWEEN","BILLION","BIOLOGY","BISCUIT","CAMPING","CAREFUL","CARTOON","CERTAIN","CHARITY","CLEARLY","CLIMATE","COLLECT","COMMENT","COMPETE","CONNECT","CONTAIN","CONTEXT","CONTROL","CROWDED","DENTIST","DESTROY","DEVELOP","DIGITAL","DISEASE","DRAWING","DRIVING","EXACTLY","EXPRESS","EXTREME","FACTORY","FARMING","FASHION","FEATURE","FICTION","FINALLY","FIRSTLY","FISHING","FOREIGN","FORWARD","FURTHER","GALLERY","GENERAL","HAPPILY","HELPFUL","HERSELF","HIMSELF","ILLNESS","INSTEAD","INVOLVE","LECTURE","MANAGER","MEDICAL","MENTION","MISSING","MUSICAL","NEITHER","NERVOUS","NETWORK","NOWHERE","OFFICER","OUTSIDE","PAINTER","PARKING","PATIENT","PATTERN","PERFORM","PERHAPS","PHYSICS","PLASTIC","PLEASED","PREDICT","PRESENT","PREVENT","PRINTER","PROCESS","PRODUCE","PROFILE","PROGRAM","PROMISE","PROTECT","PROVIDE","PUBLISH","PURPOSE","QUALITY","QUIETLY","RAILWAY","REALIZE","RECEIVE","RECYCLE","REGULAR","REPLACE","REQUEST","RESPOND","RUBBISH","RUNNING","SAILING","SERIOUS","SERVICE","SEVERAL","SINGING","SMOKING","SOCIETY","SOLDIER","SPEAKER","STOMACH","STRANGE","SUCCEED","SUGGEST","SUPPORT","SUPPOSE","TEENAGE","THOUGHT","TOURISM","TOWARDS","TRAINER","TROUBLE","TYPICAL","UNHAPPY","UNIFORM","UNUSUAL","VARIETY","VEHICLE","WASHING","WEDDING","WELCOME","WORKING","WORRIED",
"ACCIDENT","ACTUALLY","ALTHOUGH","ANYWHERE","ARGUMENT","AUDIENCE","BASEBALL","CLOTHING","COMPLAIN","CONSIDER","CONTINUE","CREATIVE","CRIMINAL","CUPBOARD","DECISION","DESIGNER","DIRECTOR","DISAGREE","DISASTER","DISCOVER","DISTANCE","DIVORCED","DOCUMENT","DOWNLOAD","ELECTRIC","EMPLOYEE","EMPLOYER","ENGINEER","ENORMOUS","EVERYDAY","EVIDENCE","HEADACHE","IDENTIFY","INCLUDED","INCREASE","INDUSTRY","INFORMAL","LAUGHTER","LEARNING","LISTENER","MATERIAL","MEDICINE","MOVEMENT","MUSICIAN","NATIONAL","NORMALLY","ORDINARY","ORGANIZE","ORIGINAL","PHYSICAL","PLATFORM","POSITION","PROGRESS","QUANTITY","QUESTION","RECENTLY","REPORTER","RESEARCH","RESPONSE","SCHEDULE","SECONDLY","SEPARATE","SHOULDER","SOLUTION","SPECIFIC","STRAIGHT","STRATEGY","SUDDENLY","SURPRISE","TEACHING","THINKING","TRAINING","UPSTAIRS",
"ACCORDING","ADVANTAGE","ADVENTURE","ADVERTISE","ARCHITECT","ASSISTANT","ATTENTION","AVAILABLE","BEHAVIOUR","BRILLIANT","CAREFULLY","CELEBRATE","CELEBRITY","CERTAINLY","CHARACTER","CHEMISTRY","CIGARETTE","CLASSICAL","COLLEAGUE","COMMUNITY","CONDITION","CONNECTED","CONTINENT","CORRECTLY","DETECTIVE","DIRECTION","DISAPPEAR","DISCOVERY","EDUCATION","EQUIPMENT","EXCELLENT","EXTREMELY","FOLLOWING","FURNITURE","INCLUDING","INVENTION","JEWELLERY","KNOWLEDGE","LIFESTYLE","NECESSARY","OURSELVES","PASSENGER","POLLUTION","PRESIDENT","PROFESSOR","PRONOUNCE","RECEPTION","RECOGNIZE","RECOMMEND","RECORDING","SECRETARY","SOMEWHERE","STRUCTURE","SURPRISED","TRADITION","TRANSPORT","TRAVELLER",
"APPEARANCE","ATTRACTIVE","BACKGROUND","BASKETBALL","COMPLETELY","CONFERENCE","DEFINITELY","DEPARTMENT","DISCUSSION","DOWNSTAIRS","ELECTRICAL","ELECTRONIC","ESPECIALLY","EVERYWHERE","EXPERIENCE","EXPERIMENT","EXPRESSION","GOVERNMENT","IMPOSSIBLE","INCREDIBLE","INDIVIDUAL","INSTRUCTOR","INSTRUMENT","INVITATION","JOURNALIST","MOTORCYCLE","PARTICULAR","PERMISSION","PHOTOGRAPH","POPULATION","POSSESSION","RESEARCHER","SMARTPHONE","SUCCESSFUL","SUGGESTION","SURPRISING","TECHNOLOGY","THEMSELVES",

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
  document.getElementById('userScore').innerHTML = "GAMER<br>" + foundBy.user.join("<br>");
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
