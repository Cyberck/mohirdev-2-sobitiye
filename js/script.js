/* -=- Darsga Topshiriq

1) list of news knopkani ochirip tashlang

2) 'BBC' yozuvni orniga 'UzNews'ga almashtiring va rangini oziz istagan rangni tanglang

3) glavniy fon dagi rasimni ozgartiring. Rasim joylashuvi 'img' papkani ichida

4) bizlarda yangiliklardan tashkil topgan massiv bor. 
Yangiliklarni massiv yordamida chiqaring. Html dan ochirip Faqat JS code yozip.

5) yangiliklarni oldiga ularni raqamlarini qoyip chiqimg (1, 2, 3)

6) read more knopkaga border-radius style qoshing

*/

"use strict";

const news =  [
  "FOOTBALL",
  "BASKETBALL",
  "UFC",
  "BOX",
  "AMERICAN FOOTBAL IN EU...",
];

const delButton = document.querySelector('.promo__btn').remove('button'),
      change = document.querySelector('.promo__menu-item'),
      uzNewsClass = document.querySelector('.promo__genre'),
      uzNwChange = document.querySelector('.promo__menu-item'),
      imgChange = document.querySelector('.promo__bg'),
      list = document.querySelector('.promo__interactive-list'),
      title = document.querySelector('.promo__interactive-title');
      

uzNewsClass.textContent = 'UzNews';
uzNwChange.textContent = 'Uz Matbuot';
imgChange.style.background = 'url("../img/2.jpg")center center/cover no-repeat';

title.innerHTML = '';
title.innerHTML = `<div class="promo__interactive-title"> THE BEST SPORT NEWS </div>`;

list.innerHTML = '';
news.sort();
news.forEach((film, i) => {
  list.innerHTML += `<li class="promo__interactive-item"> ${i + 1} ${film} <div class="delete"></div> </li>`;
});




