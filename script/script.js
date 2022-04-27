data = [
  { src: './image/black.png', name: 'black' },
  { src: './image/cap.png', name: 'cap' },
  { src: './image/deadpool.png', name: 'deadpool' },
  { src: './image/falcon.png', name: 'falcon' },
  { src: './image/hawkeye.png', name: 'hawkeye' },
  { src: './image/hulk.png', name: 'hulk' },
  { src: './image/black.png', name: 'black' },
  { src: './image/iron.png', name: 'iron' },
  { src: './image/shangchi.png', name: 'shangchi' },
  { src: './image/spiderman.png', name: 'spiderman' },
  { src: './image/thor.png', name: 'thor' },
  { src: './image/wanda.png', name: 'wanda' },
  { src: './image/wintersolder.png', name: 'wintersolder' },
  { src: './image/wolverine.png', name: 'wolverine' },
  { src: './image/vision.png', name: 'vision' },
  { src: './image/blackpaner.png', name: 'blackpaner' },
  { src: './image/cap.png', name: 'cap' },
  { src: './image/deadpool.png', name: 'deadpool' },
  { src: './image/falcon.png', name: 'falcon' },
  { src: './image/hawkeye.png', name: 'hawkeye' },
  { src: './image/hulk.png', name: 'hulk' },
  { src: './image/iron.png', name: 'iron' },
  { src: './image/shangchi.png', name: 'shangchi' },
  { src: './image/spiderman.png', name: 'spiderman' },
  { src: './image/thor.png', name: 'thor' },
  { src: './image/wanda.png', name: 'wanda' },
  { src: './image/wintersolder.png', name: 'wintersolder' },
  { src: './image/wolverine.png', name: 'wolverine' },
  { src: './image/vision.png', name: 'vision' },
  { src: './image/blackpaner.png', name: 'blackpaner' },
];

let liveScores = 30;
const lives = document.querySelector('.lives');

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
/* ============================================ */
/*                    RENDER                    */
/* ============================================ */
const blockContainer = document.querySelector('.block');

function renderBLock() {
  let data2 = shuffle(data);
  let listImg = [];
  data2.forEach((key) => {
    const block = `<div class="blockImg"  data-name="${key.name}">
    <div class="front">
    <img src="${key.src}" alt="" />
    </div>
    <div class="back">
      <img src="./image/avenger.jpg" alt="" />
    </div>
 </div>`;

    listImg += block;
    blockContainer.innerHTML = listImg;
  });
  lives.innerText = liveScores;
  prepare();
  clickBLock();
}

/* ============================================ */
/*                    PREPARE                   */
/* ============================================ */
function prepare() {
  const blockImg = document.querySelectorAll('.blockImg');

  blockImg.forEach((block) => {
    block.classList.add('flip');
    block.style.pointerEvents = 'none';

    setTimeout(() => {
      block.classList.remove('flip');
      block.style.pointerEvents = 'all';
    }, 5000);
  });
}
renderBLock();

/* ============================================ */
/*                     CLICK                    */
/* ============================================ */

function clickBLock() {
  const blockImg = document.querySelectorAll('.blockImg');

  blockImg.forEach((block) => {
    block.addEventListener('click', () => {
      block.classList.add('flip');
      block.style.pointerEvents = 'none';
      setTimeout(() => {
        check(block);
      }, 1000);
    });
  });
}

/* ============================================ */
/*                     CHECK                    */
/* ============================================ */
let count = 0;
let firstChoose, secondChoose;

function check(target) {
  if (count === 0) {
    firstChoose = target;
    count++;
  } else {
    secondChoose = target;
    count = 0;
    checkRight(firstChoose, secondChoose);
  }
}

function checkRight(firstChoose, secondChoose) {
  nameFirst = firstChoose.dataset.name;
  nameSecond = secondChoose.dataset.name;
  const blockImg = document.querySelectorAll('.blockImg');

  if (nameFirst !== nameSecond) {
    firstChoose.classList.remove('flip');
    secondChoose.classList.remove('flip');

    firstChoose.style.pointerEvents = 'all';
    secondChoose.style.pointerEvents = 'all';
    setTimeout(() => {
      liveScores--;
      lives.innerText = liveScores;
    }, 100);

    if (liveScores == 1) {
      blockImg.forEach((key) => {
        key.classList.remove('flip');
      });
      setTimeout(() => {
        liveScores = 30;
        renderBLock();
      }, 2000);
    }
  } else {
    checkRightAll();
  }
}
function checkRightAll() {
  const blockImg = document.querySelectorAll('.flip');
  console.log('checkRightAll -> blockImg', blockImg);
  if (blockImg.length == 30) {
    blockImg.forEach((key) => {
      key.classList.remove('flip');
    });
    setTimeout(() => {
      liveScores = 30;
      renderBLock();
    }, 2000);
  }
}
/* ============================================ */
/*                     RESET                    */
/* ============================================ */
const resetBtn = document.querySelector('.reset');

resetBtn.addEventListener('click', () => {
  liveScores = 30;
  renderBLock();
});
