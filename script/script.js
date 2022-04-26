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
  clickBLock();
}

renderBLock();

/* ============================================ */
/*                     CLICK                    */
/* ============================================ */
function clickBLock() {
  const blockImg = document.querySelectorAll('.blockImg');

  blockImg.forEach((block) => {
    block.addEventListener('click', () => {
      block.classList.toggle('flip');
      check();
    });
  });
}

/* ============================================ */
/*                     CHECK                    */
/* ============================================ */
function check() {
  const blockImg = document.querySelectorAll('.flip');

  
}
