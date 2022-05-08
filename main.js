'use strict'
let displayedImage = document.querySelector('.displayed-img');
let thumbBar = document.querySelector('.thumb-bar');

let btn = document.querySelector('button');
let overlay = document.querySelector('.overlay');

let arrowLeft = document.querySelector('.arrow_left');
let arrowRight = document.querySelector('.arrow_right');

/* Looping through images */
thumbBar.addEventListener('click', function(){
  let getTargetSrc = event.target.getAttribute('src');
  displayedImage.setAttribute('src',`${getTargetSrc}`);
});

for(let selectedPic = 1 ; selectedPic < 6 ; selectedPic++) {
  createNewPic(selectedPic);
}
function createNewPic (indexPic) {
  let newImage = document.createElement('img');
  newImage.setAttribute('src', `images/pic${indexPic}.jpg`);
  thumbBar.appendChild(newImage);
}
/* Wiring up the Darken/Lighten button */

let btnClass = btn.getAttribute('class');
btn.addEventListener('click', function(){
  if (btn.className === 'dark') {
    overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    btn.setAttribute('class','light');
    btn.textContent = 'Светлее';
  } else if (btn.className === 'light') {
    overlay.style.backgroundColor = "rgba(0,0,0,0.0)";
    btn.setAttribute('class','dark');
    btn.textContent = 'Темнее';
  }
});

/* Made sliders */ 
arrowLeft.addEventListener('click', function(){
  let currentImg = displayedImage.getAttribute('src');
  let currentImgIndex = Number(currentImg.charAt(10)); 
  let nextImgIndex = getIndexOfNextElementLeft(currentImgIndex);
  //  заменить текущий индекс на следующий индекс , в пути у картинке
  let newIndexOnStr = String(currentImgIndex).replace(currentImgIndex,nextImgIndex);
  //  задать src к  новой картинке на новый ()
   displayedImage.setAttribute('src',`images/pic${newIndexOnStr}.jpg`);
  //  отображается новая картинка
});
arrowRight.addEventListener('click', function(){
  let currentImg = displayedImage.getAttribute('src');
  let currentImgIndex = Number(currentImg.charAt(10)); 
  let nextImgIndex = getIndexOfNextElementRight(currentImgIndex);
  //  заменить текущий индекс на следующий индекс , в пути у картинке
  let newIndexOnStr = String(currentImgIndex).replace(currentImgIndex,nextImgIndex);
  //  задать src к  новой картинке на новый ()
   displayedImage.setAttribute('src',`images/pic${newIndexOnStr}.jpg`);
  //  отображается новая картинка
});
  //  получить индекс следуещего елемета
 function getIndexOfNextElementRight(currentImgIndex){
   if (event.target){
     if (currentImgIndex === 5) {
        currentImgIndex = 1;
     } else {
      currentImgIndex ++;
     }
     var newIndexOnStr = String(currentImgIndex);
   }
   return newIndexOnStr;
 }
 //  получить индекс следуещего елемета
 function getIndexOfNextElementLeft(currentImgIndex){
  if (event.target){
    if (currentImgIndex === 1) {
       currentImgIndex = 5;
    } else {
     currentImgIndex --;
    }
    var newIndexOnStr = String(currentImgIndex);
  }
  return newIndexOnStr;
 }
 