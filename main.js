'use strict'
const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
/* Looping through images */

thumbBar.addEventListener('click', function(event){
  const getTargetSrc = event.target.getAttribute('src');
  const getTargetDataIndex = event.target.getAttribute('data-index');
  displayedImage.setAttribute('src',`${getTargetSrc}`);
  displayedImage.setAttribute('data-index',getTargetDataIndex)
});

for(let selectedPic = 1 ; selectedPic < 6 ; selectedPic++) {
  createNewPic(selectedPic);
}

function createNewPic (indexPic) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', `images/pic${indexPic}.jpg`);
  newImage.setAttribute('data-index', indexPic);
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
  const currentImgIndex = Number(displayedImage.getAttribute('data-index'));
  const nextImgIndex = getIndexOfNextElementLeft(currentImgIndex);
  displayedImage.setAttribute('src',`images/pic${nextImgIndex}.jpg`);
  displayedImage.setAttribute('data-index', nextImgIndex)
});

arrowRight.addEventListener('click', function(){
  const currentImgIndex = Number(displayedImage.getAttribute('data-index'));
  const nextImgIndex = getIndexOfNextElementRight(currentImgIndex);
  displayedImage.setAttribute('src',`images/pic${nextImgIndex}.jpg`);
  displayedImage.setAttribute('data-index', nextImgIndex)
});

 function getIndexOfNextElementRight(currentImgIndex){
     if (currentImgIndex === 5) {
        currentImgIndex = 1;
     } else {
      currentImgIndex++;
     }
     let newIndexOnStr = currentImgIndex;
     return newIndexOnStr;
 }

 function getIndexOfNextElementLeft(currentImgIndex){
    if (currentImgIndex === 1) {
       currentImgIndex = 5;
    } else {
     currentImgIndex--;
    }
    let newIndexOnStr = currentImgIndex;
    return newIndexOnStr;
 }
 
 