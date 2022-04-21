'use strict'
var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

var btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */
var src = displayedImage.getAttribute('src');
thumbBar.addEventListener('click', function(){
  var getTargetSrc = event.target.getAttribute('src')
  displayedImage.setAttribute('src',`${getTargetSrc}`)
})

for(var selectedPic = 1 ; selectedPic < 6 ; selectedPic++) {
  createNewPic(selectedPic);
};
function createNewPic (indexPic) {
  var newImage = document.createElement('img');
  newImage.setAttribute('src', `images/pic${indexPic}.jpg`);
  thumbBar.appendChild(newImage);
};
/* Wiring up the Darken/Lighten button */

