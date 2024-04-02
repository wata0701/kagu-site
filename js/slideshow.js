const slide = document.getElementById('slide');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const indicator = document.getElementById('indicator');
const lists = document.querySelectorAll('.list');
const totalSlides = lists.length;
let count = 0;
let autoPlayInterval;

  function updateListBackground(){
    for (let i = 0; i < lists.length; i++){
        lists[i].style.backgroundColor = i === count % totalSlides ? '#000' : '#fff';
    }
  }
  
  // ↓関数を定義
function nextClick() {
    slide.classList.remove(`slide${count % totalSlides + 1}`);
    count++;
    slide.classList.add(`slide${count % totalSlides + 1}`);
    updateListBackground();
}
function prevClick() {
    slide.classList.remove(`slide${count % totalSlides + 1}`);
    count--;
    if(count < 0)count = totalSlides - 1;
    slide.classList.add(`slide${count % totalSlides + 1}`);
    updateListBackground();
}

// ↓関数を定義
// ↓自動再生を開始する関数
function startAutoPlay() {
    autoPlayInterval = setInterval(nextClick, 6000);
  }
  
  // ↓自動再生をリセットする関数
  function resetAutoPlayInterval() {
    clearInterval(autoPlayInterval);
  startAutoPlay();
  }
  // ↓クリックイベントのリスナーを登録
next.addEventListener('click', () => {
    nextClick();
    resetAutoPlayInterval();
  });
  prev.addEventListener('click', () => {
    prevClick();
    resetAutoPlayInterval();
  });

  // ↓クリックイベントのリスナーを登録
indicator.addEventListener('click', (event) => {
    if (event.target.classList.contains('list')) {
      const index = Array.from(lists).indexOf(event.target);
      slide.classList.remove(`slide${count % totalSlides + 1}`);
      count = index;
      slide.classList.add(`slide${count % totalSlides + 1}`);
      updateListBackground();
      resetAutoPlayInterval();
    }
  });



// ↓自動再生を実行
startAutoPlay();
