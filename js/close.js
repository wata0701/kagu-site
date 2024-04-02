const clos = document.querySelector('#close_menu');

clos.addEventListener('mouseup', function (){
    ham.classList.remove('active'); //ハンバーガーメニューにactiveクラスを外し
    nav.classList.remove('active'); //ナビゲーションメニューにactiveクラスを外し
});