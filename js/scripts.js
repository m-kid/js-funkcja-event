

var klik = document.getElementById('addElem');
var list = document.getElementById('Lista');
var Bullet1 = document.createElement('li');
var Bullet2 = document.createElement('li');
var Bullet3 = document.createElement('li');

Bullet1.innerHTML =  "item 1";
Bullet2.innerHTML =  "item 2";
Bullet3.innerHTML =  "item 3";

function showBullets () {
    list.appendChild(Bullet1);
    list.appendChild(Bullet2);
    list.appendChild(Bullet3);
    klik.value = 'Schowaj';
}

function hideBullets () {
    Bullet1.remove();
    Bullet2.remove();
    Bullet3.remove();
    klik.value = "Dodaj";
}

function showOrHide () {
    if (klik.value == "Dodaj") {
        showBullets();
    } else {
        hideBullets();
    }
}

klik.addEventListener('click', showOrHide);