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
let currentImg = displayedImage.getAttribute('src');

arrowLeft.addEventListener('click', function(){
 
});
arrowRight.addEventListener('click', function(){
  
});