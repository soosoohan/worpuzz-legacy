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


  '가화만사성', '각골난망', '각양각색', '각자도생', '각주구검', '간난신고', '간담상조', '감개무량', '감언이설', '갑론을박', '개과천선', '거두절미', '건곤일척', '격세지감', '견강부회', '견원지간', '결사항전', '결자해지', '결초보은', '경거망동', '경국지색', '경이원지', '경천동지', '계란유골', '계륵', '고군분투', '고색창연', '고육지책', '고진감래', '공리공론', '공수래공수거', '과유불급', '관포지교', '괄목상대', '광풍제월', '교언영색', '구사일생', '구제불능', '구중궁궐', '구태의연', '군계일학', '궁여지책', '권모술수', '권선징악', '권토중래', '근검절약', '근묵자흑', '금과옥조', '금상첨화', '금시초문', '금의야행', '금의환향', '금자탑', '금지옥엽', '기고만장', '기상천외', '기세등등', '기승전결', '기암괴석', '기우', '기절초풍', '기정사실', '기진맥진', '길흉화복', '낙락장송', '낙심천만', '난공불락', '난중유골', '난형난제', '남가일몽', '남녀노소', '남부여대', '남존여비', '낭중지추', '내우외환', '노기충전', '노발대발', '노심초사', '노익장', '논공행상', '논리정연', '누란지위', '능소능대', '다다익선', '다사다난', '다재다능', '단도직입', '당연지사', '대경실색', '대기만성', '대담무쌍', '대대손손', '대동소이', '대명천지', '대서특필', '대성통곡', '도원결의', '독수공방', '독야청청', '동고동락', '동문서답', '동문수학', '동병상련', '동분서주', '동상이몽', '동서고금', '동서남북', '동시다발', '동족상잔', '두문불출', '득의만면', '득의양양', '등용문', '등한시', '마이동풍', '막무가내', '막상막하', '막역지우', '막전막후', '만고불변', '만병통치', '만사여의', '만사형통', '만수무강', '만신창이', '만장일치', '만전지책', '망망대해', '망연자실', '망중유한', '매점매석', '맹모삼천지교', '멸사봉공', '명견만리', '명경지수', '명명백백', '명불허전', '명실상부', '명약관화', '명언명구', '목불인견', '무궁무진', '무념무상', '무릉도원', '무법천지', '무병장수', '무사안일', '무색무취', '무소부재', '무소불위', '무용지물', '무위도식', '무인지경', '무지몽매', '무학무식', '묵묵부답', '문전박대', '문전성시', '물극필반', '물심양면', '물아일체', '미관말직', '미봉책', '미사여구', '미생지신', '미인박명', '미풍양속', '밀운불우', '박람강기', '박수갈채', '박장대소', '박학다식', '반면교사', '반신반의', '반신불수', '반포지효', '발본색원', '방방곡곡', '방약무인', '배수진', '배은망덕', '백가쟁명', '백골난망', '백년가약', '백년지계', '백년하청', '백년해로', '백면서생', '백문불여일견', '백미', '백발백중', '백의종군', '백전노장', '백전백승', '백척간두', '백해무익', '변화무쌍', '보편타당', '복잡다단', '부국강병', '부귀영화', '부전자전', '부지기수', '부지불식', '부창부수', '부화뇌동', '분골쇄신', '분기충천', '불가근불가원', '불가사의', '불가피', '불가항력', '불광불급', '불로장생', '불문가지', '불문곡직', '불상사', '불식주야', '불야성', '불요불급', '불철주야', '불편부당', '불평불만', '불혹', '붕우유신', '비몽사몽', '비분강개', '비일비재', '빙산일각', '사각지대', '사고무친', '사리분별', '사리사욕', '사면초가', '사사건건', '사사오입', '사상누각', '사생결단', '사생지교', '사서오경', '사실무근', '사자성어', '사통팔달', '사필귀정', '산전수전', '살신성인', '삼고초려', '삼라만상', '삼사일언', '삼삼오오', '삼수갑산', '삼십육계', '삼일천하', '삼척동자', '상명하복', '상부상조', '상선약수', '상전벽해', '새옹지마', '색즉시공', '생로병사', '생사고락', '생사기로', '선견지명', '선공후사', '선남선녀', '설상가상', '설왕설래', '성동격서', '성심성의', '성인군자', '세상만사', '세한고절', '소탐대실', '속수무책', '속전속결', '솔선수범', '솔직담백', '송구영신', '수구초심', '수복강녕', '수수방관', '수어지교', '수주대토', '순망치한', '승승장구', '시기상조', '시시각각', '시시비비', '시정잡배', '시종여일', '시종일관', '시행착오', '신성불가침', '신세한탄', '신출귀몰', '실사구시', '심기일전', '심사숙고', '십년감수', '십시일반', '십중팔구', '아수라장', '아연실색', '아전인수', '악전고투', '악화일로', '안분지족', '안하무인', '암중모색', '애매모호', '애지중지', '야반도주', '약육강식', '양상군자', '양자택일', '어부지리', '어불성설', '언감생심', '언중유골', '언행일치', '엄동설한', '역린', '역지사지', '연말연시', '연중무휴', '열심지취', '영구불변', '영웅호색', '예측불허', '오곡백과', '오리무중', '오만불손', '오매불망', '오불관언', '오십보백보', '오월동주', '오장육부', '오합지졸', '옥석구분', '온고지신', '와신상담', '완전무결', '왈가왈부', '외유내강', '요산요수', '요절복통', '요지부동', '용감무쌍', '용두사미', '용맹무쌍', '용호상박', '우공이산', '우여곡절', '우왕좌왕', '우유부단', '우후죽순', '운칠기삼', '원교근공', '원기왕성', '원리원칙', '원천봉쇄', '위기일발', '위풍당당', '위험천만', '유구무언', '유명무실', '유분수', '유비무환', '유아독존', '유유상종', '유유자적', '유일무이', '유종지미', '은인자중', '읍참마속', '의기양양', '의기투합', '의미심장', '의식불명', '이구동성', '이목구비', '이심전심', '이역만리', '이열치열', '이왕지사', '이용후생', '이율배반', '이합집산', '이해득실', '이해타산', '이현령비현령', '인과응보', '인면수심', '인사불성', '인산인해', '인정사정', '인지상정', '일가견', '일각여삼추', '일각천금', '일거수일투족', '일거양득', '일구이언', '일기당천', '일도양단', '일망타진', '일맥상통', '일면식', '일목요연', '일문일답', '일사불란', '일사천리', '일석이조', '일언반구', '일자무식', '일장춘몽', '일촉즉발', '일취월장', '일파만파', '일편단심', '일필휘지', '일확천금', '일희일비', '임기응변', '임전무퇴', '입신양명', '자강불식', '자격지심', '자급자족', '자린고비', '자수성가', '자승자박', '자신만만', '자업자득', '자유자재', '자중지란', '자초지종', '자타공인', '자포자기', '자화자찬', '작심삼일', '장삼이사', '재승박덕', '적반하장', '적시적지', '적재적소', '전광석화', '전대미문', '전도유망', '전심전력', '전전긍긍', '전지전능', '전화위복', '절세가인', '절체절명', '점입가경', '정론직필', '정문일침', '정신일도하사불성', '정저지와', '정정당당', '조강지처', '좌불안석', '좌우지간', '좌지우지', '좌충우돌', '주객전도', '주경야독', '주도면밀', '주마간산', '주지육림', '죽마고우', '중과부적', '중구난방', '중언부언', '지고지선', '지극정성', '지기지우', '지록위마', '지리멸렬', '지위고하', '지음', '지지부진', '지행일치', '진면목', '진수성찬', '진인사대천명', '진일보', '진퇴양난', '진퇴유곡', '질서정연', '차일피일', '천고마비', '천군만마', '천근만근', '천만다행', '천방지축', '천부당만부당', '천생연분', '천신만고', '천양지차', '천우신조', '천의무봉', '천인공노', '천재일우', '천재지변', '천정부지', '천지개벽', '천진난만', '천태만상', '천편일률', '천하태평', '철두철미', '철천지한', '첩첩산중', '청렴결백', '청빈낙도', '청산유수', '청천벽력', '청출어람', '초록동색', '초전박살', '초지일관', '촌철살인', '추풍낙엽', '춘하추동', '충언역이', '취사선택', '측은지심', '칠전팔기', '침소봉대', '쾌도난마', '타산지석', '탐관오리', '태연자약', '태평세월', '토사구팽', '파란만장', '파렴치한', '파상공세', '파안대소', '파죽지세', '팔방미인', '패가망신', '평지풍파', '포복절도', '폭풍전야', '표리부동', '풍기문란', '풍비박산', '풍전등화', '피차일반', '하극상', '하마평', '학수고대', '함흥차사', '해괴망측', '허례허식', '허송세월', '허심탄회', '허허실실', '혈기왕성', '혈혈단신', '형설지공', '형형색색', '호가호위', '호각지세', '호사다마', '호사유피', '호시탐탐', '호언장담', '호연지기', '호의호식', '호형호제', '혹세무민', '혼비백산', '혼연일체', '홍익인간', '화기애애', '화려강산', '화룡점정', '화무십일홍', '확고부동', '환골탈태', '환호작약', '황당무계', '회자정리', '횡설수설', '효시', '후회막급', '흑색선전', '흥망성쇠', '흥미진진', '흥청망청', '희노애락',
  
  
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