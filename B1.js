document.getElementById('gameArea').innerHTML = `
  <h1>Word Mining B1</h1>
  <p class="rule">click tiles, find words, win!</p>
  <div class="container">
    <div id="npcScore">COMPUTER<br></div>
    <div id="game"></div>
    <div id="userScore">YOU<br></div>
  </div>
  <button id="retryBtn">Retry</button>
`;

const wordList = [
  
"ACT","AGE","AIM","BAN","BEE","CAP","CUT","DUE","FAR","FRY","FUR","KEY","LAY","LIE","LIP","MAD","MIX","MUD","NET","NOR","NOW","ODD","PAN","PIN","POT","PRO","ROW","SET","SEX","SHY","TAX","TIN","TIP","TOE","WIN",
"AGED","BAKE","BASE","BELL","BEND","BITE","BOMB","BURY","CALM","CLUE","COAL","COIN","COOL","DEAL","DEEP","DIRT","DROP","DRUM","DUST","DUTY","EDGE","FACE","FEAR","FILE","FIRE","FLAG","FLOW","FOLD","FOLK","FUEL","GLAD","HAND","HANG","HATE","HEAD","HIRE","HOST","HUNT","IRON","KEEN","KICK","KIND","KISS","LACK","LEAD","LEAF","LIKE","LIVE","LOSS","MALL","MESS","MILD","MINE","MOOD","MOVE","NAIL","NEED","NEXT","NOTE","ONCE","OURS","PACK","PALE","PASS","PATH","PIPE","PLOT","PLUS","POEM","POET","PORT","POUR","PRAY","PULL","PUSH","QUIT","RARE","RENT","RISE","RISK","ROLL","ROPE","RULE","SAIL","SAND","SCAN","SEED","SINK","SLOW","SOIL","SORT","SPOT","SUIT","SWIM","TAIL","TAPE","TEND","TENT","THAT","THIS","TILL","TINY","TOUR","TUBE","TYPE","TYRE","UGLY","UPON","USED","VIEW","VOTE","WARM","WARN","WAVE","WILL","WING","WOOL","YARD",
"ADMIT","AGENT","AHEAD","ALARM","ALBUM","ANNOY","APART","AWARD","AWARE","BASIC","BASIS","BLOCK","BOARD","BRAND","BRAVE","BRIDE","CHAIN","CHEAP","CHEAT","CHEST","CLAIM","CLEAR","CLICK","CLIMB","CLOSE","CLOTH","COACH","COUNT","COURT","COVER","CREAM","CRUEL","DAILY","DOUBT","DRUNK","EMPTY","ENEMY","ENTRY","EQUAL","EXTRA","FANCY","FENCE","FIXED","FLOOD","FLOUR","FORCE","FRAME","GHOST","GIANT","GLOVE","GOODS","GRADE","GRAIN","GUARD","HURRY","ISSUE","JUDGE","KNOCK","LABEL","LAYER","LEGAL","LEVEL","LIMIT","LOCAL","MAGIC","MODAL","OCCUR","OUGHT","PLACE","POINT","PRESS","PROUD","PROVE","QUEUE","QUOTE","RANGE","ROBOT","ROUGH","ROYAL","RUGBY","SHAKE","SHARE","SHARP","SHELF","SHELL","SHIFT","SHINE","SHINY","SHOOT","SIGHT","SILLY","SINCE","SLICE","SMART","SOLID","SPICY","STAFF","STATE","STICK","STILL","STORE","STUFF","THEME","TIGHT","TOTAL","TOUCH","TRADE","TREAT","TREND","TRICK","TRUTH","UNION","UPSET","VALUE","WASTE","WATER","WEIGH","WHILE","WHOLE","WORRY","WORSE","WORST","WORTH","WRONG","YOUNG","YOUTH",
"ACCESS","ADMIRE","ADVISE","AFFORD","AMAZED","ARREST","ASSIST","ATTACH","BATTLE","BEAUTY","BELIEF","BETTER","BORDER","BOTHER","BRANCH","BREATH","BUBBLE","CAMPUS","CENTRE","CHARGE","CLAUSE","CLIENT","COMMIT","COTTON","CUSTOM","DAMAGE","DECADE","DEFINE","DIRECT","DIVIDE","DONATE","DOUBLE","EDITOR","EFFORT","ESCAPE","EXCEPT","EXPAND","EXPORT","FAIRLY","FASTEN","FAVOUR","FREEZE","FROZEN","GARAGE","GATHER","GENTLE","GLOBAL","GROWTH","GUILTY","HARDLY","HIGHLY","HONEST","HORROR","IGNORE","IMPACT","IMPORT","INDEED","INDOOR","INJURE","INTEND","INVEST","LATEST","LENGTH","LIQUID","LIVING","LOCATE","LONELY","LUXURY","MAINLY","MARKET","MEDIUM","MENTAL","MURDER","MUSCLE","NATION","NATIVE","NEEDLE","NORMAL","PLENTY","POETRY","POISON","POLICY","POWDER","PRAYER","PRIEST","PRINCE","PROFIT","PROPER","PUNISH","RACING","RARELY","REJECT","RELATE","REMAIN","REMIND","REMOTE","REPAIR","REPEAT","RESULT","RETIRE","REVISE","SAFETY","SAILOR","SAMPLE","SCRIPT","SEXUAL","SIGNAL","SILENT","SIMPLY","SMOOTH","SPIRIT","SPOKEN","SPREAD","STATUE","STRING","STUDIO","SUDDEN","SUFFER","SUPPLY","SURELY","SWITCH","TALENT","THEIRS","THEORY","THOUGH","THROAT","TONGUE","UNABLE","UNFAIR","UNLESS","UNLIKE","UPDATE","VICTIM","VIEWER","WEAPON","WITHIN","WONDER",
"ACCOUNT","ALCOHOL","ANALYSE","ANNOYED","ARRIVAL","ATTRACT","AVERAGE","BALANCE","BATTERY","BENEFIT","BREATHE","CAPTAIN","CEILING","CENTRAL","CHANNEL","CHAPTER","COMBINE","COMMENT","COMPLEX","CONFIRM","CONFUSE","CONSIST","CONSUME","CONTACT","CONTENT","COSTUME","COTTAGE","COVERED","CURRENT","CURTAIN","DELIVER","DESPITE","DIAGRAM","DIAMOND","DISLIKE","DRESSED","EASTERN","ECONOMY","EDUCATE","ELEMENT","EMOTION","ENGAGED","EPISODE","EQUALLY","EXAMINE","EXPLODE","EXPLORE","FEATURE","FITNESS","FOREVER","FURTHER","HEATING","HEAVILY","ILLEGAL","INDOORS","INJURED","JOURNAL","KILLING","LEADING","LEATHER","LEISURE","LOCATED","MEASURE","MENTION","MIXTURE","MUSICAL","MYSTERY","NEITHER","NUCLEAR","OBVIOUS","OUTDOOR","PACKAGE","PAINFUL","PASSION","PAYMENT","POVERTY","PRETEND","PRIMARY","PRIVATE","PROGRAM","PROMOTE","PROTEST","QUALIFY","REALITY","RECEIPT","REFLECT","RELATED","RELAXED","RELEASE","REQUEST","REQUIRE","RESPECT","RETIRED","SERVANT","SETTING","STADIUM","SUMMARY","SURFACE","SURVIVE","SYMPTOM","TOTALLY","VARIOUS","VERSION","VIOLENT","WARNING","WESTERN","WHETHER","WRITTEN",
"ACADEMIC","ADDITION","ADVANCED","AMBITION","ANALYSIS","ANNOUNCE","ANNOYING","ATTITUDE","CAMPAIGN","CARELESS","CATEGORY","CEREMONY","CHAMPION","CHEERFUL","CHEMICAL","COLOURED","CONCLUDE","CONFUSED","CONSUMER","CONTRAST","CONVINCE","CRIMINAL","CULTURAL","CURRENCY","DECORATE","DEFINITE","DIRECTLY","DISCOUNT","ECONOMIC","EDUCATED","ELECTION","ENTRANCE","EXCHANGE","EXPECTED","FAMILIAR","FIGHTING","FRIGHTEN","FUNCTION","GENEROUS","GRADUATE","GRATEFUL","HEADLINE","HISTORIC","HORRIBLE","IDENTITY","INDICATE","INDIRECT","INNOCENT","INVOLVED","KEYBOARD","LOCATION","MARRIAGE","NORTHERN","OCCASION","OFFICIAL","ORIGINAL","OUTDOORS","PEACEFUL","PERSUADE","PLANNING","PLEASANT","PLEASURE","POLITICS","PORTRAIT","POSSIBLY","POWERFUL","PREPARED","PRESSURE","PREVIOUS","PRINCESS","PRINTING","PRISONER","PRODUCER","PROPERLY","PROPERTY","REACTION","RELATION","RELATIVE","RELAXING","RELIABLE","RELIGION","REPEATED","RESOURCE","ROMANTIC","SECURITY","SENSIBLE","SEPARATE","SLIGHTLY","SOFTWARE","SOUTHERN","SPENDING","STANDARD","STRANGER","STRENGTH","STRONGLY","SUITABLE","TALENTED","UNLIKELY","VALUABLE","WHATEVER","WHENEVER",
"AGREEMENT","ALCOHOLIC","AMBITIOUS","APOLOGIZE","AUTHORITY","BACKWARDS","BREATHING","CANDIDATE","CHALLENGE","CHILDHOOD","COMPLAINT","CONFIDENT","CONTAINER","CURRENTLY","DEPARTURE","DETERMINE","EFFECTIVE","EMERGENCY","ENCOURAGE","ENTERTAIN","ESSENTIAL","EXPLOSION","FINANCIAL","FOLLOWING","GENERALLY","GENTLEMAN","HAPPINESS","HIGHLIGHT","HURRICANE","IMAGINARY","IMMEDIATE","IMMIGRANT","INFLUENCE","INTENTION","MARKETING","MEANWHILE","NARRATIVE","NATURALLY","OBVIOUSLY","OPERATION","ORGANIZED","ORGANIZER","PERFECTLY","POISONOUS","POLITICAL","PRACTICAL","QUALIFIED","QUOTATION","REFERENCE","REGULARLY","RELIGIOUS","REPRESENT","SCULPTURE","SECONDARY","SERIOUSLY","SIMILARLY","STATISTIC","SUBSTANCE","SUMMARIZE","SUPPORTER","TECHNICAL","TECHNIQUE","THEREFORE","TRANSLATE","TRANSPORT","TREATMENT","TYPICALLY","UNDERWEAR","VOLUNTEER","WORLDWIDE",
"ABSOLUTELY","APPRECIATE","ASSIGNMENT","ATMOSPHERE","ATTRACTION","COLLECTION","COMMERCIAL","COMPARISON","COMPETITOR","CONCLUSION","CONNECTION","CONTINUOUS","CONVENIENT","DEFINITION","DETERMINED","DIFFICULTY","EARTHQUAKE","EMPLOYMENT","EVENTUALLY","EXCITEMENT","EXHIBITION","EXPEDITION","EXPERIENCE","EXPERIMENT","FREQUENTLY","FRIENDSHIP","FRIGHTENED","GENERATION","HELICOPTER","HISTORICAL","IMPORTANCE","IMPRESSION","IMPRESSIVE","INCREDIBLY","INGREDIENT","LABORATORY","LITERATURE","MANAGEMENT","ORIGINALLY","PERCENTAGE","PERSONALLY","POLITICIAN","PREDICTION","PREVIOUSLY","PRODUCTION","PROFESSION","PUNISHMENT","SCIENTIFIC","SIMILARITY","THROUGHOUT","UNEMPLOYED","UNPLEASANT",

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
