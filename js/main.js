
const ham = document.querySelector('#js-hamburger'); //js-hamburgerの要素を取得し、変数hamに格納
const nav = document.querySelector('#js-nav'); //js-navの要素を取得し、変数navに格納


ham.addEventListener('click', function (){
    ham.classList.toggle('active'); //ハンバーガーメニューにactiveクラスをつけ外し
    nav.classList.toggle('active'); //ナビゲーションメニューにactiveクラスをつけ外し

});

